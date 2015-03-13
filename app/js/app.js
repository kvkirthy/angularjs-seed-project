require.config({
	paths:{
		"ui-router": "/bower_components/ui-router/release/angular-ui-router.min",
		"angular": "/bower_components/angular/angular.min",
		"bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min",
		"angular-sanitize": "/bower_components/angular-sanitize/angular-sanitize.min",
		"showdown": "/bower_components/showdown/compressed/Showdown.min",
		"markdown": "/bower_components/angular-markdown-directive/markdown"
	},
	shim:{
		"ui-router":{
			deps: ["angular"]
		}
	}
});

// My main module. This is where everything starts
define(['firstController',
 'techStackController', 
 'aboutController', 
 'techStackService',
 'config',
 'templateMain',
 'templates',
 'ui-router', 
 'bootstrap',
 "markdownModule"], 

 function(firstController, techStackController, aboutController,techStackService, config){


	var seedMainModule = angular.module("seedMain", ["ui.router", "templateMain", "markdownModule"])
	.config(config)
	.controller('firstController', firstController)
	.controller('techStackController', techStackController)
	.controller('aboutController', aboutController)
	.service('techStackService', techStackService);

	// Manual bootstrap required in the current model with requirejs
	angular.element(document).ready(function(){
		angular.bootstrap(document, ['seedMain']);
		console.log('AngularJS bootstrap complete...');
	});

	return seedMainModule;

});