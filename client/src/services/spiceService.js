import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/spices';

export default {
    async getAll(signal) {
        const result = await request.get(baseUrl, signal);

        const spices = Object.values(result);

        return spices;

    },
    getOne(spiceId) {
        return request.get(`${baseUrl}/${spiceId}`);
    },
    create(spiceData) {
        return request.post(baseUrl, spiceData);
    },
    edit(spiceId, spiceData) {
        return request.put(`${baseUrl}/${spiceId}`, { ...spiceData, _id: spiceId });
    },
    delete(spiceId) {
        return request.delete(`${baseUrl}/${spiceId}`);
    },
}