define([], function(){
	var controller = function(scope){
		scope.welcomeMessage = "Welcome, Keerti's AngularJS Seed Project";
	};

	controller.$inject = ['$scope'];

	return controller;
});