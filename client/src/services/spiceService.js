import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/spices';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const spices = Object.values(result);

        return spices;

    },
    create(spiceData) {
        return request.post(baseUrl, spiceData);
    }
}