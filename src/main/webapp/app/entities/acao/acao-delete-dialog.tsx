import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';
import { getEntity, deleteEntity } from './acao.reducer';

export const AcaoDeleteDialog = (props: RouteComponentProps<{ id: string }>) => {
  const [loadModal, setLoadModal] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
    setLoadModal(true);
  }, []);

  const acaoEntity = useAppSelector(state => state.acao.entity);
  const updateSuccess = useAppSelector(state => state.acao.updateSuccess);

  const handleClose = () => {
    props.history.push('/acao');
  };

  useEffect(() => {
    if (updateSuccess && loadModal) {
      handleClose();
      setLoadModal(false);
    }
  }, [updateSuccess]);

  const confirmDelete = () => {
    dispatch(deleteEntity(acaoEntity.id));
  };

  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="acaoDeleteDialogHeading">
        Confirm delete operation
      </ModalHeader>
      <ModalBody id="biomobv30App.acao.delete.question">Are you sure you want to delete this Acao?</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp; Cancel
        </Button>
        <Button id="jhi-confirm-delete-acao" data-cy="entityConfirmDeleteButton" color="danger" onClick={confirmDelete}>
          <FontAwesomeIcon icon="trash" />
          &nbsp; Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AcaoDeleteDialog;
