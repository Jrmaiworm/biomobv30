package org.com.biomob.repository;

import java.util.List;
import org.com.biomob.domain.CadastroSolicitacao;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CadastroSolicitacao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CadastroSolicitacaoRepository extends JpaRepository<CadastroSolicitacao, Long> {
    @Query(
        "select cadastroSolicitacao from CadastroSolicitacao cadastroSolicitacao where cadastroSolicitacao.user.login = ?#{principal.username}"
    )
    List<CadastroSolicitacao> findByUserIsCurrentUser();
}
