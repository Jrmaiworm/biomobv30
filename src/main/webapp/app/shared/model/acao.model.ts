import dayjs from 'dayjs';
import { IDoacaoItem } from 'app/shared/model/doacao-item.model';
import { IUser } from 'app/shared/model/user.model';
import { ISolicitacaoItem } from 'app/shared/model/solicitacao-item.model';

export interface IAcao {
  id?: number;
  dataCriacao?: string | null;
  usuarioCriacaoAcao?: string | null;
  pendente?: boolean | null;
  dataExecucaoAcao?: string | null;
  ativa?: boolean | null;
  fotoContentType?: string | null;
  foto?: string | null;
  observacoes?: string | null;
  doacaoItem?: IDoacaoItem | null;
  user?: IUser | null;
  solicitacaoItem?: ISolicitacaoItem | null;
}

export const defaultValue: Readonly<IAcao> = {
  pendente: false,
  ativa: false,
};
