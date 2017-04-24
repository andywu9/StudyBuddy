$(function() {
	if($('body').is('.createPlanPage')) {

		var plans = gon.planDict;
		//populate dropdown with plans
		var planList = document.getElementById("planSelect")
		for (var title in plans) {
			 planList.options[planList.options.length] = new Option(title, title);
		}

        var classes = gon.classDict
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





        var addCtoPBtn = document.getElementById("addCToP");

        addCtoPBtn.onclick = addToPlan

        function addToPlan() {
            var planTable = document.getElementById("planTable");

            var newRow = document.createElement('div');

            newRow.className = 'tableRow'

            classList = document.getElementById("newClassSelect");
            var inputBox = document.getElementById('newDurationInput');
            newRow.innerHTML = '<div class="planClass cell">' + classList.options[classList.selectedIndex].text + '</div><div class="planDur cell">' + inputBox.value + '</div>';


            planTable.append(newRow);
        }
	}
});