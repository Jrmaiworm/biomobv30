import { IItem } from 'app/shared/model/item.model';
import { ICadastroDoacao } from 'app/shared/model/cadastro-doacao.model';
import { IAcao } from 'app/shared/model/acao.model';

export interface IDoacaoItem {
  id?: number;
  imagemContentType?: string | null;
  imagem?: string | null;
  quantidade?: number | null;
  observacao?: string | null;
  descricao?: IItem | null;
  cadastroDoacao?: ICadastroDoacao | null;
  acao?: IAcao | null;
}

export const defaultValue: Readonly<IDoacaoItem> = {};
