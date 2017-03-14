var stateObject = {
    "Arts": {
        "Monterey": ["Salinas", "Gonzales"],
        "Alameda": ["Berkeley"]
    },
    "ASTR": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "COGS": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "BCBP": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "COMM": {
        "Douglas": ["Roseburg", "Winston"],
    },

    "BIOL": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ECON": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "CHEM": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "IHSS": {
        "Douglas": ["Roseburg", "Winston"],
    },

    "CSCI": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "LANG": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ERTH": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "LITR": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "IENV": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "PHIL": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ISCI": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "PSYC": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ITWS": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "STSH": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "MATH": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "STSS": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "MATP": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "WRIT": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "PHYS": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "BMED": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "CHME": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "CIVL": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ECSE": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ENGR": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ENVE": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "EPOW": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ESCI": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "IYSE": {
        "Douglas": ["Roseburg", "Winston"],
    },

    "MANE": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "MTLE": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ARCH": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "MGMT": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "ADMN": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "LGHT": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "USAF": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "USAR": {
        "Douglas": ["Roseburg", "Winston"],
    },
    "USNA": {
        "Douglas": ["Roseburg", "Winston"],
    }
    

}
window.onload = function () {
    var stateSel = document.getElementById("stateSel"),
        countySel = document.getElementById("countySel"),
        citySel = document.getElementById("citySel");
    for (var state in stateObject) {
        stateSel.options[stateSel.options.length] = new Option(state, state);
    }
    stateSel.onchange = function () {
        countySel.length = 1; // remove all options bar first
        citySel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          countySel.options[0].text = "Please select Department"
          citySel.options[0].text = "Please select Course"
          return; // done   
        }  
        countySel.options[0].text = "Please select Section"
        for (var county in stateObject[this.value]) {
            countySel.options[countySel.options.length] = new Option(county, county);
        }
        if (countySel.options.length==2) {
          countySel.selectedIndex=1;
          countySel.onchange();
        }  
        
    }
    stateSel.onchange(); // reset in case page is reloaded
    countySel.onchange = function () {
        citySel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          citySel.options[0].text = "Please select county first"
          return; // done   
        }  
        citySel.options[0].text = "Please select city"
        
        var cities = stateObject[stateSel.value][this.value];
        for (var i = 0; i < cities.length; i++) {
            citySel.options[citySel.options.length] = new Option(cities[i], cities[i]);
        }
        if (citySel.options.length==2) {
          citySel.selectedIndex=1;
          citySel.onchange();
        }  
        
    }
}