const q  = console.log
const qt = console.table
q(' ※ ※ ※ ');

function WorldLand (dna,rna) {

           // ʕ⊙ᴥ⊙ʔ
         dna = dna||DNA;
        for(favor in dna)
    this[favor] = dna[favor];

//..tion Data

    this.name         = rna.name || dna.name || this.is.your ;
    this.role = 'land';
    this.evolution = 1;
    this.progress  = 0;
    this.regress   = 0;
    this.do = function Phagocytosis (rna) {
        if (!rna) return this;
        if (rna.konigo) this.progress += rna.konigo;
        if (rna.sorgen) this.regress  += rna.sorgen;
        return this;
    };
    this.q = function (msg) {
        if(msg) q(msg)
        else qt({
            Evolution: {
                evolution: this.evolution,
                progress:  this.progress,
                regress:   this.regress
            }
        });
        return this;
    }

}


let o = new WorldLand(DNA,{name:'singularity'});

// Sorgens
let sorgen = (o)=>o.q('sorgen!').do({sorgen:1});

// konigo
let konigo = (o)=>o.q('Konigo').do({konigo:1});

sorgen(o);sorgen(o);sorgen(o);
konigo(o);

