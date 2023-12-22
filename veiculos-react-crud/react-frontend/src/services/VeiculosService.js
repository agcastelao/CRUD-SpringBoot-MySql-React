import axios from "axios";

const VEICULOS_API_BASE_URL = "http://localhost:8080/api/v1/veiculos";

class VeiculosService {

    async getVeiculos() {
        try {
            const response = await axios.get(VEICULOS_API_BASE_URL);
            return response;
        } catch (error) {
            console.log("erro");
            throw error;
        }
    }

}

export default new VeiculosService();
