const datePickerCommands = {
	clearDatePicker(page, selector, date) {
		return this
			.getValue(selector, function (result) {
				for (c in result.value) {
					page.setValue(selector, "\u0008")
				}
			})
			.setValue(selector, date)
	}
};

const selectCommands = {
	selectListBox(client, page, text) {
		let element = null;
		client.pause(500)
		client.elements('css selector', '#app > div.menu__content.menuable__content__active > div > ul > li', function (elements) {
			let success = false;
			for (let i = 0;
				(i < elements.value.length) && (success === false); i++) {
				client.elementIdText(elements.value[i].ELEMENT, function (result) {
					if (result.value === text) {
						success = true;
						element = elements.value[i].ELEMENT;
						page.api.elementIdClick(element);
					}
				});
			}
		});
	},
	selectListCheck(client, page, text) {
		let element = null;
		client.pause(500)
		client.elements('css selector', '#app > div.menu__content.menuable__content__active > div > ul > li', function (elements) {
			let success = false;
			for (let i = 0;
				(i < elements.value.length) && (success === false); i++) {
				client.elementIdText(elements.value[i].ELEMENT, function (result) {
					var value = result.value.split('\n')
					if (value[0] === text) {
						success = true;
						element = elements.value[i].ELEMENT;
						page.api.elementIdClick(element)
					}
				});
			}
		});
	}
};

const checkCommands = {
	checkOptions(client, page, check) {
		client.getAttribute('#app > div.menu__content.menuable__content__active > div > div > div > div', 'aria-checked', function (result) {
			if (result.value == 'true' && check == true) { //result.value true é unchecked
				page.click('#app > div.menu__content.menuable__content__active > div > div > div > div > div.input-group__input > div');
			} else(result.value == 'false' && check == false); { //result.value false é checked
				page.click('#app > div.menu__content.menuable__content__active > div > div > div > div > div.input-group__input > div');
			}
		});
	}
};

module.exports = {
	commands: [datePickerCommands, selectCommands, checkCommands],
	elements: {
		list: {
			selector: '#app > div.menu__content.menuable__content__active > div > ul > li'
		},
		optionsList: {
			selector: '#app > div.menu__content.menuable__content__active > div > div > div > div'
		},
		startDate: {
			selector: '#app > div.menu__content.menuable__content__active > div > div.gDatePicker__dates > div:nth-child(1) > input'
		},
		endDate: {
			selector: '#app > div.menu__content.menuable__content__active > div > div.gDatePicker__dates > div:nth-child(2) > input'
		},
		checkOptions: {
			selector: '#app > div.menu__content.menuable__content__active > div > div > div > div > div.input-group__input > div'
		},
		settings: {
			selector: '#app > div.menu__content.menuable__content__active > ul > div > li > a'
		},
		logout: {
			selector: '#app > div.menu__content.menuable__content__active > ul > li > a'
		},
		roadmap: {
			selector: '#app > div:nth-child(10) > ul > a:nth-child(1) > li > div'
		},
		burnup: {
			selector: '#app > div:nth-child(10) > ul > a:nth-child(2) > li > div'
		}
	},
	sections: {
		menuTop: {
			selector: 'header.header-top',
			elements: {
				companyBtn: {
					selector: 'div.main-filter.open > div > nav > ul > li:nth-child(1) > div > div'
				},
				projectBtn: {
					selector: 'div.main-filter.open > div > nav > ul > li:nth-child(2) > div > div'
				},
				teamBtn: {
					selector: 'div.main-filter.open > div > nav > ul > li:nth-child(3) > div > div'
				},
				apply: {
					selector: '#btnApplyMainSelection'
				},
				reports: {
					selector: 'div:nth-child(4) > nav > ul > li:nth-child(2) > a'
				},
				scope: {
					selector: 'div:nth-child(4) > nav > ul > li:nth-child(1) > div > div > a'
				},
				user: {
					selector: 'div.user-info-wrap > div > div:nth-child(2) > div > div > button > span'
				}
			}
		},
		menuReportsBCP: {
			selector: 'header.page-header',
			elements: {
				release: {
					selector: 'div > div:nth-child(1) > div > div > div > div > div'
				},
				optionsBtn: {
					selector: 'div > div.item-box-separator > div > div > a'
				},
				month: {
					selector: 'div.input-group__input div:nth-child(1) div div.input-group--selection-controls__ripple'
				},
				cycle: {
					selector: 'div.input-group__input div:nth-child(2) div div.input-group--selection-controls__ripple'
				},
				datePicker: {
					selector: 'div > div:nth-child(4) > div > div > div > div > div'
				},
				apply: {
					selector: '#applyButton'
				}
			}
		},
		menuReportsWorklog: {
			selector: 'header.page-header',
			elements: {
				month: {
					selector: 'div.input-group__input div:nth-child(1) div div.input-group--selection-controls__ripple'
				},
				cycle: {
					selector: 'div.input-group__input div:nth-child(2) div div.input-group--selection-controls__ripple'
				},
				datePicker: {
					selector: 'div > div:nth-child(3) > div > div > div > div > div'
				},
				apply: {
					selector: '#applyButton'
				}
			}
		},
		menuReports: {
			selector: 'header.page-header',
			elements: {
				optionsBtn: {
					selector: 'div > div.item-box-separator > div > div > a'
				},
				backlogItem: {
					selector: 'div > div:nth-child(3) > div > div > div.input-group__input > div:nth-child(1) > div > div > div'
				},
				month: {
					selector: 'div > div:nth-child(3) > div > div > div.input-group__input > div:nth-child(2) > div > div > div'
				},
				cycle: {
					selector: 'div > div:nth-child(3) > div > div > div.input-group__input > div:nth-child(3) > div > div > div'
				},
				datePicker: {
					selector: 'div > div:nth-child(4) > div > div > div > div > div'
				},
				apply: {
					selector: '#applyButton'
				}
			}
		},
		inconsistence: {
			selector: 'div.inconsistency-wrap.display-inconsistency-box',
			elements: {
				viewBtn: {
					selector: 'div > div.inconsistency-box__title > p > a:nth-child(2)'
				},
				hideBtn: {
					selector: 'div > div.inconsistency-box__title > p > a:nth-child(3)'
				}
			}
		},
		menuLeft: {
			selector: 'div#left-menu',
			elements: {
				bcpDelivered: {
					selector: 'nav > ul > li:nth-child(1) > span > span > span > a'
				},
				quality: {
					selector: 'nav > ul > li:nth-child(2) > span > span > span > a'
				},
				productivity: {
					selector: 'nav > ul > li:nth-child(3) > span > span > span > a'
				},
				rework: {
					selector: 'nav > ul > li:nth-child(4) > span > span > span > a'
				},
				worklog: {
					selector: 'nav > ul > div:nth-child(5) > li > span > span > span > a'
				}
			}
		}
	}
};
