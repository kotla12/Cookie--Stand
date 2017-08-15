'use strict';
var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function store (name,minCust, maxCust, aveCookie ) {
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
      this.aveCookieHourly.push(Math.round(this.randCustPerHr * this.aveCookie));
      this.totalCookies += this.aveCookieHourly[i];
    };
  };
  this.show = function() {
    for (var i = 0; i < this.aveCookieHourly.length; i++) {
      var node = document.createElement('li');
      var textnode = document.createTextNode(openHours[i] + ': ' + this.aveCookieHourly[i] + ' Cookies');
      node.appendChild(textnode);
      document.getElementById('pike').appendChild(node);
    }

    var dailyTotal = document.createElement('li');
    dailyTotal.textContent = 'Total: ' + this.totalCookies + ' Cookies';
    document.getElementById('pike').appendChild(dailyTotal);
  };
}
cookieSale();
show();
var pike = new store ('1st and Pike', 23, 65, 6.3);
var seaTac = new store ('Seatac Airport', 3, 24, 1.2);
var sea = new store ('Seattle Center', 11, 38, 3.7);
var capitol = new store ('Capitol Hill', 20, 38, 2.3);
var alki = new store ('Alki', 2, 16, 4.6);
