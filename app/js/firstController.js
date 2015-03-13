define([], function(){
	var controller = function(scope, titles){
		scope.welcomeMessage = titles.homeTitle;
	};

	controller.$inject = ['$scope', 'titles'];

	return controller;
});