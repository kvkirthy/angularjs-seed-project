define([], function(){
	var controller = function(scope, tss, titles){
		scope.title = titles.techStackTitle;

		tss.getTechStackItems().then(function(res){
			scope.items = res;
		});

	};

	controller.$inject = ["$scope", "techStackService", "titles"];
	return controller;
});