define([], function(){
	var controller = function(scope, aboutFactory, titles){

		var bindProfileData = function(data){
				scope.items = data;
		};

		scope.title = titles.profileTitle;

		scope.getKeertiProfile = function(){
			aboutFactory.getProfile('keerti').then(bindProfileData);
		};

		scope.getNgHydProfile = function(){
			aboutFactory.getProfile('ngHyd').then(bindProfileData);
		};

		scope.getKeertiProfile();


	};

	controller.$inject = ["$scope", "aboutFactory", "titles"];
	return controller;
});