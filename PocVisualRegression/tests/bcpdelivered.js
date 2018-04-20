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
    client.pause(2000)
    menuReportsBCP.click('@optionsBtn')
    home.closeAppcues(client) //verifica se o frame existe, se sim clica no Gotcha
    home.checkOptions(client, home, true)
    menuReportsBCP.click('@optionsBtn')
    client
      .pause(3000)
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
    client.pause(2000)
    menuReportsBCP.click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReportsBCP
      .click('@datePicker')
      .click('@apply')
    client.pause(2000)
    menuReportsBCP.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReportsBCP.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Business Complexity Points Delivered')
    //graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .pause(2000)
      .assert.visualRegression()      
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
    client.pause(2000)    
    menuReportsBCP.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReportsBCP.click('@datePicker')
    client.pause(2000)    
    home
      .clearDatePicker(home, '@startDate', '08/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    client.pause(2000)
    menuReportsBCP.click('@apply')
    client.pause(2000)
    menuReportsBCP.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReportsBCP.click('@optionsBtn')
    client.pause(1000)
    header.assert.containsText('@reportTitle', 'Business Complexity Points Delivered')
    inconsistence
      .waitForElementPresent('@viewBtn', 5000)
      .click('@viewBtn')
    client
      .pause(2000)
      .assert.visualRegression()      
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
    home.checkOptions(client, home, true)
    client
      .pause(2000)
      .assert.visualRegression()      
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
    home.checkOptions(client, home, false)
    client
      .pause(2000)
      .assert.visualRegression()      
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
    menuReportsBCP.click('@release')
    client.pause(2000)
    menuReportsBCP.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReportsBCP.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Business Complexity Points Delivered')    
    client
      .pause(2000)
      .assert.visualRegression()
      .end()
  },

  'BCP Delivered x Roadmap': function (client) {
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
    client.pause(2000)
    home.closeAppcues(client) //verifica se o frame existe, se sim clica no Gotcha
    menuReportsBCP.click('@optionsBtn')    
    home.checkOptions(client, home, true)
    menuReportsBCP.click('@optionsBtn')
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@release')
    home.selectListBox(client, home, '2018 - Q1')    
    menuReportsBCP.click('@release')
    client.pause(1000)
    menuTop.click('@scope')
    home.click('@roadmap')
    client.pause(3000)
    menuTop.click('@reports')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'BCP Delivered x Report': function (client) {
    //Instaciar paginas
    var login = client.page.loginPage();
    var home = client.page.homePage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReportsBCP = home.section.menuReportsBCP;
    var menuLeft = home.section.menuLeft;
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
    client.pause(2000)
    home.closeAppcues(client) //verifica se o frame existe, se sim clica no Gotcha
    menuReportsBCP.click('@optionsBtn')    
    home.checkOptions(client, home, true)
    menuReportsBCP.click('@optionsBtn')
    menuReportsBCP
      .waitForElementVisible('@release', 10000)
      .click('@release')
    home.selectListBox(client, home, '2018 - Q1')    
    menuReportsBCP.click('@release')
    client.pause(1000)
    menuLeft.click('@quality')
    client.pause(2000)
    menuLeft.click('@bcpDelivered')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  }
};