const loginCommands = {  
    realizarLogin(email, pass) {
      return this
        .waitForElementVisible('@username', 1000)
        .setValue('@username', email)
        .setValue('@password', pass)
        .waitForElementVisible('@submit', 1000)
        .submitForm('@submit')
    }
  };

module.exports = {
    url: 'https://goal.ciandt.com',
    commands: [loginCommands],
    elements: {
        username: 'input[type=text]',
        password: 'input[type=password]',
        submit: 'form'   
      }
  };

