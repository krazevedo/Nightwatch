module.exports = {
    '@tags': ['login'],
    'Login Goal' : function (client) {
      client
        .url('https://goal.ciandt.com')
        .waitForElementVisible('body', 1000)
        .assert.elementPresent('h2','Welcome')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'process.env.GOAL_USER')
        .setValue('input[type=password]', 'process.env.GOAL_PASS')
        .assert.visualRegression() 
        .end()       
    }
  };