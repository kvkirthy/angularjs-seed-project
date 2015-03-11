define([], function(){
	var controller = function(scope){
		scope.welcomeMessage = "Welcome, VenCKi's AngularJS Seed Project";
	};

	controller.$inject = ['$scope'];

	return controller;
});