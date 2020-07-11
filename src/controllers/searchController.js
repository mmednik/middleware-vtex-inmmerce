const axios = require("axios");

module.exports = {
    async index(request, response) {

        const apiResponse  = await axios.get(
            `https://${process.env.ACCOUNT}.myvtex.com/api/catalog_system/pub/products/search`
        );
        
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        return response.json(apiResponse.data);
    }
}