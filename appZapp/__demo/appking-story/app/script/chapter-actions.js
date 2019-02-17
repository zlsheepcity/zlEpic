function ActivateChapterActions() {

    if (ChapterAction && ChapterAction.length)
        ChapterAction.map( (f) => f() )

}

    /*
    // app king like to be fixed
    let elScreenAppking = document.getElementById('ScreenAppking')
    let doKingLikeFixedPosition = new Waypoint.Inview({
        element: document.querySelector('.scene-action--welcome-legend'),
        enter: function(direction) {
            if (direction=='up')
                app.mutate({
                    el: elScreenAppking,
                    addClass:'hidden',
                    removeClass:'is-active animated bounceInDown'
                })
        },
        exited: function(direction) {
            if (direction=='down')
                app.mutate({
                    el: elScreenAppking,
                    addClass:'is-active animated bounceInDown',
                    removeClass:'hidden'
                })
        }
    })
    */

    /*
    // dialog: King about fixed position
    let elDialog001KingAboutFixedPosition = document.querySelector('.scene-dialog--about-fixed-position');
    let doDialog001KingAboutFixedPosition = new Waypoint({
        element: elDialog001KingAboutFixedPosition,
        handler: function (direction) {
            app.mutate({
                el: this.element,
                addClass:'animated bounceInLeft',
                removeClass:'is-invisible'
            })
        },
        offset: '80%'
    })
    console.log(elDialog001KingAboutFixedPosition)
    app.mutate({
        el: elDialog001KingAboutFixedPosition,
        addClass:'is-invisible'
    })
    */