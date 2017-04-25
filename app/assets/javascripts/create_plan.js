$(function() {
	if($('body').is('.createPlanPage')) {

        //populate class dropdown for NEW PLAN
        var classes = gon.classDict;
        var classList = document.getElementById("newClassSelect");
        for (var c in classes) {
             classList.options[classList.options.length] = new Option(c, c);
        }

		//drop down reveals html
		$(document).on('change', '#newOrEditPlan', function() {
            var planDrop = document.getElementById("newOrEditPlan");
            $("#newOrEditPlan option").each(function() {
                var hideElem = document.getElementById(this.value);
                if(planDrop.options[planDrop.selectedIndex].value == hideElem.id) {
                    $(hideElem).removeClass('hidden');
                }
                else {
                    $(hideElem).addClass('hidden');
                }
            });
        });
        $(document).ready(function(){
            $('.planSelect').trigger('change');
        });


        //Fills plan drop down for EDIT PLAN
        var plans = gon.planDict;
        //populate dropdown with plans
        var planList = document.getElementById("planSelect")
        for (var title in plans) {
             planList.options[planList.options.length] = new Option(title, title);
        }

        planList.onchange = popClassList

        function popClassList() {
            var planData = gon.planDict;
            var classes_in_plan = Object.keys(planData);

            var editClassList = document.getElementById("editClassSelect");
            for(var c in classes_in_plan) {
                editClassList.options[editClassList.options.length] = new Option(c, c);
            }
        }


        var addCtoPBtn = document.getElementById("addCToP");

        addCtoPBtn.onclick = addToPlan

        function addToPlan() {
            if ($("#planTable > div").length >20) {
                alert("Cannot create plan of size > 10");
                return;
            }
            var planTable = document.getElementById("planTable");

            var newRow = document.createElement('div');

            newRow.className = 'tableRow'

            if(classList.options[classList.selectedIndex].text == "Select Class") {
                alert("Please pick a valid class!");
                return;
            }

            var inputBox = document.getElementById('newDurationInput');
            if(inputBox == undefined || inputBox.value <= 0) {
                alert("Please give a duration that is larger than 0!");
                return;
            }

            classList = document.getElementById("newClassSelect");
            newRow.innerHTML = '<div class="planClass cell"><p class="tableText">' + classList.options[classList.selectedIndex].text + '</p></div><div class="planDur cell"><p class="tableText">' + inputBox.value + '</p></div>';


            planTable.append(newRow);
        }
	}
});