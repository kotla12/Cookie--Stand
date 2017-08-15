'use strict';
var openHours = ['6:00 a.m','7:00 a.m','8:00 a.m','9:00 a.m','10:00 a.m','11:00 a.m','12:00 p.m','1:00 p.m','2:00 p.m','3:00 p.m','4:00 p.m','5:00 p.m','6:00 p.m','7:00 p.m','8:00 p.m',];
var pike = {
  name : '1st and Pike',
  minCust : 23,
  maxCust : 65,
  aveCookie: 6.3,
  aveCookieHourly : [],
  totalCookies : 0,
  // Average customers per hours to pike store.
  cookieSale : function () {
    for ( var i = 0; i < openHours.length; i++){
      // this calculates the average cookies sold per hour.
      var sale = (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust)) * this.aveCookie;
      console.log(sale);
      this.aveCookieHourly.push(sale);
      this.totalCookies += sale;
    };

    console.log(this.totalCookies);

  }

};


pike.cookieSale();
