require('dotenv').load()
module.exports = {
  '@tags': ['quality'],
  'Quality Dev Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
    client.pause(1000)
    menuReports
      .click('@month')
      .click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(1000)
    menuLeft.click('@quality')
    //verifica se o frame existe, se sim clica no Gotcha
    home.closeAppcues(client)
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality Dev Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
    client.pause(1000)
    menuReports
      .click('@cycle')
    client.pause(2000)
    menuReports.click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports
      .click('@datePicker')
      .click('@apply')
    client.pause(2000)
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Quality Dev')
   // graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .pause(1000)
      .assert.visualRegression()      
      .end()
  },

  'Quality Dev Backlog Item': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    header.assert.containsText('@reportTitle', 'Quality Dev')
    //graphic.assert.containsText('@axisX', 'GLPR-3180')
    client
      .pause(1000)
      .assert.visualRegression()      
      .end()
  },

  'Quality UAT Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Quality UAT')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality UAT Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
    client.pause(1000)
    menuReports
    .click('@cycle')
    client.pause(2000)
    menuReports.click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports
      .click('@datePicker')
      .click('@apply')
    client.pause(3000)
    tabs.click('@tab2')
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Quality UAT')
    //graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality UAT Backlog Item': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    header.assert.containsText('@reportTitle', 'Quality UAT')
    //graphic.assert.containsText('@axisX', 'GLPR-3180')
    client
      .pause(1000)
      .assert.visualRegression()      
      .end()
  },

  'Quality Prod Month': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Quality Prod')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality Prod Cycle': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
    client.pause(1000)
    menuReports
      .click('@cycle')
    client.pause(2000)
    menuReports.click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports
      .click('@datePicker')
      .click('@apply')
    client.pause(3000)
    tabs.click('@tab3')
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Quality Prod')
    //graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality Prod Backlog Item': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    header.assert.containsText('@reportTitle', 'Quality Prod')
    //graphic.assert.containsText('@axisX', 'GLPR-3180')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality Customize': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Quality Dev')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality Options Checked': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    home.checkOptions(client, home, true)
    header.assert.containsText('@reportTitle', 'Quality Dev')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  }, 

  'Quality Options Unchecked': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
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
    home.checkOptions(client, home, false)
    header.assert.containsText('@reportTitle', 'Quality Dev')
    client
      .assert.visualRegression()
      .pause(1000)
      .end()
  }, 

  'Quality Inconsistence': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
    client.pause(1000)
    menuReports
      .click('@cycle')
    client.pause(2000)
    menuReports.click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '08/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports
      .click('@datePicker')
      .click('@apply')
    client.pause(3000)
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Quality Dev')
    inconsistence
          .waitForElementPresent('@viewBtn', 1000)
          .click('@viewBtn')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Quality x Roadmap': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
    client.pause(1000)
    menuReports
      .click('@month')
      .click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(1000)
    menuLeft.click('@quality')
    //verifica se o frame existe, se sim clica no Gotcha
    home.closeAppcues(client)
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    client.pause(2000)
    menuTop.click('@scope')
    home.click('@roadmapSemRelease')
    client.pause(2000)
    menuTop.click('@reports')
    menuLeft.click('@quality')
    client
      .pause(2000)
      .assert.visualRegression()
      .end()
  },

  'Quality x Report': function (client) {
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var quality = client.page.reportPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var menuReports = home.section.menuReports;
    var menuLeft = home.section.menuLeft;
    var header = quality.section.header;
    var graphic = quality.section.graphic;
    var tabs = quality.section.tabs;
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
    menuLeft.click('@quality')
    client.pause(1000)
    menuReports
      .click('@month')
      .click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '11/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports.click('@apply')
    client.pause(1000)
    menuLeft.click('@quality')
    //verifica se o frame existe, se sim clica no Gotcha
    home.closeAppcues(client)
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    client.pause(2000)
    menuLeft.click('@bcpDelivered')
    client.pause(1000)
    menuLeft.click('@quality')
    client
      .pause(2000)
      .assert.visualRegression()
      .end()
  },
};