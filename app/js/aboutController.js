define([], function(){
	var controller = function(scope, aboutFactory, titles){

		var bindProfileData = function(data){
				scope.items = data;
		};

		scope.title = titles.profileTitle;

		scope.getKeertiProfile = function(){
			aboutFactory.getProfile('keerti').then(bindProfileData);
			scope.img = '/img/vencki.jpg';
			scope.profile = {
				name: 'V Keerti Kotaru',
				hobbies: 'Photography & Cricket enthusiast',
				company: 'CDK Global',
				tagLine: 'Good artists copy, great artists steal - by some artist.'
			};
		};

		scope.getNgHydProfile = function(){
			aboutFactory.getProfile('ngHyd').then(bindProfileData);
			scope.img = '/img/ngHyderabad.jpg';

			scope.profile = {
				name: 'ngHyderabad meetup group',
				hobbies: 'Angular JS Meetup group at Hyderabad',
				company: 'Sponsored by CDK Global, Thought Works and Fission Labs',
				tagLine: 'Discussing the Superheroic JavaScript framework.'
			};
		};

		scope.getKeertiProfile();


	};

	controller.$inject = ["$scope", "aboutFactory", "titles"];
	return controller;
});