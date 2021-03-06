const Wsdlrdr = require("wsdlrdr");
const params = {
    host: 'http://api-tt.belavia.by/',
    wsdl: '/TimeTable/Service.asmx?WSDL'
};

const options = {
    secure: true,
    failOnWrongContentType: true
};

module.exports = (data) => {
    data.test = Wsdlrdr.getNamespaces(params, options);
};
