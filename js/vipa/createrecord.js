document.addEventListener("DOMContentLoaded", () => {
    
    //lead Type UI manipulation
    document.getElementById("pmsLeadType").addEventListener("change", function () {
        const pmsElements = [
            "base-groupinfo",
            "mortgage-groupinfo",
            "policycard",
            "splitcard",
            "appointmentcard",
            "submitcard"
        ];

        // Hide all pmsElements first
        pmsElements.forEach(id => {
            const element = document.getElementById(id);
            if (element && !element.classList.contains("d-none")) {
                element.classList.add("d-none");
            }
        });
        

        // Get the selected value
        const leadtypeValue = this.value;

        // Define groups that should be shown for each selection
        const showGroups = {
            general: ["base-groupinfo", "policycard", "splitcard", "appointmentcard", "submitcard"],
            finalexpense: ["base-groupinfo", "policycard", "splitcard", "appointmentcard", "submitcard"],
            other: ["base-groupinfo", "policycard", "splitcard", "appointmentcard", "submitcard"],
            mortgage: ["mortgage-groupinfo", "policycard", "splitcard", "appointmentcard", "submitcard"],
            iul: ["policycard", "splitcard", "appointmentcard", "submitcard"],
            annuity: ["policycard", "splitcard", "appointmentcard", "submitcard"],
            annualreview: ["splitcard", "appointmentcard", "submitcard"]
        };

        // Show only the relevant pmsElements
        showGroups[leadtypeValue]?.forEach(id => document.getElementById(id)?.classList.remove("d-none"));
    });

    //split UI manipulation
    document.getElementById("pmsAgentsplitconfirm").addEventListener("change", function(){
        const splitElement = document.getElementById("split-groupinfo");
        if(!splitElement.classList.contains("d-none")){
            splitElement.classList.add("d-none");
        }

        const splitconfirmValue = this.value;
        if(splitconfirmValue === "yes"){
            splitElement.classList.remove("d-none");
        }
    });
});
