define([],function(){
	var configFunction = function(stateProvider, urlRouterProvider){
		stateProvider.state('home', {
			url: "/home",
			templateUrl: "/app/templates/home.html",
			controller: "firstController"
		})
		urlRouterProvider.otherwise("/home");
	};
	configFunction.$inject = ["$stateProvider", "$urlRouterProvider"];

	return configFunction;
});