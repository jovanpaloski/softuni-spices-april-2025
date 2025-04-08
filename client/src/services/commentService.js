import request from "../utils/request.js";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    async getAll(spiceId) {
        const comments = await request.get(baseUrl);

        const spiceComments = Object.values(comments).filter(comment => comment.spiceId === spiceId);

        return spiceComments;
    },
    create(email, spiceId, comment) {
        return request.post(baseUrl, {email, spiceId, comment});
    }
};