define([], function(){

	return function(){
		return {
			templateUrl: "../app/templates/profile.html",		
			scope:{
				imgUrl: '@',
				profile: '='
			},
			link: function(scope, elm, attr){
				console.log(scope.imgUrl);
			}
		};
	};	
})