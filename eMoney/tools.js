const eMoneyAPI = require("./EMoneyFormatter");

const fs = require("fs");
const path = require("path");
const serviceGroupsJson = path.resolve(
  __dirname,
  "../files",
  "serviceGroups.json"
);
const servicesJson = path.resolve(__dirname, "../files", "services.json");
const serviceParametersJson = path.resolve(__dirname, "../files", "serviceParameters.json");
const serviceIDsJson = path.resolve(__dirname, "../files", "serviceIDs.json");
const complexSimpleServices = path.resolve(__dirname, "../files", "complexSimpleServices.json");





class Utils {
  constructor() {
    this.eMoney = new eMoneyAPI();
    this.getServiceGroups = this.writeServiceGroupsToFile.bind(this);
    this.getServices = this.getAllServices.bind(this);
    this.getAllServices = this.getAllServices.bind(this);
    this.extractServiceParameters = this.extractServiceParameters.bind(this);
    this.serviceIDs = []
    // this.writeServices()
    // this.writeServices()

    // this.writeServiceGroupsToFile()
    // this.getServices([1, 2]);
    // this.writeAllServiceIds()
    // this.writeAllServiceParameters()
    // this.testServiceParameters()
    // this.writeServiceParameterTestsToFile()
  }

  writeServiceParameterTestsToFile() {
    this.processFile(
      fs.createReadStream(serviceParametersJson),
      fs.createWriteStream(complexSimpleServices),
      this.testServiceParameters
    )
  }

  testServiceParameters(serviceParameters) {
    serviceParameters = JSON.parse(serviceParameters)
    let simpleObjects = []
    let complexObjects = []
    let keys = Object.keys(serviceParameters)
    keys.forEach(key => {
      let serviceParameter = serviceParameters[key].Parameters
      let isSimple = !Array.isArray(serviceParameter);
      if(isSimple) simpleObjects.push(key)
      else complexObjects.push(key)
    })

    return {simple: simpleObjects, complex: complexObjects}
  }

  testServiceParameters1() {
    let readStream = fs.createReadStream(serviceParametersJson)

    let data = "";
    let obj = {}

    readStream.on("data", chunk => {
      data += chunk;
    });

    readStream.on("end", () => {
      obj = JSON.parse(data)
      let simpleObjects = []
      let complexObjects = []
      let keys = Object.keys(obj)

      keys.forEach(key => {
        let serviceParameters = obj[key].Parameters
        let isSimple = !Array.isArray(serviceParameters);
        if(isSimple) simpleObjects.push(key)
        else complexObjects.push(key)
      })
      console.log("Simple Objects: ", simpleObjects, simpleObjects.length)
      console.log("Complex Objects: ", complexObjects, complexObjects.length)

    })
    
  }

  writeAllServiceParameters() {
    this.processFile(
      fs.createReadStream(serviceIDsJson),
      fs.createWriteStream(serviceParametersJson),
      this.extractServiceParameters
    )
  }

  extractServiceParameters(serviceIDs) {
    let serviceParameters = []
    serviceIDs = JSON.parse(serviceIDs)
    console.log(serviceIDs.length)


    serviceIDs.forEach(serviceID => {
      let parameters = this.eMoney.getServiceProperties(serviceID)

      let p = parameters.then(serviceParameters => {
        return {serviceID: serviceID, parameters: serviceParameters}
      })
      serviceParameters.push(p)
    })

    serviceParameters = Promise.all(serviceParameters)

    let allServiceParameters = serviceParameters.then(parameters => {
      let obj = {}
      parameters.forEach(parameter => {
        obj[parameter.serviceID] = parameter.parameters
      })
      return obj
    })

    return allServiceParameters
  }


  writeServiceGroupsToFile() {
    this.writeStream = fs.createWriteStream(serviceGroupsJson);

    let serviceGroups = this.eMoney.getServiceGroups();
    serviceGroups.then(serviceGroups => {
      let json = JSON.stringify(serviceGroups, null, 5);
      this.writeStream.write(json);
      this.writeStream.end();
    });
  }

  /*
  1) Read services from the json file
  2) Extract service ID's
  3) Write service ID's to the file
  */
  writeAllServiceIds() {
    this.processFile(
        fs.createReadStream(servicesJson),
        fs.createWriteStream(serviceIDsJson),
        this.extractServiceIDs
      );
  }


  extractServiceIDs(services) {
      let obj = JSON.parse(services)
      let keys = Object.keys(obj)
      console.log(keys)
      let allServiceIDs = []
      keys.forEach(key => {
          let services = obj[key]
          if (services.length === undefined) services = [services]
          let serviceIDs = services.map(service => service.ID)
          let newAllServices = [...allServiceIDs, ...serviceIDs]
          allServiceIDs = newAllServices
      })
      return allServiceIDs
  }


  /*
Takes ReadStream, WriteStream, processData Function
1) Reads data using the ReadStream
2) Processes data using the processData function
3) Writes the given data to the writeStream.
*/
  processFile(readStream, writeStream, processData = data => data) {
    let data = "";

    readStream.on("data", chunk => {
      data += chunk;
    });

    readStream.on("end", () => {
      console.log("Finished Reading!");
      let processedData = Promise.resolve(processData(data));

      processedData.then(data => {
        let json = JSON.stringify(data, null, 5)
        writeStream.write(json)
      })
    });
  }

  writeServices() {
    this.processFile(
        fs.createReadStream(serviceGroupsJson),
        fs.createWriteStream(servicesJson),
        this.getAllServices
      );
  }

  getAllServices(serviceGroups) {
    let serviceGroupIdList = this.getServiceGroupIdsList(serviceGroups)
    let services = []

    // Push all the promisified service objects to services array
   serviceGroupIdList.forEach(groupID => {
      // Get services for the given id
      let x = this.eMoney.getServices(groupID);
      let y = x.then(value => {
        return {name: `GroupID:${groupID}`, value: value}
      })
      services.push(y)
    })

    // Wait until all the promises are resolved
    services = Promise.all(services)

    // Create promise, that returns all the services object
    let allTheServices = services.then(services => {
      let obj = {}
      services.forEach(service => {
        obj[service.name] = service
      })
      return obj
    })

    return allTheServices
  } 

  getServiceGroupIdsList(data) {
    let obj = JSON.parse(data);
    let array = obj.map(element => element.ID);
    return array;
  }
}

let utils = new Utils();

module.exports = Utils;
