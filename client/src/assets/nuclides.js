var Request = require("request");
const dbNuclideOptions = []

Request.get("http://localhost:5000/api/nuclides", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        const dbNuclides = JSON.parse(body);

        //console.log(dbNuclides[0]['Nuclide'])
        dbNuclides.forEach(element => {
            dbNuclideOptions.push({label:element['Nuclide'],value:element['Nuclide']})
        });
        //console.log(dbNuclideOptions);
    });

const nuclides = dbNuclideOptions;    
const lungClass = {'H-3':{
                    'F':{
                            dose:[{label:'100',value:'0.00000000002629'},
                                {label:'365',value:'F-365'},
                                {label:'1825',value:'F-1825'},
                                {label:'3650',value:'F-3650'}
                            ]
                        },
                    'M':{
                        dose:[{label:'100',value:'0.00000000002629'},
                                {label:'365',value:'M-365'},
                                {label:'1825',value:'M-1825'},
                                {label:'3650',value:'M-3650'}
                            ]
                    }
                }};

export {nuclides, lungClass}