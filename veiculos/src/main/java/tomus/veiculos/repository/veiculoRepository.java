package tomus.veiculos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tomus.veiculos.model.veiculo;

@Repository
public interface veiculoRepository extends JpaRepository<veiculo, Long>{
    
}
