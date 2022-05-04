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

module.exports.getStops = async function getStops (month) {

  var data = await this.getData('stops/month/' + month)

  
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