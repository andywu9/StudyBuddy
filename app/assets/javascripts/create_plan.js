$(function() {
	if($('body').is('.createPlanPage')) {

		var plans = gon.keys;
		//populate dropdown with plans
		planList = document.getElementById("editPlan")
		for (var title in plans) {
			 planList.options[planList.options.length] = new Option(title, title);
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
	}
});