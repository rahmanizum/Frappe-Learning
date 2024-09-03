// Copyright (c) 2024, Mufil and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
    refresh(frm) {
        
    },
	rate(frm) {
        frm.trigger('update_total_amount')
	},
    
    update_total_amount(frm) {
        total_distance = 0;
        for(let item of frm.doc.items){
            total_distance += item.distance;
        }
        frm.set_value("total_amount", total_distance*frm.doc.rate)
    }
});

frappe.ui.form.on('Ride Booking Item', {
	refresh(frm) {
		// your code here
	},
    distance(frm) { 
        frm.trigger('update_total_amount')
    },
    items_remove(frm) {
        frm.trigger('update_total_amount')
    }

})


