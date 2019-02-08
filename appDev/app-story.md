# 2018.11.18

``` js
    var app = { name:'app', is:{}, do:()=>true };

    //*/// noble blastula ʕ⊙ᴥ⊙ʔ
    for ( nucleod in dna ) this[nucleod] = dna[nucleod];
    this.name = 'status';
    this.is   =  this.is   || {};
    this.do   =  this.do   || function(dna){return this};
    //*///
```

## неорганические block commenters

//*///
{*///}


# 2018.11.19

С появлением простейшей модели DNA,
РНК мир сменился ДНК/РНК миром.
Это упростило благородную бластулу.
``` js
         // ʕ⊙ᴥ⊙ʔ
       dna = dna||DNA;
      for(favor in dna)
  this[favor] = dna[favor];
```

Появилась FNA - базовая переработка РНК в отрицание.
``` js
    var FNA = (rna)=>false;
```

# 2019.1.28

Благородная бластула уменьшилась до одной строчки.
``` js
    dnaMix(this,o) // ← ʕ⊙ᴥ⊙ʔ Noble Blastula
```
Вся благородность ушла в самостоятельную чистую функцию.
``` js
    function dnaMix(target,injection) {
        Object.assign(
            typeof(target)!=='object' ? {} : target,
            {// [1] Model DNA
                name: 'transcription',
                do: (rna)=>false
            },
            target, // [2] target itself
            typeof(injection)==='string' ? { name: injection } : // [3] simple name
            typeof(injection)!=='object' ? {} : injection        // [4] full injection
        )
        return target;
    }
```

Лорды и королевы получают независимость от королевского имени.
У короля пропала память и отчётность.