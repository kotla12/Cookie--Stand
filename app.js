//   'use strict';
// var openHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// var pike = {
//   name : '1st and Pike',
//   minCust : 23,
//   maxCust : 65,
//   aveCookie: 6.3,
//   aveCookieHourly : [],
//   totalCookies : 0,
//   // Average customers per hours to pike store.
//   randCustPerHr : function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieSale : function () {
//     this.aveCookieHourly = [];
//     this.totalCookies = 0;
//     for ( var i = 0; i < openHours.length; i++){
//       // this calculates the average cookies sold per hour.
//       var sale = Math.round(this.randCustPerHr() * this.aveCookie);
//       console.log(sale);
//       // here I'm pushing the results into aveCookieHourly array!
//       this.aveCookieHourly.push(sale);
//       // adding up all the cookies
//       this.totalCookies += sale;
//     };
//
//     console.log(this.totalCookies);
//
//   },
//   show: function() {
//     for (var i = 0; i < this.aveCookieHourly.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(openHours[i] + ': ' + this.aveCookieHourly[i] + ' Cookies');
//       node.appendChild(textnode);
//       document.getElementById('pike').appendChild(node);
//     }
//     var dailyTotal = document.createElement('li');
//     dailyTotal.textContent = 'Total: ' + this.totalCookies + ' Cookies';
//     document.getElementById('pike').appendChild(dailyTotal);
//   }
//
// };
// pike.cookieSale();
// pike.show();
//
// var seatac = {
//   name : 'Seatac Airport',
//   minCust : 3,
//   maxCust : 24,
//   aveCookie: 1.2,
//   aveCookieHourly : [],
//   totalCookies : 0,
//   // Average customers per hours to pike store.
//   cookieSale : function () {
//     for ( var i = 0; i < openHours.length; i++){
//       // this calculates the average cookies sold per hour.
//       var sale = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookie);
//       //console.log(sale);
//       // here I'm pushing the results into aveCookieHourly array!
//       this.aveCookieHourly.push(sale);
//       // adding up all the cookies
//       this.totalCookies += sale;
//     };
//
//     console.log(this.totalCookies);
//
//   },
//   show: function() {
//     for (var i = 0; i < seatac.aveCookieHourly.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(openHours[i] + ': ' + this.aveCookieHourly[i] + ' Cookies');
//       node.appendChild(textnode);
//       document.getElementById('seatac').appendChild(node);
//     }
//     var dailyTotal = document.createElement('li');
//     dailyTotal.textContent = 'Total: ' + this.totalCookies + ' Cookies';
//     document.getElementById('seatac').appendChild(dailyTotal);
//   }
//
// };
// seatac.cookieSale();
// seatac.show();
//
// var seattle = {
//   name : 'Seattle Center',
//   minCust : 11,
//   maxCust : 38,
//   aveCookie: 3.7,
//   aveCookieHourly : [],
//   totalCookies : 0,
//   // Average customers per hours to pike store.
//   cookieSale : function () {
//     for ( var i = 0; i < openHours.length; i++){
//       // this calculates the average cookies sold per hour.
//       var sale = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookie)  ;
//       //console.log(sale);
//       // here I'm pushing the results into aveCookieHourly array!
//       this.aveCookieHourly.push(sale);
//       // adding up all the cookies
//       this.totalCookies += sale;
//     };
//
//     console.log(this.totalCookies);
//
//   },
//   show: function() {
//     for (var i = 0; i < seattle.aveCookieHourly.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(openHours[i] + ': ' + this.aveCookieHourly[i] + ' Cookies');
//       node.appendChild(textnode);
//       document.getElementById('seattle').appendChild(node);
//     }
//     var dailyTotal = document.createElement('li');
//     dailyTotal.textContent = 'Total: ' + this.totalCookies + ' Cookies';
//     document.getElementById('seattle').appendChild(dailyTotal);
//   }
//
// };
// seattle.cookieSale();
// seattle.show();
//
// var capitol = {
//   name : 'Capitol Hill',
//   minCust : 20,
//   maxCust : 38,
//   aveCookie: 2.3,
//   aveCookieHourly : [],
//   totalCookies : 0,
//   // Average customers per hours to pike store.
//   cookieSale : function () {
//     for ( var i = 0; i < openHours.length; i++){
//       // this calculates the average cookies sold per hour.
//       var sale = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookie);
//       //console.log(sale);
//       // here I'm pushing the results into aveCookieHourly array!
//       this.aveCookieHourly.push(sale);
//       // adding up all the cookies
//       this.totalCookies += sale;
//     };
//
//     console.log(this.totalCookies);
//
//   },
//   show: function() {
//     for (var i = 0; i < capitol.aveCookieHourly.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(openHours[i] + ': ' + this.aveCookieHourly[i] + ' Cookies');
//       node.appendChild(textnode);
//       document.getElementById('capitol').appendChild(node);
//     }
//     var dailyTotal = document.createElement('li');
//     dailyTotal.textContent = 'Total: ' + this.totalCookies + ' Cookies';
//     document.getElementById('capitol').appendChild(dailyTotal);
//   }
//
// };
// capitol.cookieSale();
// capitol.show();
//
//
// var alki = {
//   name : 'Alki',
//   minCust : 2,
//   maxCust : 16,
//   aveCookie: 4.6,
//   aveCookieHourly : [],
//   totalCookies : 0,
//   // Average customers per hours to pike store.
//   cookieSale : function () {
//     for ( var i = 0; i < openHours.length; i++){
//       // this calculates the average cookies sold per hour.
//       var sale = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookie);
//       //console.log(sale);
//       // here I'm pushing the results into aveCookieHourly array!
//       this.aveCookieHourly.push(sale);
//       // adding up all the cookies
//       this.totalCookies += sale;
//     };
//
//     console.log(this.totalCookies);
//
//   },
//   show: function() {
//     for (var i = 0; i < alki.aveCookieHourly.length; i++) {
//       var node = document.createElement('li');
//       var textnode = document.createTextNode(openHours[i] + ': ' + this.aveCookieHourly[i] + ' Cookies');
//       node.appendChild(textnode);
//       document.getElementById('alki').appendChild(node);
//     }
//     var dailyTotal = document.createElement('li');
//     dailyTotal.textContent = 'Total: ' + this.totalCookies + ' Cookies';
//     document.getElementById('alki').appendChild(dailyTotal);
//   }
//
// };
// alki.cookieSale();
// alki.show();
