const datePickerCommands = {  
    clearDatePicker(page, selector, date) {
	  return this
	  .getValue(selector, function(result){
		for (c in result.value){
		  page.setValue(selector, "\u0008")
		} 
	  }) 
	  .setValue(selector, date)
    }
  };

module.exports = {
	commands: [datePickerCommands],
    elements: {
		companyList: {
			selector: '#app > div.menu__content.menuable__content__active > div > ul > li:nth-child(19) > a > span'
		},		
		projectList: {
			selector: '#app > div.menu__content.menuable__content__active > div > ul > li:nth-child(1) > i'
		},
		teamList: {
			selector: '#app > div.menu__content.menuable__content__active > div > ul > li:nth-child(1) > div > div.input-group__input > div'
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
			reports:{
				selector: 'nav > ul > li:nth-child(2) > a'
			},
			roadmap:{
				selector: 'nav > ul > li:nth-child(3) > a'
			}
		  }
		},
		menuReportsBCP:{
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
		menuReports:{
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
		inconsistence:{
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
		menuLeft:{
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
				}
			}
	  	}
	  }
  };

