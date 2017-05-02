$(function() {
  
    if($('body').is('.removeclass')) {
    	// Stores the user's courses into a disctionary
      var dict = gon.keys;
      var classSel = document.getElementById("classSel");
      // Loop through the user's courses and populate the drop-down
      for (var key in dict) {
          classSel.options[classSel.options.length] = new Option(dict[key], dict[key]);
      }
      classSel.onchange = function () {
        if (this.selectedIndex < 1) {
          //alert("Please select a course to remove");
          return; // done   
        }
      }
      classSel.onchange(); // reset in case page is reloaded
    }
});
