package tomus.veiculos.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "veiculos")

public class veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Placa")
    private String placa;

    @Column(name = "Cor")
    private String cor;
    
    @Column(name = "Marca")
    private String marca;
    
    @Column(name = "Nome_dono")
    private String nomeProp;
    
    @Column(name = "CPF_dono")
    private String cpfProp;
    
    @Column(name = "TelefoneDono")
    private String telProp;

    public veiculo() {

    }

    public veiculo(String placa, String cor, String marca, String nomeProp, String cpfProp, String telProp) {
        this.placa = placa;
        this.cor = cor;
        this.marca = marca;
        this.nomeProp = nomeProp;
        this.cpfProp = cpfProp;
        this.telProp = telProp;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getPlaca() {
        return placa;
    }
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    public String getCor() {
        return cor;
    }
    public void setCor(String cor) {
        this.cor = cor;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getNomeProp() {
        return nomeProp;
    }
    public void setNomeProp(String nomeProp) {
        this.nomeProp = nomeProp;
    }
    public String getCpfProp() {
        return cpfProp;
    }
    public void setCpfProp(String cpfProp) {
        this.cpfProp = cpfProp;
    }
    public String getTelProp() {
        return telProp;
    }
    public void setTelProp(String telProp) {
        this.telProp = telProp;
    }

    
}
