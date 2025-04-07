import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/spices';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const spices = Object.values(result);

        return spices;

    },
    getOne(spiceId) {
        return request.get(`${baseUrl}/${spiceId}`);
    },
    create(spiceData) {
        return request.post(baseUrl, spiceData);
    }
}