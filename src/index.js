const accordion = (tabSelector, tabContentSelector, tabOpenSelector) => {
    const tabs = document.querySelectorAll(tabSelector)

    // Interfaces to control the tab style.
    class ResetStyles {
        resetHeight(tab) {
            tab.style.height = 70 + 'px'
        }
        resetBackgroundColor(tab) {
            tab.style.backgroundColor = 'white'
        }
    }
    class SetStyles {
        setHeight(tab) {
            const tabContent = tab.querySelector(tabContentSelector)
            tab.style.height = `${tabContent.scrollHeight + 90}px`
        }
        setBackgroundColor(tab, i) {
            const tabsColors = {
                green: '#5fdd4f',
                blue: '#12d3fc',
                pink: '#c448b7',
                orange: '#cd8c17',
                black: '#252525',
                france: '#F64A8A',
                gray: '#6D6552',
                bruze: '#1E5945',
                pale: '#B03F35'
            } 

            const setColor = color => {
                return (tab.style.backgroundColor = color)
            }

            switch (i) {
                case 0:
                    setColor(tabsColors.green)
                    break
                case 1:
                    setColor(tabsColors.blue)
                    break
                case 2:
                    setColor(tabsColors.pink)
                    break
                case 3:
                    setColor(tabsColors.orange)
                    break
                case 4:
                    setColor(tabsColors.black)
                    break 
                case 5:
                    setColor(tabsColors.france)
                    break 
                case 6:
                    setColor(tabsColors.gray)
                    break 
                    
                case 7:
                    setColor(tabsColors.bruze)
                    break
                    
                case 8:
                    setColor(tabsColors.pale)
                    break     
                

                default:
                    console.log('Lol')
            }
        }
    }

    const resetStyle = new ResetStyles()
    const setStyle = new SetStyles()

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            // Tab is open? Then close.
            if (tab.classList.contains(tabOpenSelector)) {
                tab.classList.remove(tabOpenSelector)

                resetStyle.resetHeight(tab)
                resetStyle.resetBackgroundColor(tab)
            } else {
                closeCurrentTab(resetStyle)
                openTab(tab, setStyle, i)
            }
        })
    })

    const closeCurrentTab = resetStyle => {
        tabs.forEach(tab => {
            tab.classList.remove(tabOpenSelector)

            resetStyle.resetHeight(tab)
            resetStyle.resetBackgroundColor(tab)
        })
    }

    const openTab = (tab, setStyle, i) => {
        tab.classList.add(tabOpenSelector)

        setStyle.setHeight(tab)
        setStyle.setBackgroundColor(tab, i)
    }
}

accordion('.tab', '.tab__content', 'tab_open')
