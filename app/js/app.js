require.config({
	paths:{
		"ui-router": "/bower_components/ui-router/release/angular-ui-router.min",
		"angular": "/bower_components/angular/angular.min"
	},
	shim:{
		"ui-router":{
			deps: ["angular"]
		}
	}
});

require(['firstController', 'config','ui-router'], function(firstController, config){

	var seedMainModule = angular.module("seedMain", ["ui.router"])
	.config(config)
	.controller('firstController', firstController);

	angular.element(document).ready(function(){
		angular.bootstrap(document, ['seedMain']);
		console.log('AngularJS bootstrap complete...');
	});

	return seedMainModule;

});