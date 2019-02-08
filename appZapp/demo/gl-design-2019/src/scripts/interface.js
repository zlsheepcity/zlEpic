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

    /* ContactBar */
    $('.js-contact-bar-trigger').on('click', interface_ContactBarOpener);
    function interface_ContactBarOpener(e) {
        var el = document.getElementsByTagName('html');
        if (!el[0] || !el[0].classList || !el[0].classList.toggle) return true;
        el[0].classList.toggle('has-active-sidebar');
        e.preventDefault();
        return false;
    }

};
