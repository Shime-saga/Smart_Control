sap.ui.define([
	"sap/ui/core/mvc/Controller" 
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.smartControls.SmartForm", {
		onInit: function() {
			this.getView().bindElement("/Products('4711')");
		}
	});

});