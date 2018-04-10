require('dotenv').load()
module.exports = {
  '@tags': ['productivity'],
  'Productivity Burn Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@month')
      .click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(1000)
    menuLeft.click('@productivity')
    //verifica se o frame existe, se sim clica no Gotcha
    client.element('css selector', 'client.frame(1)', function (visible) {
        if (visible.status == 0) {
          client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
        }
      })
      .assert.visualRegression()
      .end()
  },

  'Productivity Burn Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@cycle')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    header.assert.containsText('@reportTitle', 'Productivity Burn')
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

  'Productivity Burn Backlog Item': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@backlogItem')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    header.assert.containsText('@reportTitle', 'Productivity Burn')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    graphic.assert.containsText('@axisX', 'GLPR-3180')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  },

  'Productivity Build Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
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
    header.assert.containsText('@reportTitle', 'Productivity Build')
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

  'Productivity Build Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
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
    header.assert.containsText('@reportTitle', 'Productivity Build')
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

  'Productivity Build Backlog Item': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@backlogItem')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    tabs.click('@tab2')
    header.assert.containsText('@reportTitle', 'Productivity Build')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    graphic.assert.containsText('@axisX', 'GLPR-3180')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  },

  'Productivity All Work Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@month')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    tabs.click('@tab3')
    header.assert.containsText('@reportTitle', 'Productivity All Work')
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

  'Productivity All Work Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@cycle')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    tabs.click('@tab3')
    header.assert.containsText('@reportTitle', 'Productivity All Work')
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

  'Productivity All Work Backlog Item': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@backlogItem')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    tabs.click('@tab3')
    header.assert.containsText('@reportTitle', 'Productivity All Work')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    graphic.assert.containsText('@axisX', 'GLPR-3180')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  },

  'Productivity Customize': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@month')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    tabs.click('@tab4')
    header.assert.containsText('@reportTitle', 'Productivity Burn')
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

  'Productivity Options': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@month')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Productivity Burn')
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

  'Productivity Inconsistence': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var productivity = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = productivity.section.header;
    var graphic = productivity.section.graphic;
    var tabs = productivity.section.tabs;
    var inconsistence = home.section.inconsistence;
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
    client.pause(1000)
    menuLeft.click('@productivity')
    client.pause(1000)
    menuReports
      .click('@cycle')
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '08/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(2000)
    header.assert.containsText('@reportTitle', 'Productivity Burn')
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
      .pause(1000)
      .end()
  }
};