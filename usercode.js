require("wsdlrdr");
const params = {
    host: 'api-tt.belavia.by',
    wsdl: '/TimeTable/Service.asmx?WSDL'
};

const options = {
    secure: true,
    failOnWrongContentType: true
};

module.exports = (data) => {
    data.test = wsdlrdr.getNamespaces();
};
