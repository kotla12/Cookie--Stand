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
  this.showInfo = function(){
    this.cookieSale ();

    var row = document.createElement('tr');
    var storeName = document.createElement('th');
    storeName.textContent = this.name;
    row.appendChild(storeName);


  };
}
// Objects for each store.
var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('Seatac Airport', 3, 24, 1.2);
var sea = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);


pike.showInfo();

//pike.show();
// seaTac.cookieSale();
// seaTac.show();
// sea.cookieSale();
// sea.show();
// capitol.cookieSale();
// capitol.show();
// alki.cookieSale();
// alki.show();
