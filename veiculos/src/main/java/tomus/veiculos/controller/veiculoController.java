package tomus.veiculos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tomus.veiculos.model.veiculo;
import tomus.veiculos.repository.veiculoRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RestController
@RequestMapping("/api/v1/")
public class veiculoController {
    
    @Autowired
    private veiculoRepository veiculoRepository;

    //get all veiculos
    @GetMapping("/veiculos")
    public List<veiculo> getAllveiculos() {
        return veiculoRepository.findAll();
    }    
}


