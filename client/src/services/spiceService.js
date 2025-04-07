const baseUrl = 'http://localhost:3030/jsonstore/spices';

export default {
    async create(spiceData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(spiceData),
        });

        const result = await response.json();

        return result;
    }
}