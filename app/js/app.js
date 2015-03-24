require.config({
	paths:{
		"ui-router": "/bower_components/ui-router/release/angular-ui-router.min",
		"ngResource": "/bower_components/angular-resource/angular-resource.min",
		"angular": "/bower_components/angular/angular.min",
		"bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min",
		"angular-sanitize": "/bower_components/angular-sanitize/angular-sanitize.min",
		"showdown": "/bower_components/showdown/compressed/Showdown.min",
		"markdown": "/bower_components/angular-markdown-directive/markdown"
	},
	shim:{
		"ui-router":{
			deps: ["angular"]
		},
		"ngResource":{
			deps: ["angular"]
		}
	}
});

// My main module. This is where everything starts
define(['firstController',
 'techStackController', 
 'aboutController', 
 'techStackService',
 'aboutService',
 'titlesValue',
 'profileDirective',
 'config',
 'templateMain',
 'templates',
 'ui-router', 
 'ngResource',
 'bootstrap',
 'markdownModule'], 

 function(firstController, techStackController, aboutController,techStackService, aboutFactory, titlesValue, profileDirective , config){


	var seedMainModule = angular.module("seedMain", ["ui.router", "templateMain", "markdownModule", "ngResource"])
	.config(config)
	.controller('firstController', firstController)
	.directive('profileDirective', profileDirective)
	.controller('techStackController', techStackController)
	.controller('aboutController', aboutController)
	.service('techStackService', techStackService)
	.factory('aboutFactory', aboutFactory)
	.value('titles', titlesValue);
	

	// Manual bootstrap required in the current model with requirejs
	angular.element(document).ready(function(){
		angular.bootstrap(document, ['seedMain']);
		console.log('AngularJS bootstrap complete...');
	});

	return seedMainModule;

});