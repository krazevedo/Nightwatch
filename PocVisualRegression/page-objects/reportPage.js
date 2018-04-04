module.exports = {
	sections: {
		header: {
			selector: 'section.chart-section',
			elements: {
				reportTitle: {
					selector: 'h3'
				},
				info: {
					selector: 'h4'
				},
				export: {
					selector: '#btnDownloadXLSX'
				},
				fullScreen: {
					selector: '#btnFullScreen'
				}
			}
		},
		graphic: {
			selector: '#chart',
			elements: {
				axisX: {
					selector: 'svg > g:nth-child(2) > g.c3-axis.c3-axis-x > g:nth-child(14) > text > tspan:nth-child(1)'
				}
			}
		},
		tabs: {
			selector: 'div.report-filter',
			elements: {
				tab1: {
					selector: 'ul > li:nth-child(1) > a'
				},
				tab2: {
					selector: 'ul > li:nth-child(2) > a'
				},
				tab3: {
					selector: 'ul > li:nth-child(3) > a'
				},
				tab4: {
					selector: 'ul > li:nth-child(4) > a'
				},
			}
		}
	}
};