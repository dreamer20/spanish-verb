function conjugateVerb(word) {
  var stem = word.slice(0,-2),
      ending = word.slice(-2),
      endings = {
        indicative: {
          present: {
            ar: ['o', 'as', 'a', 'amos', 'áis', 'an'],
            er: ['o', 'es', 'e', 'emos', 'éis', 'en'],
            ir: ['o', 'es', 'e', 'imos', 'ís', 'en']
          },
          preterite: {
            ar: ['é', 'aste', 'ó', 'amos', 'asteis', 'aron'],
            er: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron'],
            ir: ['í', 'iste', 'ió', 'imos', 'isteis', 'ieron']
          },
          imperfect: {
            ar: ['aba', 'abas', 'aba', 'ábamos', 'abais', 'aban'],
            er_ir: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían']
          },
          conditional: ['ía', 'ías', 'ía', 'íamos', 'íais', 'ían'],
          future: ['é', 'ás', 'á', 'emos', 'éis', 'án']
        },
        subjuntive: {
          present: {
            ar: ['e', 'es', 'e', 'emos', 'éis', 'en'],
            er_ir: ['a', 'as', 'a', 'amos', 'áis', 'an']
          },
          imperfect_1: ['ra', 'ras', 'ra', 'ramos', 'rais', 'ran'],
          imperfect_2: ['se', 'ses', 'se', 'semos', 'seis', 'sen'],
          future: ['re', 'res', 're', 'remos', 'reis', 'ren']
        },
        imperative: {
          affirmative: {
            ar: [null, 'a', 'e', 'emos', 'ad', 'en'],
            er: [null, 'e', 'a', 'amos', 'ed', 'an'],
            ir: [null, 'e', 'a', 'amos', 'id', 'an']
          },
          negative: {
            ar: [null, 'es', 'e', 'emos', 'éis', 'en'],
            er_ir: [null, 'as', 'a', 'amos', 'áis', 'an']
          }
        }
      }
var conjugations = {
  indicative: {
    present: function(stem, ending) {
      var presentTenseArray;
      switch (ending) {
        case 'ar': presentTenseArray = conjugate(stem, endings.indicative.present.ar);
              break;
        case 'er': presentTenseArray = conjugate(stem, endings.indicative.present.er);
              break;
        case 'ir': presentTenseArray = conjugate(stem, endings.indicative.present.ir);
              break;
      };

      return presentTenseArray; 

      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current) {
          return stem + current;
        });
      };     
    },
    preterite: function(stem, ending) {
      var preteriteTenseArray;
      switch (ending) {
        case 'ar': preteriteTenseArray = conjugate(stem, endings.indicative.preterite.ar);
              break;
        case 'er': preteriteTenseArray = conjugate(stem, endings.indicative.preterite.er);
              break;
        case 'ir': preteriteTenseArray = conjugate(stem, endings.indicative.preterite.ir);
              break;        
      };

      return preteriteTenseArray;

      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current) {
          return stem + current;
        });
      };
    },
    imperfect: function(stem, ending) {
      var imperfectTenseArray;
      switch (ending) {
        case 'ar': imperfectTenseArray = conjugate(stem, endings.indicative.imperfect.ar);
              break;
        case 'er':
        case 'ir': imperfectTenseArray = conjugate(stem, endings.indicative.imperfect.er_ir);
              break;        
      };

      return imperfectTenseArray;

      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current) {
          return stem + current;
        });
      };
    },
    conditional: function(stem, ending) {
      return conjugate(stem + ending, endings.indicative.conditional)
      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current) {
          return stem + current;
        });
      };
    },
    future: function(stem, ending) {
      return conjugate(stem + ending, endings.indicative.future)
      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current) {
          return stem + current;
        });
      };
    }
  },
  subjuntive: {
    present: function(stem, ending) {
      var presentTenseArray;
      switch (ending) {
        case 'ar': presentTenseArray = conjugate(stem, endings.subjuntive.present.ar);
              break;
        case 'er': 
        case 'ir': presentTenseArray = conjugate(stem, endings.subjuntive.present.er_ir);
              break;
      };

      return presentTenseArray; 

      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current) {
          return stem + current;
        });
      };
    },
    imperfect_1: function(stem, ending) {
      var thirdPersonPreteriteForm = conjugations.indicative.preterite(stem, ending)[5];
      var imperfectSubjunctiveStem = thirdPersonPreteriteForm.slice(0, -3);
      return conjugate(imperfectSubjunctiveStem, endings.subjuntive.imperfect_1)
      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current, index) {
          if (index === 3) {
            var lastLetter = stem[stem.length-1];
            switch (lastLetter) {
              case "a": lastLetter = 'á';
                break;
              case "e": lastLetter = 'é';
                break;
            }
            stem = stem.substr(0,stem.length-1) + lastLetter;
          }
          return stem + current;
        });
      };
    },
    imperfect_2: function(stem, ending) {
      var thirdPersonPreteriteForm = conjugations.indicative.preterite(stem, ending)[5];
      var imperfectSubjunctiveStem = thirdPersonPreteriteForm.slice(0, -3);
      return conjugate(imperfectSubjunctiveStem , endings.subjuntive.imperfect_2)
      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current, index) {
          if (index === 3) {
            var lastLetter = stem[stem.length-1];
            switch (lastLetter) {
              case "a": lastLetter = 'á';
                break;
              case "e": lastLetter = 'é';
                break;
            }
            stem = stem.substr(0,stem.length-1) + lastLetter;
          }

          return stem + current;
        });
      };
    },
    future: function(stem, ending) {
      var thirdPersonPreteriteForm = conjugations.indicative.preterite(stem, ending)[5];
      var imperfectSubjunctiveStem = thirdPersonPreteriteForm.slice(0, -3);
      return conjugate(imperfectSubjunctiveStem, endings.subjuntive.future)
      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current, index) {
          if (index === 3) {
            var lastLetter = stem[stem.length-1];
            switch (lastLetter) {
              case "a": lastLetter = 'á';
                break;
              case "e": lastLetter = 'é';
                break;
            }
            stem = stem.substr(0,stem.length-1) + lastLetter;
          }

          return stem + current;
        });
      };      
    }
  },
  imperative: {
    affirmative: function(stem, ending) {
      var affirmativeTenseArray;
      switch (ending) {
        case 'ar': affirmativeTenseArray = conjugate(stem, endings.imperative.affirmative.ar);
              break;
        case 'er': affirmativeTenseArray = conjugate(stem, endings.imperative.affirmative.er);
              break;
        case 'ir': affirmativeTenseArray = conjugate(stem, endings.imperative.affirmative.ir);
              break;        
      };

      return affirmativeTenseArray;

      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current) {
          if (current === null) {
            return '-';
          }
          return stem + current;
        });
      };      
    },
    negative: function(stem, ending) {
      var negativeTenseArray;
      switch (ending) {
        case 'ar': negativeTenseArray = conjugate(stem, endings.imperative.negative.ar);
              break;
        case 'er':
        case 'ir': negativeTenseArray = conjugate(stem, endings.imperative.negative.er_ir);
              break;        
      };

      return negativeTenseArray;

      function conjugate(stem, arrayOfEndings) {
        return arrayOfEndings.map(function(current, index) {
          if (current === null) {
            return '-';
          }
          return 'no ' + stem + current;
        });
      };      
    }
  }
};

var conjugated = {
  indicative: {},
  subjuntive: {},
  imperative: {}
};

for (elem in conjugations.indicative) {
  conjugated.indicative[elem] = conjugations.indicative[elem](stem, ending);
};

for (elem in conjugations.subjuntive) {
  conjugated.subjuntive[elem] = conjugations.subjuntive[elem](stem, ending);
};

for (elem in conjugations.imperative) {
  conjugated.imperative[elem] = conjugations.imperative[elem](stem, ending);
};

return conjugated;
  
}

module.exports = conjugateVerb;