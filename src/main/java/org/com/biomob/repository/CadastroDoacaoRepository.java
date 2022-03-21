package org.com.biomob.repository;

import java.util.List;
import org.com.biomob.domain.CadastroDoacao;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CadastroDoacao entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CadastroDoacaoRepository extends JpaRepository<CadastroDoacao, Long> {
    @Query("select cadastroDoacao from CadastroDoacao cadastroDoacao where cadastroDoacao.user.login = ?#{principal.username}")
    List<CadastroDoacao> findByUserIsCurrentUser();
}
