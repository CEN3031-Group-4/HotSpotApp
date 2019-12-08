var Request = require("request");
const dbNuclideOptions = [], dblungClassOptions = [], dbicrpOptions = [];

Request.get("http://localhost:5000/api/nuclides", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        const dbNuclides = JSON.parse(body);

        //console.log(dbNuclides[0]['Nuclide'])
        dbNuclides.forEach(element => {
            dbNuclideOptions.push({label:element['Nuclide'],value:element['Nuclide'],'Half-life':element['Half-life']})
        });
        //console.log(dbNuclideOptions);
    });

    Request.get("http://localhost:5000/api/nuclides/lungClass"/*"https://hotspot-dkp-g4.herokuapp.com/api/nuclides/lungClass"*/, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        const dblungClass = JSON.parse(body);

        //console.log(dbNuclides[0]['Nuclide'])
        dblungClass.forEach(element => {
            dblungClassOptions.push({Nuclide:element['Nuclide'],
                                    Age:element['Age'],
                                    lungClass:element['LungClass'],
                                    Dose:element['Dose']
                                })
        });
        //console.log(dblungClassOptions);
    });

    Request.get("http://localhost:5000/api/nuclides/icrp"/*"https://hotspot-dkp-g4.herokuapp.com/api/nuclides/icrp"*/, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        const dbicrp = JSON.parse(body);

        //console.log(dbNuclides[0]['Nuclide'])
        dbicrp.forEach(element => {
            dbicrpOptions.push({Nuclide:element['Nuclide'],
                                    ICRP:element['ICRP']
                                })
        });
        //console.log(dbicrpOptions);
    });

const nuclides = dbNuclideOptions,
      lungClass = dblungClassOptions,
      icrp = dbicrpOptions;
// const lungClass = {'H-3':{
//                     'F':{
//                             dose:[{label:'100',value:'0.00000000002629'},
//                                 {label:'365',value:'F-365'},
//                                 {label:'1825',value:'F-1825'},
//                                 {label:'3650',value:'F-3650'}
//                             ]
//                         },
//                     'M':{
//                         dose:[{label:'100',value:'0.00000000002629'},
//                                 {label:'365',value:'M-365'},
//                                 {label:'1825',value:'M-1825'},
//                                 {label:'3650',value:'M-3650'}
//                             ]
//                     }
//                 }};


export {nuclides, lungClass, icrp}