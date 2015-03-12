require(['firstController'], function(firstController){

	var seedMainModule = angular.module("seedMain", [])
	.controller('firstController', firstController);

	angular.element(document).ready(function(){
		debugger;
		angular.bootstrap(document, ['seedMain']);
		console.log('AngularJS bootstrap complete...');
	});

	return seedMainModule;

});