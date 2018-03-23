require('dotenv').load()
module.exports = {
    '@tags': ['login'],
    'Login Goal' : function (client) {
      var login = client.page.loginPage();
        login.navigate()
          .waitForElementVisible('body', 1000)
          .assert.elementPresent('h2','Welcome')
          .assert.visible('@username')
          .setValue('@username', process.env.GOAL_USER)
          .setValue('@password', process.env.GOAL_PASS)
          .assert.visualRegression() 
        client.end()       
    }
  };