module.exports = {
    '@tags': ['login'],
    'Login Goal' : function (client) {
      client
        .url('https://goal.ciandt.com')
        .waitForElementVisible('body', 1000)
        .assert.elementPresent('h2','Welcome')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', '')
        .setValue('input[type=password]', '')
        .assert.visualRegression() 
        .end()       
    }
  };