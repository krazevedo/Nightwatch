require('dotenv').load()
module.exports = {
  '@tags': ['createuser'],
  'Create User': function (client) {
    //Instaciar paginas
    var login = client.page.loginPage();
    var home = client.page.homePage();
    var user = client.page.createUserPage();
    //Instanciar sessão das páginas
    var menuTop = home.section.menuTop;
    var information = user.section.userInformation;
    login.navigate()
      .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS) //Comando para realizar o login        
    client.pause(5000)
    home.waitForElementVisible('body', 1000)
    menuTop.click('@user')
    home.click('@settings')
    client
      .pause(1000)    
      .assert.visualRegression()
      .end()
  }
}