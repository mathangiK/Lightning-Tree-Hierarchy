({
	doInit: function(component, event, helper){
		helper.createIcon(component, event, "utility:chevronright");
	},
    toggle: function(component, event, helper) {
        component.set("v.expanded", !component.get("v.expanded"));
        var expanded = component.get("v.expanded");
        console.log(expanded);
        if(expanded)
        	helper.createIcon(component, event, "utility:chevrondown");
        else
            helper.createIcon(component, event, "utility:chevronright");
    }
})