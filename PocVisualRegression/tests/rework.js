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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    //verifica se o frame existe, se sim clica no Gotcha
    home.closeAppcues(client)
    client
      .pause(1000)
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
    header.assert.containsText('@reportTitle', 'Rework')
    //graphic.assert.containsText('@axisX', 'GOAL Fighters')
    client
      .pause(1000)
      .assert.visualRegression()
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
    client.pause(2000)
    menuReports.click('@datePicker')
    home
      .clearDatePicker(home, '@startDate', '08/01/2017')
      .clearDatePicker(home, '@endDate', '02/01/2018')
    menuReports
      .click('@datePicker')
      .click('@apply')
    client.pause(2000)
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    header.assert.containsText('@reportTitle', 'Rework')
    inconsistence
      .waitForElementPresent('@viewBtn', 5000)
      .click('@viewBtn')
    client
      .pause(1000)
      .assert.visualRegression()
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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    client
      .pause(1000)
      .assert.visualRegression()
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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, false)
    client
      .pause(1000)
      .assert.visualRegression()
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
    //graphic.assert.containsText('@axisX', 'GLPR-2917')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Rework x Roadmap': function (client) {
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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    //verifica se o frame existe, se sim clica no Gotcha
    home.closeAppcues(client)
    menuTop.click('@scope')
    home.click('@roadmapSemRelease')
    client.pause(2000)
    menuTop.click('@reports')
    menuLeft.click('@rework')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  },

  'Rework x Report': function (client) {
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
    menuReports.click('@optionsBtn')
    home.checkOptions(client, home, true)
    menuReports.click('@optionsBtn')
    //verifica se o frame existe, se sim clica no Gotcha
    home.closeAppcues(client)
    menuLeft.click('@bcpDelivered')
    client.pause(2000)
    menuLeft.click('@rework')
    client
      .pause(1000)
      .assert.visualRegression()
      .end()
  }
};