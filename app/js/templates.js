angular.module('templates-main', ['../app/templates/about.html', '../app/templates/home.html', '../app/templates/profile.html', '../app/templates/tech-stack.html']);

angular.module("../app/templates/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/about.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-12 text-center bg-primary\"><h1>{{title}}</h1></div>\n" +
    "	<div> &nbsp; </div>\n" +
    "\n" +
    "	<button class=\"btn btn-primary\" ng-click=\"getKeertiProfile()\">Keerti Profile</button> <button class=\"btn btn-success\" ng-click=\"getNgHydProfile()\">ngHyderabad Profile</button>	\n" +
    "	<div> &nbsp; </div>	\n" +
    "\n" +
    "\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-lg-6\">\n" +
    "			<profile-directive img-url=\"{{img}}\" profile=\"profile\"></profile-directive>\n" +
    "		</div>\n" +
    "		<div class=\"col-lg-6\" ng-repeat=\"item in items\">\n" +
    "			<p class=\"text-primary h4\"><a href=\"{{item.link}}\" target=\"_blank\">{{item.technology}}</a></p>\n" +
    "			<p class=\"text-muted\"> {{item.description}}</p>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("../app/templates/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/home.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-12 text-center bg-primary\"><h1>{{welcomeMessage}}</h1></div>\n" +
    "	<div>&nbsp;</div>\n" +
    "	<btf-markdown>\n" +
    "#Keerti Kotaru's AngularJS Seed Project\n" +
    "A seed project to easily get started with AngularJS. I'm using a specific tech stack for this seed project. Intend to improve it over time. See more details below.\n" +
    "\n" +
    "#Get Started\n" +
    "1. Clone the project and navigate to the folder.\n" +
    "2. Installation steps below\n" +
    "```\n" +
    "npm install \n" +
    "```\n" +
    "3. Perform bower install for UI packages.\n" +
    "```\n" +
    "bower install\n" +
    "```\n" +
    "Run grunt default task to get it going.\n" +
    "```\n" +
    "grunt\n" +
    "```\n" +
    "**Now use localhost:3001 to checkout the seed project in a browser.**\n" +
    "\n" +
    "### Improvements\n" +
    "\n" +
    "1. 	Karma \n" +
    "2.	Gulp\n" +
    "\n" +
    "	</btf-markdown>\n" +
    "</div>");
}]);

angular.module("../app/templates/profile.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/profile.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-3\"><img style=\"max-width:100px\" src=\"{{imgUrl}}\"></div>	\n" +
    "	<div class=\"col-lg-5\">\n" +
    "		<div> <strong>{{profile.name}}</strong> </div>\n" +
    "		<div>{{profile.hobbies}}</div>\n" +
    "		<div>{{profile.company}}</div>\n" +
    "		<div>{{profile.tagLine}}</div>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("../app/templates/tech-stack.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/tech-stack.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-12 text-center bg-primary\"><h1>{{title}}</h1></div>\n" +
    "	<div> &nbsp; </div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-lg-6\" ng-repeat=\"item in items\">\n" +
    "			<p class=\"text-primary h4\"><a href=\"{{item.link}}\" target=\"_blank\">{{item.technology}}</a></p>\n" +
    "			<p class=\"text-muted\"> {{item.description}}</p>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "	\n" +
    "</div>");
}]);
