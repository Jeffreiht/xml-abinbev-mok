const xmljs2 = require('xmljs2');
const axios = require('axios');

const getXml = async() => {
    const data = await axios.get('http://www.dneonline.com/calculator.asmx?wsdl');
    converToJson(data);
};


const converToJson = (data) =>{
    const parser = xmljs2.Parser();

    parser.parseString(data.data, (err, result) => {
        console.dir(result);
    });
}

getXml();