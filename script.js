document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".js-nav");
    const mainContent = document.querySelector(".js-main");

    renderMainContent();

    nav.addEventListener("click", (e) => {
        if (e.target && e.target.parentNode.nodeName == "BUTTON") {
            const activeTab = e.target.parentNode;
            const tabAction = activeTab.dataset.action;

            changeTabState(activeTab);
            renderMainContent(tabAction);
        }
    });

    /**
     * Change state of tabs
     * @param {Object} activeTab - Active tab object
     */
    function changeTabState (activeTab) {
        const navList = nav.querySelectorAll(".nav__item");

        navList.forEach( item => {
            item.classList.remove("is__active");
        });

        activeTab.parentNode.classList.add("is__active");
    };

    /**
     * Inserts content into a main content block
     * @param {String} tabAction - Action value of the current tab
     */
    function renderMainContent (tabAction = "home") {
        mainContent.innerHTML = tabAction;
    };
});