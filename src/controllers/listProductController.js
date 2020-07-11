const axios = require("axios");

module.exports = {
    async index(request, response) {
        const { id } = request.query;

        const apiResponse  = await axios.get(
            `https://${process.env.ACCOUNT}.myvtex.com/api/catalog_system/pub/products/search?fq=productId:${id}`
        );
        
        return response.json(apiResponse.data);
    }
}