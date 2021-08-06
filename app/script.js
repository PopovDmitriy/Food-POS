document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".js-nav");
    const mainContent = document.querySelector(".js-main");

    renderMainContent();
    navBarTabHandler();
    logoHandler();

    const header = document.querySelector(".js-header");
    document.body.clientWidth.onchange = onChangeClientWidth();

    
    /**
     * Handler for hav bar tabs
     */
     function navBarTabHandler () {
        const aNavListBtn = nav.querySelectorAll(".nav__item button");

        aNavListBtn.forEach(item => {
            item.addEventListener("click", () => {
                changeTabState(item.parentNode);
                renderMainContent(item.dataset.action);
            });
        });
    };

    /**
     * Logo handler
     */
    function logoHandler () {
        const logo = nav.querySelector(".logo");
        const activeTab = nav.querySelector("button[data-action='Home']").parentNode;
        logo.addEventListener("click", () => {
            changeTabState(activeTab);
            renderMainContent();
        });
    };

    /**
     * Change state of tabs
     * @param {Object} activeTab - Active tab object
     */
    function changeTabState (activeTab) {
        const navList = nav.querySelectorAll(".nav__item");

        navList.forEach( item => {
            item.classList.remove("is__active");
        });

        activeTab.classList.add("is__active");
    };

    /**
     * Inserts content into a main content block
     * @param {String} tabAction - Action value of the current tab. Default value is "Home"
     */
    function renderMainContent (tabAction = "Home") {
        if (tabAction === "Home") {
            mainContent.innerHTML = renderHomePage();
        } else {
            mainContent.innerHTML = tabAction;
        }

        switch(tabAction) {
            case 'Home': mainContent.innerHTML = renderHomePage();
                break;
            default: mainContent.innerHTML = `<div class="main__container">${tabAction}</div>`;
                break;
        }
    };

    
    /**
     * Render Home Page html structure
     * @returns {html} Main container
     */
     function renderHomePage () {
        return `<div class="main__container">${renderHeader()}</div>`;
    };

    /**
     * Render Header html
     * @returns {html} - header html structure
     */
    function renderHeader () {
        let currentDate = getCurrentDate(); 
        let header =
            `<header class="header js-header">
                <div class="header__title">
                    <h1>Jaegar Resto</h1>
                    <p>${currentDate}</p>
                </div>
                <form action="#" class="header__searchfield">
                    <input type="search" value="" placeholder="Search" class="search-input">
                    <button type="submit" class="search-button js-searchBtn">
                        <svg width="20px" hight="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" fill="#fff" xml:space="preserve">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                                s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                                c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                                s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                    </button>
                </form>
            </header>`

        return header;
    };
    
    /**
     * Return current date
     * @returns {Date} Current Date
     */
    function getCurrentDate () {
        let iScreenWidth = window.screen.width;
        let bIsMobile = iScreenWidth < 600;

        let dCurrentDate = new Date();

        const aDaysLong = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const aDaysShort = ['Sn','Mn','Ts','Wd','Th','Fr','Sat'];

        const aMonthLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const aMonthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

        const sDayNumber = String(dCurrentDate.getDate());
        const sMonthNumber = String(dCurrentDate.getMonth() + 1);
        const sYearNumber = dCurrentDate.getFullYear();

        let sTextDay = bIsMobile ? aDaysShort[dCurrentDate.getDay()] : aDaysLong[dCurrentDate.getDay()]
        let sMonth = bIsMobile ? aMonthShort[sMonthNumber - 1] : aMonthLong[sMonthNumber - 1];

        return sTextDay + ', ' + sDayNumber + ' ' + sMonth + ' ' + sYearNumber;
    };

    /**
     * Render Header html
     * @returns {html} - header html structure
     */
    function renderHeader () {
        let currentDate = getCurrentDate(); 
        let header =
            `<header class="header js-header">
                <div class="header__title">
                    <h1>Jaegar Resto</h1>
                    <p>${currentDate}</p>
                </div>
                <form action="#" class="header__searchfield">
                    <input type="search" value="" placeholder="Search" class="search-input">
                    <button type="submit" class="search-button js-searchBtn">
                        <svg width="20px" hight="20px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 56.966 56.966" fill="#fff" xml:space="preserve">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                                s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                                c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                                s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                    </button>
                </form>
            </header>`

        return header;
    };

    /**
     * Change Client Width handler
     */
    function onChangeClientWidth () {
        let iScreenWidth = window.screen.width;
        let bIsMobile = iScreenWidth < 600;

        if (bIsMobile) {
            mobileHandler();
        }
    };

    /**
     * Function for handle mobile screen
     */
    function mobileHandler () {
        const searchBtn = header.querySelector(".js-searchBtn");

        searchBtn.addEventListener("click", () => {
            const searchField = header.querySelector(".header__searchfield");
            searchField.classList.toggle("header__searchfield--open")
        })
    };
});