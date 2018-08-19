var soap = require("soap");
const crypto = require("crypto");

String.format = function(format) {
  var args = Array.prototype.slice.call(arguments, 1);
  return format.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != "undefined" ? args[number] : match;
  });
};

class eMoneyAPI {
  constructor() {
    this.distributor = "TESTER";
    this.key = "5PSSDCRF5GWMB2PULJ3H";
    this.wdsl = "https://api.emoney.ge/distributors/Service.svc?wsdl";
    this.createHash = this.createHash.bind(this);
    this.client = this.createClient(this.wdsl);
    this.getServiceGroups = this.getServiceGroups.bind(this);
    this.getTransactionInfo = this.getTransactionInfo.bind(this);
    this.testService(this.getBalance());
    // this.testService(this.getServiceGroups());

    // this.testTelasiPay()
  }

  testTelasiPay() {
    let parameters = [
      { Key: "service", Value: 1001 },
      { Key: "currency", Value: "GEL" },
      { Key: "transaction", Value: "DSGDJFYWIUDYSHDUYWD8990sadfa" },
      { Key: "customercode", Value: 1441452 },
      { Key: "amount", Value: "5.00" }
    ];
    // this.testService(this.getInfo(1001, parameters));
    this.testService(this.pay(parameters));
  }

  createParameter(key, value) {
    let parameter = { Parameter: { Key: key, Value: value } };
    return parameter;
  }

  testService(service) {
    service
      .then(output => {
        // console.log("Got the service!" + output);
        // console.log(output[0].GetServicesResult.Value)
        // console.log(output[0].GetServicePropertiesResult.Value.Parameters.ServiceParameter);
        // console.log(output[0].GetServiceGroupsResult);
        console.log("Transaction Info: ", output);
        // console.log(output[0]);
        // console.log(output[0].GetInfoResult.Value);
        // console.log(output[0].GetServicePropertiesResult.Value.Parameters)
        // console.log(Object.keys(output[0].GetServicePropertiesResult.Value))
      })
      .catch(error => {
        console.log("Got error during getting this service!", error);
      });
  }

  createClient(wdsl) {
    let client = soap.createClientAsync(wdsl);
    return client;
  }

  // Get all the service groups from eMoney
  getServiceGroups() {
    const query = String.format(
      "{0}{1}{2}",
      "GetServiceGroups",
      this.distributor,
      this.key
    );
    let request = this.createRequestTemplate(query);
    let serviceGroups = this.client.then(client => {
      let serviceGroups = client.GetServiceGroupsAsync(request);
      return serviceGroups;
    });

    return serviceGroups;
  }

  // Get services from the group.
  getServices(groupId) {
    const query = String.format(
      "{0}{1}{2}{3}",
      "GetServices",
      groupId,
      this.distributor,
      this.key
    );
    let parameters = [{ Key: "group", Value: groupId }];

    let request = this.createRequestTemplate(query, parameters);

    let serviceParameters = this.client.then(client => {
      let serviceParameters = client.GetServicesAsync(request);
      return serviceParameters;
    });
    return serviceParameters;
  }

  // Get service parameters
  getServiceProperties(serviceID) {
    const query = String.format(
      "{0}{1}{2}{3}",
      "GetServiceProperties",
      serviceID,
      this.distributor,
      this.key
    );
    let parameters = [{ Key: "service", Value: serviceID }];
    let request = this.createRequestTemplate(query, parameters);

    let serviceProperties = this.client.then(client => {
      let serviceProperties = client.GetServicePropertiesAsync(request);
      return serviceProperties;
    });
    return serviceProperties;
  }

  getTelasiParameters() {
    return [
      { Key: "service", Value: 1001 },
      { Key: "serviceid", Value: 1001 },
      { Key: "customercode", Value: 1441452 }
    ];
  }

  // Gets service Id and Key/Value pairs of parameters array
  /* 
  For example: [
    { Key: "service", Value: 1001}
    { Key: "serviceid", Value: 1001 }
    { Key: "customercode", Value: 1441452 }
  ]
  */
  getInfo(serviceId, parameters) {
    const query = String.format(
      "{0}{1}{2}{3}",
      "GetInfo",
      serviceId,
      this.distributor,
      this.key
    );

    let request = this.createRequestTemplate(query, parameters);

    let info = this.client.then(client => {
      let info = client.GetInfoAsync(request);
      return info;
    });

    return info;
  }

  // Pay for the services using the parameters from GetServiceProperties
  pay(parameters) {
    let reducer = (obj, currentValue) => {
      obj[currentValue.Key] = currentValue.Value;
      return obj;
    };

    let properties = parameters.reduce(reducer, {});

    const query = String.format(
      "{0}{1}{2}{3}{4}{5}{6}",
      "Pay",
      properties.service,
      properties.amount,
      properties.currency,
      properties.transaction,
      this.distributor,
      this.key
    );
    let request = this.createRequestTemplate(query, parameters);

    let pay = this.client.then(client => {
      let payRequest = client.PayAsync(request);
      return payRequest;
    });

    return pay;
  }

  // Get details about transaction using our or your transactioncode
  getTransactionInfo(transactionID) {
    const query = String.format(
      "{0}{1}{2}{3}",
      "GetTransactionInfo",
      transactionID,
      this.distributor,
      this.key
    );
    let request = this.createRequestTemplate(query, {
      Key: "transaction",
      Value: transactionID
    });

    let transactionInfo = this.client.then(client => {
      let transactionInfo = client.GetTransactionInfoAsync(request);
      return transactionInfo;
    });

    return transactionInfo;
  }

  // Get distributor's balance in eMoney
  // TODO: This function returns error "Parameter not found, I must find out why"
  getBalance() {
    const query = String.format(
      "{0}{1}{2}",
      "GetBalance",
      this.distributor,
      this.key
    );

    let request = this.createRequestTemplate(query);


    let balance = this.client.then(client => {
      let balance = client.GetInfoAsync(request);
      return balance;
    });

    return balance;
  }

  createHash(query) {
    const hash = crypto.createHash("sha256");
    hash.update(query);
    var hex = hash.digest("hex");
    return hex;
  }

  createRequestTemplate(methodName, parametersArray) {
    let distributor = this.distributor;
    let hash = this.createHash(methodName);
    let request = {
      request: {
        Distributor: distributor,
        Hash: hash,
        Parameters: { Parameter: parametersArray }
      }
    };
    return request;
  }
}

module.exports = eMoneyAPI;
