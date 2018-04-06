require('dotenv').load()
module.exports = {
  '@tags': ['bcpdelivered'],
  'BCP Delivered Month': function (client) {
    //Instaciar paginas
    var login = client.page.loginPage();
    var home = client.page.homePage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS) //Comando para realizar o login        
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@companyBtn')
    home
      .waitForElementPresent('@list', 1000)
      .selectListBox(client, home, 'Goal')
    menuTop
      .waitForElementPresent('@apply', 1000)
      .click('@apply')
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReportsBCP.click('@apply')
    //verifica se o frame existe, se sim clica no Gotcha
    client.element('css selector', 'client.frame(1)', function (visible) {
        if (visible.status == 0) {
          client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
        }
      })
      .assert.visualRegression()
      .end()
  },

  'BCP Delivered Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    var bcpdelivered = client.page.reportPage();
    var header = bcpdelivered.section.header;
    var graphic = bcpdelivered.section.graphic;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS)
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@companyBtn')
    home
      .waitForElementPresent('@list', 1000)
      .selectListBox(client, home, 'Goal')
    menuTop
      .waitForElementPresent('@apply', 1000)
      .click('@apply')
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@cycle')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReportsBCP.click('@apply')
    client.pause(2000)
    header.assert.containsText('@reportTitle', 'Business Complexity Points Delivered')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'BCP Delivered Inconsistence': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    var inconsistence = home.section.inconsistence;
    var bcpdelivered = client.page.reportPage();
    var header = bcpdelivered.section.header;
    var graphic = bcpdelivered.section.graphic;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS)
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@companyBtn')
    home
      .waitForElementPresent('@list', 1000)
      .selectListBox(client, home, 'Goal')
    menuTop
      .waitForElementPresent('@apply', 1000)
      .click('@apply')
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@cycle')
      .click('@datePicker')
    client.pause(2000)
    home
      .clearDatePicker(home, '@startDate', '08/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReportsBCP
      .click('@apply')
    client.pause(2000)
    header.assert.containsText('@reportTitle', 'Business Complexity Points Delivered')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    inconsistence
      .waitForElementPresent('@viewBtn', 1000)
      .click('@viewBtn')
    client
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'BCP Delivered Options Checked': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    var inconsistence = home.section.inconsistence;
    var bcpdelivered = client.page.reportPage();
    var header = bcpdelivered.section.header;
    var graphic = bcpdelivered.section.graphic;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS)
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@companyBtn')
    home
      .waitForElementPresent('@list', 1000)
      .selectListBox(client, home, 'Goal')
    menuTop
      .waitForElementPresent('@apply', 1000)
      .click('@apply')
    menuReportsBCP  
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReportsBCP.click('@apply')
    client.pause(2000)
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@optionsBtn')
    client
      .pause(2000)
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'BCP Delivered Options Unchecked': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    var inconsistence = home.section.inconsistence;
    var bcpdelivered = client.page.reportPage();
    var header = bcpdelivered.section.header;
    var graphic = bcpdelivered.section.graphic;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS)
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@companyBtn')
    home
      .waitForElementPresent('@list', 1000)
      .selectListBox(client, home, 'Goal')
    menuTop
      .waitForElementPresent('@apply', 1000)
      .click('@apply')
    menuReportsBCP  
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReportsBCP.click('@apply')
    client.pause(2000)
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@optionsBtn')
    home.click('@checkOptions')
    client
      .pause(2000)
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'BCP Delivered Release': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    var inconsistence = home.section.inconsistence;
    var bcpdelivered = client.page.reportPage();
    var header = bcpdelivered.section.header;
    var graphic = bcpdelivered.section.graphic;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS)
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@companyBtn')
    home
      .waitForElementPresent('@list', 1000)
      .selectListBox(client, home, 'Goal')
    menuTop
      .waitForElementPresent('@apply', 1000)
      .click('@apply')
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@release')
    client
      .pause(2000)
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'BCP Delivered Release Selected': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    var inconsistence = home.section.inconsistence;
    var bcpdelivered = client.page.reportPage();
    var header = bcpdelivered.section.header;
    var graphic = bcpdelivered.section.graphic;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS)
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@companyBtn')
    home
      .waitForElementPresent('@list', 1000)
      .selectListBox(client, home, 'Goal')
    menuTop
      .waitForElementPresent('@apply', 1000)
      .click('@apply')
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@release')
    home.selectListBox(client, home, '2018 - Q1')
    client
      .pause(2000)
      .assert.visualRegression()
      .pause(2000)
      .end()
  }
};