define([ "angular-sanitize", 
 "showdown", 
 "markdown"], function(){
	 	// You might or might not need this if you are building a project based on this seed.
 	// Hence making it a separate module. easy to add or get rid of.
 	angular.module("markdownModule", ['ngSanitize', 'btford.markdown']);
})