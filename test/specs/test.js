var assert = require('assert');

var environment = 'https://launchforth.io/';

/*describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
});*/

function login() {
    browser.windowHandleSize({
        width: 1600,
        height: 970
    });

    browser.url(environment);
    var loginSelector = '.nav__primary__li .nav__primary__li:nth-child(2) a';

    browser.click(loginSelector);
    browser.waitForExist('.username-field', 3000);
    browser.click('.username-field');
    browser.keys('daniel303');
    browser.click('.password-field');
    browser.keys('Testing1!');
    browser.keys('Enter');
    browser.pause(3000);
}

function logout() {
    browser.url(environment);
    browser.waitForExist('.fa-angle-down', 3000);
    browser.click('.fa-angle-down');
    browser.waitForVisible('.nav__primary__li:nth-child(5) a', 3000);
    browser.click('.nav__primary__li:nth-child(5) a');
}

describe('login', function() {
    it('should successfully login', function() {
        login();
    })
});

describe('logout', function() {
    it('should successfully logout', function() {
        logout();
    })
})