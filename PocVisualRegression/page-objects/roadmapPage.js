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
        startDate: {
            selector: '#app > div.menu__content.menuable__content__active > div > div.gDatePicker__dates > div:nth-child(1) > input'
        },
        endDate: {
            selector: '#app > div.menu__content.menuable__content__active > div > div.gDatePicker__dates > div:nth-child(2) > input'
        }
	},
	sections: {		
		menuRoadmap:{
			selector: 'header.page-header',
			elements: {			
			optionsBtn: {
				selector: 'div > div:nth-child(1) > div.menu > div > a'
			},
			epic: {
				selector: 'div > div:nth-child(3) > div > div > div.input-group__input > div:nth-child(1) > div > div > div'
			},
			cards: {
				selector: 'div > div:nth-child(3) > div > div > div.input-group__input > div:nth-child(2) > div > div > div'
			},
			datePicker: {
				selector: 'div > div:nth-child(4) > div > div > div > div > div'
			},			
			apply: {
				selector: '#applyButton'
			}
			}
		},
		futureCycle:{
			selector: 'div.team__cycle__header',
			elements: {
				editBtn: {
					selector: 'div > div.team__cycle__header__edit'
				}
            }
        },
		editDate:{
			selector: 'div.editCycleDate',
			elements: {
				startDate: {
					selector: 'div:nth-child(1) > div > div > div > div > div.input-group__input > input'
				},
				endDate: {
					selector: 'div:nth-child(2) > div > div > div > div > div.input-group__input > input'
                },
                apply: {
                    selector: 'div > button'
                }			
			}
		}
	  }
  };

