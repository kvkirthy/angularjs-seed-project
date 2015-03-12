require(['firstController'], function(firstController){

	return angular.module("seedMain", [])
	.controller('firstController', firstController);

});