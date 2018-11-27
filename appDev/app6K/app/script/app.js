// ------------------------ Description app6002
/*
    Noble objects
    - are objects
    - has name and role
    - has is.something
    - has do({something})
    - code blastula ʕ⊙ᴥ⊙ʔ

    List of noble objects
    - router as king
    - libs as lord
    - templates as queen
    - models with CAPSNAMES

*/ // last review: 2018.11.27


// ------------------------ Initialization

function DNA__AppModel(name) {
    this.name = name;
    this.is   = this;
    this.role = false;
    this.do   = (rna)=>false;
}
const DNA = new DNA__AppModel('DNA');

var app = { name:'wild', role:false, do:(rna)=>false, is:{} };
