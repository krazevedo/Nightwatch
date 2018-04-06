module.exports = {
    commands: [],
    elements: {
        list: {
            selector: '#app > div.menu__content.menuable__content__active > div > ul > li'
        }
    },
    sections: {
        userInformation: {
            selector: 'div.admin__user',
            elements: {
                role: {
                    selector: 'div:nth-child(2) > div.admin__user__role > div > div > div > div > div'
                },
                fullname: {
                    selector: 'div:nth-child(2) > div:nth-child(2) > div > div > div.input-group__input > input'
                },
                type: {
                    selector: 'div:nth-child(2) > div:nth-child(3) > div > div > div > div > div'
                },
                login: {
                    selector: 'div:nth-child(3) > div.admin__user__username > div:nth-child(2) > div > div.input-group__input > input'
                },
                email: {
                    selector: 'div:nth-child(3) > div.admin__user__email > div > div > div.input-group__input > input'
                },
                company: {
                    selector: 'div:nth-child(5) > div:nth-child(1) > div > div > div > div > div'
                },
                project: {
                    selector: 'div:nth-child(5) > div:nth-child(2) > div > div > div > div > div'

                },
                assignBtn: {
                    selector: 'div:nth-child(5) > div.admin__user__button > button'
                },
                createBtn: {
                    selector: 'div.actions > button'
                }
            }
        }
    }
};