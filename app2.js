'use strict';
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
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
      console.log(this.aveCookieHourly);
      this.totalCookies += this.aveCookieHourly[i];

    };

  };
  // it creates tr for storeName/cookiesSoldPerHour/dailyCookies
  this.showInfo = function(){
    this.cookieSale ();
//this creates 2nd row starting with pike
    var row = document.createElement('tr');
    var storeName = document.createElement('td');
    storeName.innerHTML = this.name;
    row.appendChild(storeName);
//this loop makes td for aveCookieHourly and puts them in a var cookieNums
    for(var i = 0; i < openHours.length; i++) {
      var cookiesNums = document.createElement('td');
      cookiesNums.innerHTML = this.aveCookieHourly[i];
      row.appendChild(cookiesNums);
      tbl.appendChild(row);
    }
    // attaches last tr after hours td.
    var dailyCookies = document.createElement('td');
    dailyCookies.innerHTML = this.totalCookies;
    row.appendChild(dailyCookies);
    tbl.appendChild(row);

  };
}
// Objects for each store.
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('Seatac Airport', 3, 24, 1.2);
var sea = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// creating the main table
var tbl = document.createElement('table');
var headerRow = document.createElement('thead');
var space = document.createElement('td');
headerRow.appendChild(space);


// gets all opertaion hours and puts them between empty td and last tr (dailyTotal)
for (var i = 0; i < openHours.length; i++) {
  var tableData = document.createElement('th');
  tableData.innerHTML = openHours[i];
  headerRow.appendChild(tableData);
};
// adds last th of daily total to the first tr
var dailyTotal = document.createElement('th');
dailyTotal.innerHTML = 'Daily Location Total';
headerRow.appendChild(dailyTotal);
tbl.appendChild(headerRow);
// adds last row in table starting with total!
var footerRow = document.createElement('tfoot');
var bottomTotal = document.createElement('th');
bottomTotal.innerHTML = 'Totals';
footerRow.appendChild(bottomTotal);
tbl.appendChild(footerRow);
//appends this table to div with id #table
document.getElementById('table').appendChild(tbl);

// call each store function
pike.showInfo();
seaTac.showInfo();
sea.showInfo();
capitol.showInfo();
alki.showInfo();
