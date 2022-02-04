const Cache = require('@11ty/eleventy-cache-assets');


module.exports = async function () {
    const response = await Cache('https://stacindex.org/api/ecosystem', {
        duration: "4h",
		type: "json" 
    });
    
    return response;
}