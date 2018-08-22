/* ------------------------------------- SVG PATHS */

var pathdance_library = {
    'arrow1': 'M7.4,34.2c-0.8,1.7-8,0-7.3-1.9c0.6-1.9,27.8-1.8,30.5-2.4c9.1-2.1,17.8-4.5,26.5-8.2c2.7-1.2,37.8-12.8,36.6-16.4C92.8,2.8,82.6,6,81.8,3.4s16.4-1.2,18.3-1c-1.2,2.2-4.3,15-7.9,13.1c-1.3-1.8,2.1-6,3-7.5c-10.4,7.3-23.6,12.6-35.7,16.3c-7.8,2.4-17.3,8-25.6,7.8c-4-0.2-23.3,5-25.8,2.1C7.8,33.8,7.6,33.8,7.4,34.2z',
    'arrow2': 'M23.5,20.5c1.2,2.4,11.8,1,14.5,3.2c-6,2.4-15.6-1.9-22.3-3.2c2.1-1.4,16.9-13.8,20.4-9.4c-1.3,3-7.1,2.8-9.1,5.3c11.5,0.9,32.9-6.8,42.8-10.1c3.6-1.2,13.5-1.6,16.6-4.2c5.5-4.7,9.3,5.2,8.8,5.2c1.1,2-15,17.2-18.3,16.4C70.5,17.3,115.5-0.8,72,8.3c-15.6,5.3-32.4,9.2-48.7,12C23.4,20.4,23.6,20.5,23.5,20.5z',
    'arrow3': 'M94.2,20c-0.2,0.7-14,10-15.5,6.3c-1.6-3.9,11.2-1.7,1.6-7.1c-4.4-2.5-8.4-5.8-13-7.8c-11.6-5-18.8-5.9-30.9-4.1c-6,0.9-15.2,3.5-17.1,9.6c-3.9,12.3,7.9,16,14.4,23.4c-6.8,5.2-19.2-15.1-18-21.2c1.3-6.8,19.8-21.4,26-16.4c5.9,2.4,13.9-1.6,20.7,3.8c4.9,3.9,16.9,9.3,23.2,10.5c0.6-2-4.1-4.7-3-6.9c1-1.9,11.1,9.6,11.3,9.6C94.1,19.9,94.3,19.8,94.2,20z'
};

/* ------------------------------------- Dancers */

var pathdance_dancers = [
    {
        name: 'arrow',
        cssid: 'scroll_watcher__path',
        pathloop: [pathdance_library.arrow3, pathdance_library.arrow1],
        duration: 400
    }
];

/* ------------------------------------- Init */

