require('dotenv').load()
module.exports = {
  '@tags': ['worklog'],
  'Performance Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var worklog = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReportsWorklog;
    var menuLeft = home.section.menuLeft;
    var header = worklog.section.header;
    var graphic = worklog.section.graphic;
    var tabs = worklog.section.tabs;
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
    client.pause(2000)
    menuLeft.click('@worklog')
    client.pause(2000)
    menuReports
      .click('@month')
      .click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(1000)
    menuLeft.click('@worklog')
    //verifica se o frame existe, se sim clica no Gotcha
    client.element('css selector', 'client.frame(1)', function (visible) {
        if (visible.status == 0) {
          client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
        }
      })
      .assert.visualRegression()
      .end()
  },

  'Performance Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var worklog = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReportsWorklog;
    var menuLeft = home.section.menuLeft;
    var header = worklog.section.header;
    var graphic = worklog.section.graphic;
    var tabs = worklog.section.tabs;
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
    client.pause(2000)
    menuLeft.click('@worklog')
    client.pause(2000)
    menuReports
      .click('@cycle')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    header.assert.containsText('@reportTitle', 'Performance Worklog')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  },

  'Task Type Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var worklog = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReportsWorklog;
    var menuLeft = home.section.menuLeft;
    var header = worklog.section.header;
    var graphic = worklog.section.graphic;
    var tabs = worklog.section.tabs;
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
    client.pause(2000)
    menuLeft.click('@worklog')
    client.pause(2000)
    menuReports
      .click('@month')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    tabs.click('@tab2')
    header.assert.containsText('@reportTitle', 'Worklog by Task Type')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  },

  'Task Type Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var worklog = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReportsWorklog;
    var menuLeft = home.section.menuLeft;
    var header = worklog.section.header;
    var graphic = worklog.section.graphic;
    var tabs = worklog.section.tabs;
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
    client.pause(2000)
    menuLeft.click('@worklog')
    client.pause(2000)
    menuReports
      .click('@cycle')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    tabs.click('@tab2')
    header.assert.containsText('@reportTitle', 'Worklog by Task Type')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    client.pause(1000)
    graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  }
};