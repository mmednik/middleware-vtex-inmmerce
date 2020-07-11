const axios = require("axios");

module.exports = {
    async index(request, response) {
        const apiResponse  = await axios.get(
            `https://${process.env.ACCOUNT}.myvtex.com/api/catalog_system/pvt/products/GetProductAndSkuIds`,
            {
                headers: {
                    "x-vtex-api-appkey": process.env.APP_KEY,
                    "x-vtex-api-apptoken": process.env.APP_TOKEN
                }
            }
        );
        
        const {data, range} = apiResponse.data;
        return response.json({data, range});
    }
}