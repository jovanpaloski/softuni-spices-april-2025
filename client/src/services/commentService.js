import request from "../utils/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    create(email, spiceId, comment) {
        return request.post(baseUrl, {email, spiceId, comment});
    }
};