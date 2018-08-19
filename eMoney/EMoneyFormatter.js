const eMoneyAPI = require("./EMoneyAsync");

class EMoneyFormatter extends eMoneyAPI {
  constructor() {
    super();
    // this.getServices(1);
    // this.getServiceProperties(1049)
  }

  // Returns Array Of Service Groups.
  getServiceGroups() {
    let rawData = super.getServiceGroups();
    let formatted = rawData.then(this.getServiceGroupsFormatter);
    formatted.catch(err => {
      console.log("Got error when formatting getServiceGroups", err);
    });
    return formatted;
  }

  // Formats raw data returned from the getServiceGroups function.
  getServiceGroupsFormatter(data) {
    let result = data[0].GetServiceGroupsResult.Value.ProviderGroup;
    // console.log(result);
    return result;
  }

  // Get services from the group.
  getServices(groupID) {
    let rawData = super.getServices(groupID);
    let formatted = rawData.then(this.getServicesFormatter);
    formatted.catch(err => {
      console.log("Got error when formatting getServices", err);
    });
    return formatted;
  }

  getServicesFormatter(data) {
    let result = data[0].GetServicesResult.Value.Provider;
    // console.log(result, "Keys: " + Object.keys(result));
    return result;
  }

  getServiceProperties(serviceID) {
    let rawData = super.getServiceProperties(serviceID);
    let formatted = rawData.then(this.getServicePropertiesFormatter);
    formatted.catch(err => {
      console.log("Got error when formatting getServiceProperties", err);
    });
    return formatted;
  }

  // Returns {Parameters: Array || Object, Properties: Object}
  getServicePropertiesFormatter(data) {
    let result = data[0].GetServicePropertiesResult.Value
    if (result) return {Parameters: result.Parameters.ServiceParameter, Properties: result.Property}
    else return data[0]
    // let result1 = {Parameters: result.Parameters.ServiceParameter, Properties: result.Property}
    // console.log(result1)
    return result;
  }
}

// const formatter = new EMoneyFormatter();

const eMoneyClient = (req, res) => {
  res.send("Test");
};

module.exports = EMoneyFormatter;
