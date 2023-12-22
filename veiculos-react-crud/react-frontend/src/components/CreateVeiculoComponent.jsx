import React, { Component } from 'react';

class CreateVeiculoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            placa: '',
            cor: '',
            marca: '',
            nomeProp: '',
            cpfProp: '',
            telProp: ''
        }

        this.changePlacaHandler = this.changePlacaHandler.bind(this);
        this.changeCorHandler = this.changeCorHandler.bind(this);
        this.changeMarcaHandler = this.changeMarcaHandler.bind(this);
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
        this.saveVeiculo = this.saveVeiculo.bind(this);
    }

    saveVeiculo = (e) => {
        e.preventDefault();
        let veiculo = {placa: this.state.placa, cor: this.state.cor, marca: this.state.marca, nomeProp: this.state.nomeProp, cpfProp: this.state.cpfProp, telProp: this.state.telProp}
        console.log('veiculo => ' + JSON.stringify(veiculo));
    }

    changePlacaHandler(event) {
        this.setState({placa: event.target.value});
    }

    changeCorHandler(event) {
        this.setState({cor: event.target.value});
    }

    changeMarcaHandler(event) {
        this.setState({marca: event.target.value});
    }

    changeNomeHandler(event) {
        this.setState({nomeProp: event.target.value});
    }

    changeCpfHandler(event) {
        this.setState({cpfProp: event.target.value});
    }

    changeTelefoneHandler(event) {
        this.setState({telProp: event.target.value});
    }

    cancel() {
        this.props.history.push('/veiculo')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Veiculo</h3>
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">Placa</label>
                                        <input type="text" placeholder='Placa' name='placa' className='form-control' value={this.state.placa} onChange={this.changePlacaHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">Cor</label>
                                        <input type="text" placeholder='Cor' name='cor' className='form-control' value={this.state.cor} onChange={this.changeCorHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">Marca</label>
                                        <input type="text" placeholder='Marca' name='marca' className='form-control' value={this.state.marca} onChange={this.changeMarcaHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">Nome</label>
                                        <input type="text" placeholder='Nome' name='nome' className='form-control' value={this.state.nomeProp} onChange={this.changeNomeHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">CPF</label>
                                        <input type="number" placeholder='CPF' name='cpf' className='form-control' value={this.state.cpfProp} onChange={this.changeCpfHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="">Telefone</label>
                                        <input type="number" placeholder='Telefone' name='tefelone' className='form-control' value={this.state.telProp} onChange={this.changeTelefoneHandler} />
                                    </div>

                                    <button className='btn btn-sucess' onClick={this.saveVeiculo}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateVeiculoComponent;