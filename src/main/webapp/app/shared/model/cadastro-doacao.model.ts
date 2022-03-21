import dayjs from 'dayjs';
import { IUser } from 'app/shared/model/user.model';
import { IDoacaoItem } from 'app/shared/model/doacao-item.model';

export interface ICadastroDoacao {
  id?: number;
  doacaoAnonima?: boolean | null;
  realizaEntrega?: boolean | null;
  dataDoacao?: string | null;
  logradouro?: string | null;
  numero?: number | null;
  bairro?: string | null;
  cidade?: string | null;
  cep?: string | null;
  estado?: string | null;
  pais?: string | null;
  complemento?: string | null;
  user?: IUser | null;
  descricaos?: IDoacaoItem[] | null;
}

export const defaultValue: Readonly<ICadastroDoacao> = {
  doacaoAnonima: false,
  realizaEntrega: false,
};
