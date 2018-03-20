require('dotenv').load()
module.exports = {
    '@tags': ['bcpdelivered'],
    'BCP Delivered' : function (client) {
      client
        .url('https://goal.ciandt.com')
        .waitForElementVisible('body', 10000)
        .assert.elementPresent('h2','Welcome')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', process.env.GOAL_USER)
        .setValue('input[type=password]', process.env.GOAL_PASS)    
        .submitForm('form')        
        .pause(5000)
        .assert.containsText('h3','Business Complexity Points Delivered')
        .click('header > div.main-filter.open > div > nav > ul > li:nth-child(1) > div > div')
        .pause(1000)
        .click('#app > div.menu__content.menuable__content__active > div > ul > li:nth-child(19) > a > span')
        .pause(1000)
        .click('#btnApplyMainSelection')
        .waitForElementVisible('#app > div.application--wrap > section > header > div > div:nth-child(1) > div > div > div > div > div', 5000)
        .assert.visualRegression()        
        .end()
    },

    '@tags': ['bcpdelivered_cycle'],
    'BCP Delivered Cycle' : function (client) {
      client
        .url('https://goal.ciandt.com')
        .waitForElementVisible('body', 10000)
        .assert.elementPresent('h2','Welcome')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', process.env.GOAL_USER)
        .setValue('input[type=password]', process.env.GOAL_PASS)      
        .submitForm('form')        
        .pause(5000)
        .assert.containsText('h3','Business Complexity Points Delivered')
        .click('header > div.main-filter.open > div > nav > ul > li:nth-child(1) > div > div')
        .click('#app > div.menu__content.menuable__content__active > div > ul > li:nth-child(19) > a > span')
        .click('#btnApplyMainSelection')
        .waitForElementVisible('#app > div.application--wrap > section > header > div > div:nth-child(1) > div > div > div > div > div', 5000)        
        .click('div.input-group__input div:nth-child(2) div div.input-group--selection-controls__ripple') 
        .click('#applyButton')
        .pause(2000)
        .assert.containsText('#chart > svg > g:nth-child(2) > g.c3-axis.c3-axis-x > g:nth-child(14) > text > tspan:nth-child(1)','Mon Goals -')
        .assert.visualRegression()
        .pause(2000)
        .end()
    }
  };