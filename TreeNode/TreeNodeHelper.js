({
	createIcon: function(component, event, iconType) {
		component.set("v.iconCode",[]);
        $A.createComponent(
            "lightning:icon",
            {
                "iconName": iconType,
                "size": "small"
            },
            function(newIcon, status, errorMessage){

                if (status === "SUCCESS") {
                    var iconContainer = component.get("v.iconCode");
                    iconContainer.push(newIcon);
                    component.set("v.iconCode", iconContainer);
                }
                else if (status === "INCOMPLETE") {
                    console.log("No response from server or client is offline.")
                    // Show offline error
                }
                    else if (status === "ERROR") {
                        console.log("Error: " + errorMessage);
                        // Show error message
                    }
            }
        );
    }
})