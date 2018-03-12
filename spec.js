// spec.js
describe('Protractor Demo App', function() {

/*attempt to sign on with an invalid account.
 attempt to sign on with a valid account.
 verify each link at the bottom of the main webpage to verify each link is valid.
 verify "Buy" is displayed on original load.
 verify all orange buttons are displayed.
 click each of the orange buttons on the top of the screen and verify the links work
 verify Espanol version of website is valid.
 Book a flight
 Check flight status for a flight that has already completed its trip
 Check flight status for a flight that is pending
 Check in to a flight
 Attempt to find a fare that departs at an impossible time (using daylight savings time)
 Attempt to find a fare that departs on february 29th on a leap year
 Enter an invalid date format for a flight's departure/return date
 Verify each page has the correct title*/

  beforeEach(function() {
    browser.get('https://www.jetblue.com/');
  });

  //basic page title check
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('JetBlue | Airline Tickets, Flights, and Airfare');
  });
  
  //'About us' test
  it('should take you to the About us page', function() {
    var about = element(by.css('#jb-footer > div.body-wrap.clearfix > div.sitemap-wrap > ul:nth-child(1) > li:nth-child(2) > a'));
    about.click();
    expect(browser.getTitle()).toEqual('JetBlue | About');
  });

  //check in element
  it('should pull up the check in frame on the same page', function() {
    var checkInButton = element(by.css('#login-search-wrap > div.bookerWrapper.ng-scope > div > div.nav.ng-scope > button.button.checkin.ng-binding'));
    checkInButton.click();
    expect(browser.getTitle()).toEqual('JetBlue | Airline Tickets, Flights, and Airfare');
    expect(browser.getCurrentUrl()).toEqual('https://www.jetblue.com/#/checkin');
  });

    //empty Fare finder test 
    it('incomplete find fares options should not find flights', function() {
      var departLocation = element(by.id('jbBookerDepart'));
      var arriveLocation = element(by.id('jbBookerArrive'));
      var departDate = element(by.id('jbBookerCalendarDepart'));
      var returnDate = element(by.id('jbBookerCalendarReturn'));
      var findItButton = element(by.css('[ng-click="handleSubmit($event)"]'))

      findItButton.click();

      var oops = element(by.css('#login-search-wrap > div.bookerWrapper.ng-scope > div > div.jbBooker.homepage > form > div.form_errors_overlay.ng-isolate-scope > div.error_top > h2'));
      expect(oops.getText()).toEqual('Oops!');
      //To Do
      
      /*check for combinations of departure city, arrival city, departure date, and return date being missing.
      Psuedo code examples

      "remove departure city"
      "add arrival city"
      "add departure date"
      "add return date"
      "click button"
      "check for only missing departure city error element"

      
      "add departure city"
      "remove arrival city"
      "add departure date"
      "add return date"
      "click button"
      "check for only missing arrival city error element"


      
      //test entering a valid date and that the flights page loads. Currently it doesn't seem to be waiting, but here's what I have so far.
      /*
      "define field variables for finding flights"

      departLocation.sendKeys('Salt Lake City, UT (SLC)');
      arriveLocation.sendKeys('Los Angeles area');
      departDate.sendKeys('05-01-2018'); //static date could use variance
      returnDate.sendKeys('05-17-2018');
  
      findItButton.click();

      const EC = protractor.ExpectedConditions;
      ----"force test to wait until browser has navigated to the flight selection screen"----
      browser.wait(EC.urlContains('https://book.jetblue.com/B6/AirFareFamiliesFlexibleForward.do'), 10 * 1000).then(function(next) {
        expect(browser.getTitle()).toEqual('Flight Selection'); //check that valid flights have loaded somehow
      });*/
    /* TO DO
    Test multiple adults for a flight
    Add children to flight
    Add infants to flight
    */
    });

});
