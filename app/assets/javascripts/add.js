$(function() {
  if($('body').is('.addclass')) {
  	// Stores all the courses into a dictionary
    var dict = gon.dict;
  	var stateObject = dict;
    var courseSel = document.getElementById("courseSel"), sectionSel = document.getElementById("sectionSel"), finalSel = document.getElementById("finalSel");
    // Loops through all the department codes and populates the department code drop-down
    for (var state in stateObject) {
        courseSel.options[courseSel.options.length] = new Option(state, state);
    }
    // When the department code drop-down gets populated, it triggers this function
    courseSel.onchange = function () {
      sectionSel.length = 1; // remove all options bar first
      finalSel.length = 1; // remove all options bar first
      if (this.selectedIndex < 1) {
        sectionSel.options[0].text = "Please select Department";
        finalSel.options[0].text = "Please select Course";
        return; // done   
      }  
      sectionSel.options[0].text = "Please select Section";
      // Loops through all the courses available according to the chosen department code
      // and populates the courses drop-down
      for (var section in stateObject[this.value]) {
          sectionSel.options[sectionSel.options.length] = new Option(section, section);
      }
      if (sectionSel.options.length==2) {
        sectionSel.selectedIndex=1;
        sectionSel.onchange();
      }  
    }
    courseSel.onchange(); // reset in case page is reloaded
    // When the courses drop-down gets populated, it triggers this function
    sectionSel.onchange = function () {
        finalSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          finalSel.options[0].text = "Please select course first";
          return; // done   
        }  
        finalSel.options[0].text = "Please select Section";
        
        var cities = stateObject[courseSel.value][this.value];
        // Loops through all the sections available according to the chosen course
        // and populates the section drop-down
        for (var i = 0; i < cities.length; i++) {
            finalSel.options[finalSel.options.length] = new Option(cities[i], cities[i]);
        }
        if (finalSel.options.length==2) {
          finalSel.selectedIndex=1;
          finalSel.onchange();
        }  
    }
  }
});
