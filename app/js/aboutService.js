define([], function(){


	var factory = function(resource, q){
		var profileUrl = '/api/profile/:name';
		var profile = resource(profileUrl);
		return {
			getProfile: function(pName){
				var deferred = q.defer();
				profile.get({name:pName}, function(data){
					deferred.resolve(data.items);
				});
				return deferred.promise;
			}
		};
	};

	factory.$inject = ["$resource", "$q"];
	return factory;

});