require('dotenv').load()
module.exports = {
    '@tags': ['roadmap'],
    'Roadmap Cards': function (client) {
        //Instaciar paginas
        var login = client.page.loginPage();
        var home = client.page.homePage();
        var roadmap = client.page.roadmapPage();
        //Instanciar sessão das páginas
        var menuTop = home.section.menuTop;
        var menuRoadmap = roadmap.section.menuRoadmap;
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
        menuTop.click('@roadmap')
        client.pause(2000)
        menuRoadmap
            .click('@datePicker')
        roadmap
            .clearDatePicker(roadmap, '@startDate', '11/01/2017')
            .clearDatePicker(roadmap, '@endDate', '02/01/2018')
        menuRoadmap.click('@apply')
        client
            .pause(3000)
            .assert.visualRegression()
            .end()
    },

    'Roadmap Epic': function (client) {
        //Instaciar paginas
        var login = client.page.loginPage();
        var home = client.page.homePage();
        var roadmap = client.page.roadmapPage();
        //Instanciar sessão das páginas
        var menuTop = home.section.menuTop;
        var menuRoadmap = roadmap.section.menuRoadmap;
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
        menuTop.click('@roadmap')
        client.pause(2000)
        menuRoadmap
            .click('@epic')
            .click('@datePicker')
        roadmap
            .clearDatePicker(roadmap, '@startDate', '02/01/2018')
            .clearDatePicker(roadmap, '@endDate', '04/01/2018')
        menuRoadmap.click('@apply')
        client
            .waitForElementPresent('#roadmap > div > section > div > div > section > div:nth-child(1)', 10000)
            .assert.visualRegression()
            .end()
    },

    'Roadmap Edit Future Cycle': function (client) {
        //Instaciar paginas
        var login = client.page.loginPage();
        var home = client.page.homePage();
        var roadmap = client.page.roadmapPage();
        //Instanciar sessão das páginas
        var menuTop = home.section.menuTop;
        var menuRoadmap = roadmap.section.menuRoadmap;
        var futureCycle = roadmap.section.futureCycle;
        login.navigate()
            .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS) //Comando para realizar o login        
        client.pause(5000)
        home.waitForElementVisible('body', 1000)
        menuTop.click('@companyBtn')
        home
            .waitForElementPresent('@list', 1000)
            .selectListBox(client, home, 'Goal')
        menuTop.click('@projectBtn')              
        home.selectListCheck(client, home, 'Goal Product')
        client.pause(500)
        home.selectListCheck(client, home, 'GOAL TESTE')              
        menuTop
            .waitForElementPresent('@apply', 1000)
            .click('@apply')
        client.pause(1000)
        menuTop.click('@roadmap')
        client.pause(2000)
        menuRoadmap.click('@datePicker')
        roadmap.clearDatePicker(roadmap, '@endDate', '07/01/2018')
        client.pause(500)
        roadmap.clearDatePicker(roadmap, '@startDate', '06/01/2018')             
        menuRoadmap.click('@apply')
        futureCycle.waitForElementPresent('@editBtn', 5000)
        futureCycle.click('@editBtn')
        client
            .assert.visualRegression()
            .end()
    },/*

    'Roadmap Edit Future Cycle Date': function (client) {
        //Instaciar paginas
        var login = client.page.loginPage();
        var home = client.page.homePage();
        var roadmap = client.page.roadmapPage();
        //Instanciar sessão das páginas
        var menuTop = home.section.menuTop;
        var menuRoadmap = roadmap.section.menuRoadmap;
        var futureCycle = roadmap.section.futureCycle;
        var datePicker = roadmap.section.editDate;
        login.navigate()
            .realizarLogin(process.env.GOAL_USER, process.env.GOAL_PASS) //Comando para realizar o login        
        client.pause(5000)
        home.waitForElementVisible('body', 1000)
        menuTop.click('@companyBtn')
        home
            .waitForElementPresent('@list', 1000)
            .selectListBox(client, home, 'Goal')
        menuTop.click('@projectBtn')
        home.selectListCheck(client, home, 'Goal Product')
        client.pause(500)
        home.selectListCheck(client, home, 'GOAL TESTE')
        menuTop
            .waitForElementPresent('@apply', 1000)
            .click('@apply')
        client.pause(1000)
        menuTop.click('@roadmap')
        client.pause(2000)
        menuRoadmap.click('@datePicker')
        roadmap.clearDatePicker(roadmap, '@endDate', '07/01/2018')
        client.pause(500)
        roadmap.clearDatePicker(roadmap, '@startDate', '06/01/2018')            
        menuRoadmap.click('@apply')
        futureCycle.waitForElementPresent('@editBtn', 5000)
        futureCycle.click('@editBtn')
        datePicker.click('@startDate')
        client
            .pause(2000)
            .assert.visualRegression()
            .end()
    },*/

    'Roadmap Cards Options': function (client) {
        //Instaciar paginas
        var login = client.page.loginPage();
        var home = client.page.homePage();
        var roadmap = client.page.roadmapPage();
        //Instanciar sessão das páginas
        var menuTop = home.section.menuTop;
        var menuRoadmap = roadmap.section.menuRoadmap;
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
        menuTop.click('@roadmap')
        client.pause(2000)
        menuRoadmap
            .click('@datePicker')
        roadmap
            .clearDatePicker(roadmap, '@startDate', '11/01/2017')
            .clearDatePicker(roadmap, '@endDate', '02/01/2018')
        menuRoadmap.click('@apply')
        client.pause(3000)
        menuRoadmap.click('@optionsBtn')
        client
            .assert.visualRegression()
            .end()
    }
};