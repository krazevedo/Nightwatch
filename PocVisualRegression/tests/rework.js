require('dotenv').load()
module.exports = {
  '@tags': ['rework'],
  'Rework Month': function (client) {
    //Instaciar paginas
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var rework = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = rework.section.header;    
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
    menuLeft.click('@rework')
    client.pause(1000)
    menuReports      
      .click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    //verifica se o frame existe, se sim clica no Gotcha
    client.element('css selector', 'client.frame(1)', function (visible) {
        if (visible.status == 0) {
          client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
        }
      })
      .assert.visualRegression()
      .end()
  },

  'Rework Cycle': function (client) {
    //Instaciar paginas
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var rework = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = rework.section.header;
    var graphic = rework.section.graphic;      
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
    menuLeft.click('@rework')
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
    header.assert.containsText('@reportTitle', 'Rework')
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

  'Rework Inconsistence': function (client) {
    //Instaciar paginas
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var rework = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = rework.section.header;    
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
    menuLeft.click('@rework')
    client.pause(1000)
    menuReports
      .click('@cycle')
      .click('@datePicker')
    client.pause(2000)
    home
      .clearDatePicker(home, '@startDate', '08/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports
      .click('@apply')
    client.pause(2000)
    header.assert.containsText('@reportTitle', 'Rework')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    inconsistence
      .waitForElementPresent('@viewBtn', 5000)
      .click('@viewBtn')
    client
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'Rework Options Checked': function (client) {
   //Instaciar paginas
   var login = client.page.loginPage();
   var home = client.page.homePage();
   var rework = client.page.reportPage();
   //Instanciar sessão das páginas
   var menuTop = home.section.menuTop;
   var menuReports = home.section.menuReports;
   var menuLeft = home.section.menuLeft;
   var header = rework.section.header;   
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
    menuReports  
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(1000)
    menuLeft.click('@rework')
    client.pause(1000)    
    menuReports
      .click('@optionsBtn')
    client
      .pause(2000)
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'Rework Options Unchecked': function (client) {
    //Instaciar paginas
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var rework = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = rework.section.header;
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
    menuReports 
      .click('@datePicker')
    client.pause(1000)
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(1000)
    menuLeft.click('@rework')
    client.pause(1000)
    menuReports      
      .click('@optionsBtn')
    home.click('@checkOptions')
    client
      .pause(2000)
      .assert.visualRegression()
      .pause(2000)
      .end()
  },

  'Rework Backlog Item': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var rework = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = rework.section.header;
    var graphic = rework.section.graphic;
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
    menuLeft.click('@rework')
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
    header.assert.containsText('@reportTitle', 'Rework')
    client.element('css selector', 'client.frame(1)', function (visible) {
      if (visible.status == 0) {
        client.frame(1).click('body > div > div > div > div.panel-content.panel-content-actions > div.appcues-actions-right > a')
      }
    })
    graphic.assert.containsText('@axisX', 'GLPR-2917')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  },
};