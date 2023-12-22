package tomus.veiculos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tomus.veiculos.model.veiculo;
import tomus.veiculos.repository.veiculoRepository;

@CrossOrigin (origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1")
public class veiculoController {
    
    @Autowired
    private veiculoRepository veiculoRepository;

    //get all veiculos
    @GetMapping("/veiculos")
    public List<veiculo> getAllveiculos() {
        return veiculoRepository.findAll();
    }    

    // create veiculo rest api
    @PostMapping("/veiculos")
    public veiculo createVeiculo(@RequestBody veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }
}


