import React, { Component } from 'react';
import VeiculosService from '../services/VeiculosService';

class ListVeiculosComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            veiculos: []
        }

    }

    componentDidMount() {
        VeiculosService.getVeiculos().then((res) => {
            this.setState({ veiculos: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Veiculos List</h2>
                <div className="row">
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Veiculos Placa</th>
                                <th>Veiculos Cor</th>
                                <th>Veiculos Marca</th>
                                <th>Dono Nome</th>
                                <th>Dono CPF</th>
                                <th>Dono Telefone</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.veiculos.map(
                                    veiculo => 
                                    <tr key = {veiculo.id}>
                                        <td>{ veiculo.placa}</td>
                                        <td>{ veiculo.cor}</td>
                                        <td>{ veiculo.marca}</td>
                                        <td>{ veiculo.nomeProp}</td>
                                        <td>{ veiculo.cpfProp}</td>
                                        <td>{ veiculo.telProp}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListVeiculosComponent;