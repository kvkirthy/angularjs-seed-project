require.config({
	paths:{
		"ui-router": "/bower_components/ui-router/release/angular-ui-router.min",
		"angular": "/bower_components/angular/angular.min",
		"bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim:{
		"ui-router":{
			deps: ["angular"]
		}
	}
});

// My main module. This is where everything starts
require(['firstController', 'techStackController', 'aboutController', 'config','ui-router', "bootstrap"], function(firstController, techStackController, aboutController, config){

	var seedMainModule = angular.module("seedMain", ["ui.router"])
	.config(config)
	.controller('firstController', firstController)
	.controller('techStackController', techStackController)
	.controller('aboutController', aboutController);

	// Manual bootstrap required in the current model with requirejs
	angular.element(document).ready(function(){
		angular.bootstrap(document, ['seedMain']);
		console.log('AngularJS bootstrap complete...');
	});

	return seedMainModule;

});