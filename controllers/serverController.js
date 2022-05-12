const fetch = require('node-fetch');
const { CommandCompleteMessage } = require('pg-protocol/dist/messages');

module.exports.getData = async function getData(urlName){
  const response = await fetch(
    'http://127.0.0.1:5000/'+ urlName
  );
  var JsonData = await response.json();
  var parseData = JSON.parse((JSON.stringify(JsonData)));
  return await parseData;
  }

module.exports.getLines01 = async function getLines () {
  let month = 01;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines02 = async function getLines () {
  let month = 02;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines03 = async function getLines () {
  let month = 03;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines04 = async function getLines () {
  let month = 04;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines05 = async function getLines () {
  let month = 05;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines06 = async function getLines () {
  let month = 06;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines07 = async function getLines () {
  let month = 07;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines08 = async function getLines () {
  let month = 08;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines09 = async function getLines () {
  let month = 09;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines10 = async function getLines () {
  let month = 10;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines11 = async function getLines () {
  let month = 11;
  var data = await this.getData('routes/month/' + month);
  return data;
}
module.exports.getLines12 = async function getLines () {
  let month = 12;
  var data = await this.getData('routes/month/' + month);
  return data;
}

module.exports.getMonthStops01 = async function getMonthStops01() {
  let month = 01;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops02 = async function getMonthStops02() {
  let month = 02;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops03 = async function getMonthStops03() {
  let month = 03;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops04 = async function getMonthStops04() {
  let month = 04;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops05 = async function getMonthStops05() {
  let month = 05;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops06 = async function getMonthStops06() {
  let month = 06;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops07 = async function getMonthStops07() {
  let month = 07;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops08 = async function getMonthStops08() {
  let month = 08;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops09 = async function getMonthStops059() {
  let month = 09;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops10 = async function getMonthStops10() {
  let month = 10;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops11 = async function getMonthStops11() {
  let month = 11;
  var data =  this.getData('stops/month/' + month)
  return data;
}
module.exports.getMonthStops12 = async function getMonthStops12() {
  let month = 12;
  var data =  this.getData('stops/month/' + month)
  return data;
}



module.exports.getStops = async function getStops () {
  var stopAverages = []
  var stopNumbers =[]
  var offAverages = []
  var data = await this.getData('stop')

  //Populate Array with stop_average data
  stopAverages['CRI Deck'] = (data['CRI Deck'].on_average).toFixed(2);
  stopAverages['Martin Hall'] = (data['Martin Hall'].on_average).toFixed(2);
  stopAverages['Lot 5A'] = (data['Lot 5A'].on_average).toFixed(2);
  stopAverages['Cone Deck W'] = (data['Cone Deck W'].on_average).toFixed(2);
  stopAverages['Duke Centennial Hall East'] = (data['Duke Centennial Hall East'].on_average).toFixed(2);
  stopAverages['Lot 6'] = (data['Lot 6'].on_average).toFixed(2);
  stopAverages['Student Union W'] = (data['Student Union W'].on_average).toFixed(2);
  stopAverages['Grigg Hall E'] = (data['Grigg Hall E'].on_average).toFixed(2);
  stopAverages['Student Union E'] = (data['Student Union E'].on_average).toFixed(2);
  stopAverages['Student Health N'] = (data['Student Health N'].on_average).toFixed(2);
  stopAverages['PORTAL East'] = (data['PORTAL East'].on_average).toFixed(2);
  stopAverages['Woodward Hall East'] = (data['Woodward Hall East'].on_average).toFixed(2);
  stopAverages['Portal W'] = (data['Portal W'].on_average).toFixed(2);
  stopAverages['Wallis Hall W/Light Rail'] = (data['Wallis Hall W/Light Rail'].on_average).toFixed(2);
  stopAverages['Aux Services East'] = (data['Aux Services East'].on_average).toFixed(2);
  stopAverages['Union Deck/Belk N'] = (data['Union Deck/Belk N'].on_average).toFixed(2);
  stopAverages['Grigg Hall W'] =(data['Grigg Hall W'].on_average).toFixed(2);
  stopAverages['EPIC N'] = (data['EPIC N'].on_average).toFixed(2);
  stopAverages['Wallis Hall E/Light Rail'] = (data['Wallis Hall E/Light Rail'].on_average).toFixed(2);
  stopAverages['East Deck 2'] = (data['East Deck 2'].on_average).toFixed(2);
  stopAverages['Athletics Complex W'] = (data['Athletics Complex W'].on_average).toFixed(2);
  stopAverages['Student Health E'] = (data['Student Health E'].on_average).toFixed(2);
  stopAverages['Robinson Hall S'] = (data['Robinson Hall S'].on_average).toFixed(2);
  stopAverages['Aux Services West'] = (data['Aux Services West'].on_average).toFixed(2);
  stopAverages['Hickory Hall South'] = (data['Hickory Hall South'].on_average).toFixed(2);
  stopAverages['Fretwell N'] = (data['Fretwell N'].on_average).toFixed(2);
  stopAverages['Student Health (Green) W'] = (data['Student Health (Green) W'].on_average).toFixed(2);
  stopAverages['Hickory Hall North'] = (data['Hickory Hall North'].on_average).toFixed(2);
  stopAverages['Reese East'] = (data['Reese East'].on_average).toFixed(2);
  stopAverages['Hunt Hall'] = (data['Hunt Hall'].on_average).toFixed(2);
  stopAverages['Robinson Hall N'] = (data['Robinson Hall N'].on_average).toFixed(2);
  stopAverages['Cato Hall N'] = (data['Cato Hall N'].on_average).toFixed(2);
  stopAverages['Fretwell S'] = (data['Fretwell S'].on_average).toFixed(2);
  stopAverages['Cone Deck East'] = (data['Cone Deck East'].on_average).toFixed(2);
  stopAverages['Cato Hall S'] = (data['Cato Hall S'].on_average).toFixed(2);
  stopAverages['Athletics Complex E'] = (data['Athletics Complex E'].on_average).toFixed(2);
  stopAverages['Foundation Bldg. North'] = (data['Foundation Bldg. North'].on_average).toFixed(2);
  stopAverages['Event'] = (data['Event'].on_average).toFixed(2);
  stopAverages['Reese West'] = (data['Reese West'].on_average).toFixed(2);
  stopAverages['Harris Alumni Center South'] = (data['Harris Alumni Center South'].on_average).toFixed(2);
  stopAverages['Levine Hall W'] = (data['Levine Hall W'].on_average).toFixed(2);
  stopAverages['Harris Alumni Center North'] = (data['Harris Alumni Center North'].on_average).toFixed(2);
  stopAverages['Belk Hall S'] = (data['Belk Hall S'].on_average).toFixed(2);
  stopAverages['North Deck'] = (data['North Deck'].on_average).toFixed(2);
  stopAverages['South Village Deck'] = (data['South Village Deck'].on_average).toFixed(2);
  stopAverages['Charter start'] = (data['Charter start'].on_average).toFixed(2);
  stopAverages['Charter end'] = (data['Charter end'].on_average).toFixed(2);
  stopAverages['Levine Hall E'] = (data['Levine Hall E'].on_average).toFixed(2);
  stopAverages['Motor Sports'] = (data['Motor Sports'].on_average).toFixed(2);
  stopAverages['Foundation Bldg. South'] = (data['Foundation Bldg. South'].on_average).toFixed(2);
  stopAverages['Alumni Way E'] = (data['Alumni Way E'].on_average).toFixed(2);


  //Populate array with total stop data
  stopNumbers['CRI Deck'] = data['CRI Deck'].stops;
  stopNumbers['Martin Hall'] = data['Martin Hall'].stops;
  stopNumbers['Lot 5A'] = data['Lot 5A'].stops;
  stopNumbers['Cone Deck W'] = data['Cone Deck W'].stops;
  stopNumbers['Duke Centennial Hall East'] = data['Duke Centennial Hall East'].stops;
  stopNumbers['Lot 6'] = data['Lot 6'].stops;
  stopNumbers['Student Union W'] = data['Student Union W'].stops;
  stopNumbers['Grigg Hall E'] = data['Grigg Hall E'].stops;
  stopNumbers['Student Union E'] = data['Student Union E'].stops;
  stopNumbers['Student Health N'] = data['Student Health N'].stops;
  stopNumbers['PORTAL East'] = data['PORTAL East'].stops;
  stopNumbers['Woodward Hall East'] = data['Woodward Hall East'].stops;
  stopNumbers['Portal W'] = data['Portal W'].stops;
  stopNumbers['Wallis Hall W/Light Rail'] = data['Wallis Hall W/Light Rail'].stops;
  stopNumbers['Aux Services East'] = data['Aux Services East'].stops;
  stopNumbers['Union Deck/Belk N'] = data['Union Deck/Belk N'].stops;
  stopNumbers['Grigg Hall W'] = data['Grigg Hall W'].stops;
  stopNumbers['EPIC N'] = data['EPIC N'].stops;
  stopNumbers['Wallis Hall E/Light Rail'] = data['Wallis Hall E/Light Rail'].stops;
  stopNumbers['East Deck 2'] = data['East Deck 2'].stops;
  stopNumbers['Athletics Complex W'] = data['Athletics Complex W'].stops;
  stopNumbers['Student Health E'] = data['Student Health E'].stops;
  stopNumbers['Robinson Hall S'] = data['Robinson Hall S'].stops;
  stopNumbers['Aux Services West'] = data['Aux Services West'].stops;
  stopNumbers['Hickory Hall South'] = data['Hickory Hall South'].stops;
  stopNumbers['Fretwell N'] = data['Fretwell N'].stops;
  stopNumbers['Student Health (Green) W'] = data['Student Health (Green) W'].stops;
  stopNumbers['Hickory Hall North'] = data['Hickory Hall North'].stops;
  stopNumbers['Reese East'] = data['Reese East'].stops;
  stopNumbers['Hunt Hall'] = data['Hunt Hall'].stops;
  stopNumbers['Robinson Hall N'] = data['Robinson Hall N'].stops;
  stopNumbers['Cato Hall N'] = data['Cato Hall N'].stops;
  stopNumbers['Fretwell S'] = data['Fretwell S'].stops;
  stopNumbers['Cone Deck East'] = data['Cone Deck East'].stops;
  stopNumbers['Cato Hall S'] = data['Cato Hall S'].stops;
  stopNumbers['Athletics Complex E'] = data['Athletics Complex E'].stops;
  stopNumbers['Foundation Bldg. North'] = data['Foundation Bldg. North'].stops;
  stopNumbers['Event'] = data['Event'].stops;
  stopNumbers['Reese West'] = data['Reese West'].stops;
  stopNumbers['Harris Alumni Center South'] = data['Harris Alumni Center South'].stops;
  stopNumbers['Levine Hall W'] = data['Levine Hall W'].stops;
  stopNumbers['Harris Alumni Center North'] = data['Harris Alumni Center North'].stops;
  stopNumbers['Belk Hall S'] = data['Belk Hall S'].stops;
  stopNumbers['North Deck'] = data['North Deck'].stops;
  stopNumbers['South Village Deck'] = data['South Village Deck'].stops;
  stopNumbers['Charter start'] = data['Charter start'].stops;
  stopNumbers['Charter end'] = data['Charter end'].stops;
  stopNumbers['Levine Hall E'] = data['Levine Hall E'].stops;
  stopNumbers['Motor Sports'] = data['Motor Sports'].stops;
  stopNumbers['Foundation Bldg. South'] = data['Foundation Bldg. South'].stops;
  stopNumbers['Alumni Way E'] = data['Alumni Way E'].stops;

   //Populate array with off averages
   offAverages['CRI Deck'] = data['CRI Deck'].off_average.toFixed(2);
   offAverages['Martin Hall'] = data['Martin Hall'].off_average.toFixed(2);
   offAverages['Lot 5A'] = data['Lot 5A'].off_average.toFixed(2);
   offAverages['Cone Deck W'] = data['Cone Deck W'].off_average.toFixed(2);
   offAverages['Duke Centennial Hall East'] = data['Duke Centennial Hall East'].off_average.toFixed(2);
   offAverages['Lot 6'] = data['Lot 6'].off_average.toFixed(2);
   offAverages['Student Union W'] = data['Student Union W'].off_average.toFixed(2);
   offAverages['Grigg Hall E'] = data['Grigg Hall E'].off_average.toFixed(2);
   offAverages['Student Union E'] = data['Student Union E'].off_average.toFixed(2);
   offAverages['Student Health N'] = data['Student Health N'].off_average.toFixed(2);
   offAverages['PORTAL East'] = data['PORTAL East'].off_average.toFixed(2);
   offAverages['Woodward Hall East'] = data['Woodward Hall East'].off_average.toFixed(2);
   offAverages['Portal W'] = data['Portal W'].off_average.toFixed(2);
   offAverages['Wallis Hall W/Light Rail'] = data['Wallis Hall W/Light Rail'].off_average.toFixed(2);
   offAverages['Aux Services East'] = data['Aux Services East'].off_average.toFixed(2);
   offAverages['Union Deck/Belk N'] = data['Union Deck/Belk N'].off_average.toFixed(2);
   offAverages['Grigg Hall W'] = data['Grigg Hall W'].off_average.toFixed(2);
   offAverages['EPIC N'] = data['EPIC N'].off_average.toFixed(2);
   offAverages['Wallis Hall E/Light Rail'] = data['Wallis Hall E/Light Rail'].off_average.toFixed(2);
   offAverages['East Deck 2'] = data['East Deck 2'].off_average.toFixed(2);
   offAverages['Athletics Complex W'] = data['Athletics Complex W'].off_average.toFixed(2);
   offAverages['Student Health E'] = data['Student Health E'].off_average.toFixed(2);
   offAverages['Robinson Hall S'] = data['Robinson Hall S'].off_average.toFixed(2);
   offAverages['Aux Services West'] = data['Aux Services West'].off_average.toFixed(2);
   offAverages['Hickory Hall South'] = data['Hickory Hall South'].off_average.toFixed(2);
   offAverages['Fretwell N'] = data['Fretwell N'].off_average.toFixed(2);
   offAverages['Student Health (Green) W'] = data['Student Health (Green) W'].off_average.toFixed(2);
   offAverages['Hickory Hall North'] = data['Hickory Hall North'].off_average.toFixed(2);
   offAverages['Reese East'] = data['Reese East'].off_average.toFixed(2);
   offAverages['Hunt Hall'] = data['Hunt Hall'].off_average.toFixed(2);
   offAverages['Robinson Hall N'] = data['Robinson Hall N'].off_average.toFixed(2);
   offAverages['Cato Hall N'] = data['Cato Hall N'].off_average.toFixed(2);
   offAverages['Fretwell S'] = data['Fretwell S'].off_average.toFixed(2);
   offAverages['Cone Deck East'] = data['Cone Deck East'].off_average.toFixed(2);
   offAverages['Cato Hall S'] = data['Cato Hall S'].off_average.toFixed(2);
   offAverages['Athletics Complex E'] = data['Athletics Complex E'].off_average.toFixed(2);
   offAverages['Foundation Bldg. North'] = data['Foundation Bldg. North'].off_average.toFixed(2);
   offAverages['Event'] = data['Event'].off_average.toFixed(2);
   offAverages['Reese West'] = data['Reese West'].off_average.toFixed(2);
   offAverages['Harris Alumni Center South'] = data['Harris Alumni Center South'].off_average.toFixed(2);
   offAverages['Levine Hall W'] = data['Levine Hall W'].off_average.toFixed(2);
   offAverages['Harris Alumni Center North'] = data['Harris Alumni Center North'].off_average.toFixed(2);
   offAverages['Belk Hall S'] = data['Belk Hall S'].off_average.toFixed(2);
   offAverages['North Deck'] = data['North Deck'].off_average.toFixed(2);
   offAverages['South Village Deck'] = data['South Village Deck'].off_average.toFixed(2);
   offAverages['Charter start'] = data['Charter start'].off_average.toFixed(2);
   offAverages['Charter end'] = data['Charter end'].off_average.toFixed(2);
   offAverages['Levine Hall E'] = data['Levine Hall E'].off_average.toFixed(2);
   offAverages['Motor Sports'] = data['Motor Sports'].off_average.toFixed(2);
   offAverages['Foundation Bldg. South'] = data['Foundation Bldg. South'].off_average.toFixed(2);
   offAverages['Alumni Way E'] = data['Alumni Way E'].off_average.toFixed(2);

  data = [stopAverages,stopNumbers,offAverages];

  return data;
}


function convertTime (hour) {
  var time = '';
  if(hour > 12) {
    hour = hour - 12;
    time = hour + ':00pm';
  } else if (hour < 12) {
    time = hour + ':00am';
  } else if (hour == 12) {
    time = hour + ':00pm';
  }
  return time;
}