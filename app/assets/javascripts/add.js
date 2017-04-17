$(function() {
  if($('body').is('.addclass')) {
  	var dict = gon.dict;

  	var stateObject = dict;
    var courseSel = document.getElementById("courseSel"), sectionSel = document.getElementById("sectionSel"), finalSel = document.getElementById("finalSel");
    for (var state in stateObject) {
        courseSel.options[courseSel.options.length] = new Option(state, state);
    }
    courseSel.onchange = function () {
      sectionSel.length = 1; // remove all options bar first
      finalSel.length = 1; // remove all options bar first
      if (this.selectedIndex < 1) {
        sectionSel.options[0].text = "Please select Department";
        finalSel.options[0].text = "Please select Course";
        return; // done   
      }  
      sectionSel.options[0].text = "Please select Section";
      for (var section in stateObject[this.value]) {
          sectionSel.options[sectionSel.options.length] = new Option(section, section);
      }
      if (sectionSel.options.length==2) {
        sectionSel.selectedIndex=1;
        sectionSel.onchange();
      }  
    }
    courseSel.onchange(); // reset in case page is reloaded
    sectionSel.onchange = function () {
        finalSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) {
          finalSel.options[0].text = "Please select course first";
          return; // done   
        }  
        finalSel.options[0].text = "Please select Section";
        
        var cities = stateObject[courseSel.value][this.value];
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
