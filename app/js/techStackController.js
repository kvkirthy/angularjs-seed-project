define([], function(){
	var controller = function(scope, tss){
		scope.title = "Tech Stack";

		tss.getTechStackItems().then(function(res){
			console.log(res);
		});

	};

	controller.$inject = ["$scope", "techStackService"];
	return controller;
});