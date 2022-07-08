const xmljs2 = require('xmljs2');
const axios = require('axios');
const fs = require('fs')

const getXml = async() => {
    const data = await axios.get('http://www.dneonline.com/calculator.asmx?wsdl');
    converToJson(data);
};


const converToJson = (data) =>{

    xmljs2.parseString(data.data, { mergeAttrs: true }, (err, result) => {
        const json = JSON.stringify(result, null, 4)
        const cambJson = Object.keys(json);
        console.log(cambJson)
        fs.writeFile('converted.json', json, (err)=>{
            if(err) throw err;
        })
        // console.log("JSON saved sucessfully");
    });
}

getXml();