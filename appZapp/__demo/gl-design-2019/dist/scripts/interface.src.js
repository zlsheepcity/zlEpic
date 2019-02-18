// Interface events
// 2019.2.8


function InterfaceEventsInitialization() {

    /* header is not sticky
    elCollection['stickyPageHeader'] = $('.js-stickyPageHeader')[0];
    elCollection['stickyPageHeader.Waypoint'] = new Waypoint.Sticky({
        element: elCollection['stickyPageHeader'],
        offset: -1
    });
    */

    /* Helper: CloseAllBars */
    function interface_SidebarOperator(thisBarId) {
        var elWrap  = document.getElementsByTagName('html')[0];
        var allBars = document.querySelectorAll('.sidebar');
        var thisBar = document.getElementById(thisBarId);

        var currentStateIsOpen = thisBar && thisBar.classList && thisBar.classList.contains('is-active');

        allBars.forEach(function (el) {
            if (el.classList && el.classList.remove)
                el.classList.remove('is-active');
        });

        currentStateIsOpen = thisBar && !currentStateIsOpen;

        if ( currentStateIsOpen && thisBar && thisBar.classList && thisBar.classList.add )
            thisBar.classList.add('is-active')

        if ( elWrap && elWrap.classList )
            if ( currentStateIsOpen ) elWrap.classList.add('has-shadow-overlay')
            else                      elWrap.classList.remove('has-shadow-overlay')

        return currentStateIsOpen;
    }

    /* ContactBar */
    $('.js-contact-bar-trigger').on('click', interface_ContactBarOpener);
    function interface_ContactBarOpener(e) {
        interface_SidebarOperator('InterfaceContactBar');
        e.preventDefault();
        return false;
    }

    /* MenuBar */
    $('.js-menu-bar-trigger').on('click', interface_MenuBarOpener);
    function interface_MenuBarOpener(e) {
        interface_SidebarOperator('InterfaceMenuBar');
        e.preventDefault();
        return false;
    }

    /* CloseAllBars */
    $('.js-screen-shadow-overlay').on('click', interface_AllBarsCloser);
    function interface_AllBarsCloser(e) {
        interface_SidebarOperator();
        e.preventDefault();
        return false;
    }
    


};
