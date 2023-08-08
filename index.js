var fs = require('fs');
var DeliveryCo = require("./delivCo.js");

// const otto = new DeliveryCo("Otto");
// otto.introduce(); // Hello, my name is Otto

const delivFile = "deliverydata.txt";
const siteFile = "sitedata.txt";
const numOfDataEntries = 10;
const locationOptions = ["location A" , "location B" , "location C"];
const materialOptions = ["material 1" , "material 2" , "material 3" , "material 4"];
const materialqtymin = 50;
const materialqtymax = 700;
const timePMinMin = 120;



//generate test data
for(let x=0 ; x<numOfDataEntries ; x++) {
  let eventRaw = {
    'eventLoc': locationOptions[ Math.floor(Math.random() * locationOptions.length) ],
    'eventMat': materialOptions[ Math.floor(Math.random() * materialOptions.length) ],
    'eventMatQty': Math.random() * ((materialqtymax+1) - materialqtymin) + materialqtymin
  }  

  switch(Math.floor(Math.random() * 2)) {
    case(0):
      writeToDelivData( x + generateDelivData(eventRaw));
      break;
    case(1):
      writeToSiteData( x + generateSiteData(eventRaw) )
      break;
  }
} 

function generateDelivData(rawEventObj) {
  let did = 1234;     //
  let strtime = "start time";
  let endtime = "end time";
  let location = rawEventObj != undefined ? rawEventObj.eventLoc : "undefined location";
  let matqty = rawEventObj != undefined ? rawEventObj.eventMatQty : "undefined material quantity";
  let matname = rawEventObj != undefined ? rawEventObj.eventMat : "undefined material";

  return(did + "," + strtime + "," + endtime + "," + location + "," + matqty + "," + matname + "," + "\r");
}

function generateSiteData(rawEventObj) {
  let did = 56789;     //
  let strtime = "start time";
  let endtime = "end time";
  let location = rawEventObj != undefined ? rawEventObj.eventLoc : "undefined location";
  let matqty = rawEventObj != undefined ? rawEventObj.eventMatQty : "undefined material quantity";
  let matname = rawEventObj != undefined ? rawEventObj.eventMat : "undefined material";
  
  return(did + "," + strtime + "," + endtime + "," + location + "," + matqty + "," + matname + "," + "\r");
}

function writeToDelivData(dataStr) {
  // console.log(dataStr)
  fs.appendFileSync(delivFile, dataStr, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

function writeToSiteData(dataStr) {
  // console.log(dataStr)
  fs.appendFileSync(siteFile, dataStr, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}
//store created test data
