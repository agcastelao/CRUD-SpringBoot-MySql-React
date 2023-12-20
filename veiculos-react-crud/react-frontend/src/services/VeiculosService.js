import axios from "axios";

const VEICULOS_API_BASE_URL = "http://localhost:8080/api/v1/veiculos";

class VeiculosService {

    getVeiculos() {
        return axios.get(VEICULOS_API_BASE_URL);
    }

}

export default new VeiculosService()