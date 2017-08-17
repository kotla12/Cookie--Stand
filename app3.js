'use strict';
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeNames = [];
var storeData = document.getElementById('sales');
var storeForm = document.getElementById('form');
function Store (name,minCust, maxCust, aveCookie ) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookie = aveCookie;
  this.aveCookieHourly = [];
  this.totalCookies = 0;
  this.randCustPerHr = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookieSale = function () {
    for ( var i = 0; i < openHours.length; i++){
      this.aveCookieHourly.push(Math.round(this.randCustPerHr() * this.aveCookie));
      // console.log(this.aveCookieHourly);
      this.totalCookies += this.aveCookieHourly[i];

    };
  };
  storeNames.push(this);
  this.cookieSale();

  this.render = function () {
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.innerHTML = this.name;
    trElement.appendChild(tdElement);
    for (var i = 0; i < openHours.length; i++){
      var tdElement2 = document.createElement('td');
      tdElement2.innerHTML = this.aveCookieHourly[i];
      trElement.appendChild(tdElement2);
      storeData.appendChild(trElement);
    };
    var tdTotal = document.createElement('td');
    tdTotal.innerHTML = this.totalCookies;
    trElement.appendChild(tdTotal);
    storeData.appendChild(trElement);
    console.log(tdTotal);
  };
};
new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);
// DOM to create top row of the table
function headerRows(){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.innerHTML = '';
  trElement.appendChild(thElement);
  for (var i = 0; i < openHours.length; i++){
    thElement = document.createElement('th');
    thElement.innerHTML = openHours[i];
    trElement.appendChild(thElement);
  };
  thElement = document.createElement('th');
  thElement.innerHTML = 'Total';
  trElement.appendChild(thElement);
  storeData.appendChild(trElement);
};
//create each store row information
function storeNamesRow() {
  for (var i = 0 ; i < storeNames.length; i++){
    storeNames[i].render();
  };
}
headerRows();
storeNamesRow();
function addStoreFromInput (event){
// finds input tag in html and writes in the text box
  var store = event.target.store.value;
  var minCust = event.target.minCust.value;
  var maxCust = event.target.maxCust.value;
  var aveCookie = event.target.aveCookie.value;

}
