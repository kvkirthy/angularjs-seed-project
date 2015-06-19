define([], function(){
	var service = function(http, q){

		this.getTechStackItems = function(){
			var deferred = q.defer();

			http.get('/api/techstack').success(function(response){
				deferred.resolve(response);
			});

			return deferred.promise;

		};

		
	};

	service.$inject = ['$http', '$q'];
	return service;
})