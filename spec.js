// spec.js
describe('Jet Blue main page test', function() {

  //reset to jetblue.com at the beginning of each test
  beforeEach(function() {
    browser.get('https://www.jetblue.com/');
  });

  //basic page title check
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('JetBlue | Airline Tickets, Flights, and Airfare');
  });
  
  //'About us' page link test.
  it('should take you to the About us page', function() {
    var about = element(by.css('#jb-footer > div.body-wrap.clearfix > div.sitemap-wrap > ul:nth-child(1) > li:nth-child(2) > a'));
    about.click();
    expect(browser.getTitle()).toEqual('JetBlue | About');
  });

  //check in element link test.
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
      
      /* TODO: check for combinations of departure city, arrival city, departure date, and return date being missing.
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


      
      //TODO: test entering a valid date and that the flights page loads. Currently it doesn't seem to be waiting, but here's what I have so far.
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
 
    /* TO DO:
    
    it('shouldn't allow a login with an invalid account to work', function() {
    attempt to sign on with an invalid account. Expect an error to be returned in a certain element.
      });
    
    it('should allow a valid account to properly log in', function() {
    attempt to sign on with a valid account. Expect a 'hello <name>' to be returned in a certain element.
      });
    
    it('a link at the bottom of the main webpage goes to a correct site', function() {
    Check any/all links at the bottom of the webpage. Expect a specific webpage title or/and expect NOT a 404 page.
      });
    
    it('Should have the proper frame displayed on initial page load', function() {    
    Load initial page and expect "Buy" element is displayed.
      });
    
    it('should allow a valid account to properly log in', function() {
    Expect all orange button elements are displayed with expected text.
      });
    
    it('should allow a valid account to properly log in', function() {
    Click on each of the orange buttons. Expect buttons that take you to other pages have  a specific webpage title or/and expect NOT a 404 page.
      });
    
    it('should have a link to a spanish page', function() {
    Click Espanol link. Expect text containing spanish in multiple elements.
      });
    
    it('should allow a flight to be booked', function() {
    Book a flight. This should include going through a basic flight with standard dates. (Possibly use dates relative to 'today')
      });
    
    it('Check flight status for past flight', function() {
    Check flight status for a flight that has already completed its trip. Expect flight status page to load.
      });
    
    it('Check flight status for a flight that is in the near future', function() {
    Check flight status for a flight that is pending. Expect a flight status page to load.
      });
    
    it('Check flight status for a flight that does not exist', function() {
    Check flight status for a flight number that is not used. Expect an error element in the page that loads.
      });
    
    it('Should allow someone to check in to a flight', function() {
    Check in to a flight. Expect a specific element containing you are checked in. This may take multiple steps over pages like bag checkin.
      });
    
    it('Should account for daylight savings time,', function() {
    Enter a depart time that would occur during the jump of spring daylight savings time. Expect Error or possible date/time adjustment.
      });
    
    it('Should have an extra day for leap year', function() {
    Attempt to find a fare that departs on february 29th on a leap year. Expect the date to be valid.
      });
    
    it('shouldn't allow for invalid dates', function() {
    Enter an invalid date format for a flight's departure/return date. Expect an error.
      });
    
    */

});
