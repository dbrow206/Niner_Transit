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

module.exports.getLines = async function getLines () {
  var averages = []
  var peakTimes = []
  var data = await this.getData('lines')
  
  averages['green'] = (data['Green'].people / data['Green'].stops).toFixed(2);
  averages['gold'] = (data['Gold'].people / data['Gold'].stops).toFixed(2);
  averages['silver'] = (data['Silver'].people / data['Silver'].stops).toFixed(2);
  
  peakTimes['green'] = convertTime(data['Green'].peak_hour);
  peakTimes['gold'] = convertTime(data['Gold'].peak_hour);
  peakTimes['silver'] = convertTime(data['Silver'].peak_hour);

  data = [averages, peakTimes];

  return data;
}

module.exports.getMonthStops = async function getMonthStops (month) {
  var month = 01;
  var data = await this.getData('stops/month/' + month)


  return data;
}

module.exports.getStops = async function getStops () {
  var stopAverages = []
  var data = await this.getData('stop')

  stopAverages['CRI Deck'] = data['CRI Deck'].on_average;
  stopAverages['Martin Hall'] = data['Martin Hall'].on_average;
  stopAverages['Lot 5A'] = data['Lot 5A'].on_average;
  stopAverages['Cone Deck W'] = data['Cone Deck W'].on_average;
  stopAverages['Duke Centennial Hall East'] = data['Duke Centennial Hall East'].on_average;
  stopAverages['Lot 6'] = data['Lot 6'].on_average;
  stopAverages['Student Union W'] = data['Student Union W'].on_average;
  stopAverages['Grigg Hall E'] = data['Grigg Hall E'].on_average;
  stopAverages['Student Union E'] = data['Student Union E'].on_average;
  stopAverages['Student Health N'] = data['Student Health N'].on_average;
  stopAverages['PORTAL East'] = data['PORTAL East'].on_average;
  stopAverages['Woodward Hall East'] = data['Woodward Hall East'].on_average;
  stopAverages['Portal W'] = data['Portal W'].on_average;
  stopAverages['Wallis Hall W/Light Rail'] = data['Wallis Hall W/Light Rail'].on_average;
  stopAverages['Aux Services East'] = data['Aux Services East'].on_average;
  stopAverages['Union Deck/Belk N'] = data['Union Deck/Belk N'].on_average;
  stopAverages['Grigg Hall W'] = data['Grigg Hall W'].on_average;
  stopAverages['EPIC N'] = data['EPIC N'].on_average;
  stopAverages['Wallis Hall E/Light Rail'] = data['Wallis Hall E/Light Rail'].on_average;
  stopAverages['East Deck 2'] = data['East Deck 2'].on_average;
  stopAverages['Athletics Complex W'] = data['Athletics Complex W'].on_average;
  stopAverages['Student Health E'] = data['Student Health E'].on_average;
  stopAverages['Robinson Hall S'] = data['Robinson Hall S'].on_average;
  stopAverages['Aux Services West'] = data['Aux Services West'].on_average;
  stopAverages['Hickory Hall South'] = data['Hickory Hall South'].on_average;
  stopAverages['Fretwell N'] = data['Fretwell N'].on_average;
  stopAverages['Student Health (Green) W'] = data['Student Health (Green) W'].on_average;
  stopAverages['Hickory Hall North'] = data['Hickory Hall North'].on_average;
  stopAverages['Reese East'] = data['Reese East'].on_average;
  stopAverages['Hunt Hall'] = data['Hunt Hall'].on_average;
  stopAverages['Robinson Hall N'] = data['Robinson Hall N'].on_average;
  stopAverages['Cato Hall N'] = data['Cato Hall N'].on_average;
  stopAverages['Fretwell S'] = data['Fretwell S'].on_average;
  stopAverages['Cone Deck East'] = data['Cone Deck East'].on_average;
  stopAverages['Cato Hall S'] = data['Cato Hall S'].on_average;
  stopAverages['Athletics Complex E'] = data['Athletics Complex E'].on_average;
  stopAverages['Foundation Bldg. North'] = data['Foundation Bldg. North'].on_average;
  stopAverages['Event'] = data['Event'].on_average;
  stopAverages['Reese West'] = data['Reese West'].on_average;
  stopAverages['Harris Alumni Center South'] = data['Harris Alumni Center South'].on_average;
  stopAverages['Levine Hall W'] = data['Levine Hall W'].on_average;
  stopAverages['Harris Alumni Center North'] = data['Harris Alumni Center North'].on_average;
  stopAverages['Belk Hall S'] = data['Belk Hall S'].on_average;
  stopAverages['North Deck'] = data['North Deck'].on_average;
  stopAverages['South Village Deck'] = data['South Village Deck'].on_average;
  stopAverages['Charter start'] = data['Charter start'].on_average;
  stopAverages['Charter end'] = data['Charter end'].on_average;
  stopAverages['Levine Hall E'] = data['Levine Hall E'].on_average;
  stopAverages['Motor Sports'] = data['Motor Sports'].on_average;
  stopAverages['Foundation Bldg. South'] = data['Foundation Bldg. South'].on_average;
  stopAverages['Alumni Way E'] = data['Alumni Way E'].on_average;


  data = [stopAverages];

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