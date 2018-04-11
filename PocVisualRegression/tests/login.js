require('dotenv').load()
module.exports = {
    '@tags': ['login'],
    'Login Goal' : function (client) {
      var login = client.page.loginPage();
        login.navigate()
          .waitForElementVisible('body', 1000)
          .assert.elementPresent('h2','Welcome')
          .assert.visualRegression() 
        client.end()       
    },

    'Login Goal Incorrect' : function (client) {
      var login = client.page.loginPage();
        login.navigate()
          .waitForElementVisible('body', 1000)
          .assert.elementPresent('h2','Welcome')
          .realizarLogin('a','a') //Comando para realizar o login 
          .assert.visualRegression() 
        client.end()       
    }
  };