function PathdanceKapellmeister() {
    this.Dancing_Path = function(dna) {
        this.name       = dna && dna.name ? dna.name : '';
        this.cssid      = dna && dna.cssid ? dna.cssid : '';
        this.pathloop   = dna && dna.pathloop ? dna.pathloop : [];
        this.duration   = dna && dna.duration ? dna.duration : 1000;
        this.el         = false;
        this.curva      = false;
        this.startTime  = false;
        this.isReady    = false;
        /* methods */
        this.Activate = function() {
            var d = this;
            if ( !d.cssid || d.pathloop.length<2 ) return this;
            var dna = {
                el: document.getElementById(d.cssid),
                curva: flubber.interpolate(d.pathloop[0],d.pathloop[1]),
                isReady: true
            }
            _.assign( d, dna );
            return this;
        }
        this.Start = function() {
            if ( !this.isReady ) return this;
            if ( !Pathdance ) return this;
            if ( _.indexOf(Pathdance.schedule, this.name) >= 0 ) return this;
            this.isReady = false;
            Pathdance.AddSchedule(this.name);
            console.log('Start '+this.name);
            requestAnimationFrame(PathdanceRequest);
            return this;
        }
        this.Stop = function() {
            this.startTime  = false;
            this.isReady = true;
            Pathdance.RemoveSchedule(this.name);
            return this;
        }
        this.UpdateView = function(t) {
            //this.el.d = this.curva(t);
            this.el.setAttribute("d",this.curva(t));
            //console.log(this.el, this.el.d);
        }
    }
    this.dancers = {};
    this.schedule = [];
    this.AddSchedule = function(name) {
        this.schedule.push(name);
        return this;
    };
    this.RemoveSchedule = function(name) {
        _.pull(this.schedule,name);
        return this;
    };
    this.RegisterDancers = function(dancers) {
        for (var i in dancers) {
            var dna = dancers[i];
            var name = dna.name;
            this.dancers[name] = {
                'name': name,
                'dna': dna,
                'dance': new this.Dancing_Path(dna),
            }
            this.dancers[name].dance.Activate();
        }
    }
    this.DanceRequest = function(requestTime) {
        if (!this.schedule.length) return false;
        for ( var i in this.schedule )
            if ( this.DanceOperator({name:this.schedule[i],requestTime:requestTime}) === 'keep' )
                requestAnimationFrame(PathdanceRequest);
    }
    this.DanceOperator = function(params) {
        var name = params.name;
        var requestTime = params.requestTime;
        var dance = this.dancers[name].dance;
        if (!dance.startTime) dance.startTime = requestTime;
        var passTime = requestTime - dance.startTime;
        var t = dance.duration > 0 ? passTime / dance.duration : 0 ;
        dance.UpdateView(t);
        console.log('DanceOperator: '+t);
        // Ending:
        if (t>=1) {
            dance.Stop();
            return 'done';
        } else {
            return 'keep';
        }
    }
    this.Start = function(name) {
        if( this.dancers[name] )
            this.dancers[name].dance.Start();
        return this;
    }
}
function PathdanceRequest(requestTime) { Pathdance.DanceRequest(requestTime) }
var Pathdance = new PathdanceKapellmeister();





function PathdancePrepare() {
    console.log('zzz');
}
function PathdanceStart() {}

function Dancing_Path(dna) {
    this.pathloop   = dna && dna.pathloop ? dna.pathloop : [] ;
    this.cssid      = dna && dna.cssid ? dna.cssid : '' ;
    this.duration   = dna && dna.duration ? dna.duration : 1000 ;
    this.el         = false;
    this.startTime  = false;
    this.curva      = false;
    /* methods */
    this.Start = function() {
        this.Settle();
        requestAnimationFrame(PathdanceRequest);
        console.log('curva started')
        return this;
    }
    this.Settle = function() {
        if (this.cssid) {
            this.el = document.getElementById(this.cssid);
        }
        if (this.pathloop.length) {
            this.curva = flubber.interpolate(this.pathloop[0], this.pathloop[this.pathloop.length - 1]);
        }
        return this;
    }
    this.Predraw = function(requestTime) {
        console.log('request'+requestTime);
        if (!this.startTime)
             this.startTime = requestTime;
        var passTime = requestTime - this.startTime;
        var t = this.duration > 0 ? ease(passTime / this.duration) : 0 ;
        if (t<=1) requestAnimationFrame(this.Predraw);
    }
    this.Draw = function(requestTime) {
        console.log('request'+requestTime);
        console.log(this);
        if (!this.startTime)
             this.startTime = requestTime;
        var passTime = requestTime - this.startTime;
        var t = this.duration > 0 ? ease(passTime / this.duration) : 0 ;
        var again = this.Draw;
        console.log(this.Draw);
        //if (t<=1) requestAnimationFrame(DancingFunction);
        console.log('thisdraw'+requestTime);
    }
}

/* ------------------------------------- dance */
/*
function PathdanceRequest(requestTime) {
    console.log('PathdanceRequest '+requestTime);
    var target = pathdancers[0];
    if (!target.startTime)
         target.startTime = requestTime;
    var passTime = requestTime - target.startTime;
    var t = target.duration > 0 ? ease(passTime / target.duration) : 0 ;
    if (t<=1) requestAnimationFrame(PathdanceRequest);
}
*/
/*
var pathdancers = [];
pathdancers.push(
    new Dancing_Path()
);
*/
