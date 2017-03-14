var stateObject = {
    "ARTS": {
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
        "General Psychology": ["01", "02"],
        "Critical Thinking": ["01"],
        "Introduction to Cognitive Science": ["01"],
        "Human Factors in Design": ["01", "02"],
        "Social Psychology": ["01"],
        "Positive Psychology": ["01"],
        "Motivation and Performance": ["01"],
        "Professional Development II: Leadership Theories": ["01", "02"],
        "Industrial and Organizational Psychology": ["01"],
        "Research Methods and Statistics II": ["01"],
        "Behavorial Neuroscience": ["01"],
        "Introduction to Cognitive Neuroscience": ["01"],
        "Cognitive Psychology": ["01"],
        "Personality": ["01"],
        "Learning": ["01"],
        "Drugs, Society, and Behavior": ["01"],
        "Cognitive Modeling": ["01"],
        "Stress and the Brain": ["01"],
        "Abnormal Psychology": ["01"],
        "Forensic Psychology": ["01"],
        "Sports Psychology Seminar": ["01"],
        "Readings in Psychology": ["00"],
        "The Psych Of Reward": ["01"],
        "Undergraduate Thesis": ["03", "17"]
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
        "Writing for Classroom and Career": ["01"],
        "Creative Writing: Short Story": ["01"],
        "Creative Non-Fiction": ["01"],
        "Creative Writing: The Short Story": ["01"],
        "Speech Communication": ["01", "02"]
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
          citySel.options[0].text = "Please select course first"
          return; // done   
        }  
        citySel.options[0].text = "Please select Section"
        
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
