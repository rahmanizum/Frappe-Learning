// Copyright (c) 2024, Mufil and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
    refresh(frm) {
        if (frm.doc.status !== "Accepted") {
            frm.add_custom_button("Accept", () => {
                frm.set_value("status", "Accepted");
                frm.save();
            })
        }
        if(frm.doc.status !== "Rejected"){
            frm.add_custom_button("Reject", () => {
                frm.set_value("status", "Rejected");
                frm.save();
            })
        }

    },
});
