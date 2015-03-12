define([],function(){
	var configFunction = function(stateProvider, urlRouterProvider){
		stateProvider

		.state('home', {
			url: "/home",
			templateUrl: "/app/templates/home.html",
			controller: "firstController"
		})

		.state('techStack', {
			url:"/techStack",
			templateUrl: "/app/templates/tech-stack.html",
			controller: "techStackController"
		})

		.state('about', {
			url:"/about",
			templateUrl: "/app/templates/about.html",
			controller: "aboutController"
		});
		urlRouterProvider.otherwise("/home");
	};
	configFunction.$inject = ["$stateProvider", "$urlRouterProvider"];

	return configFunction;
});