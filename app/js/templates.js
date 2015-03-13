angular.module('templates-main', ['../app/templates/about.html', '../app/templates/home.html', '../app/templates/tech-stack.html']);

angular.module("../app/templates/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/about.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-12 text-center bg-primary\"><h1>{{title}}</h1></div>\n" +
    "</div>");
}]);

angular.module("../app/templates/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/home.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-12 text-center bg-primary\"><h1>{{welcomeMessage}}</h1></div>\n" +
    "</div>");
}]);

angular.module("../app/templates/tech-stack.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/tech-stack.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-lg-12 text-center bg-primary\"><h1>{{title}}</h1></div>\n" +
    "	<div> &nbsp; </div>\n" +
    "	<div class=\"row\">\n" +
    "		<div class=\"col-lg-6\" ng-repeat=\"item in items\">\n" +
    "			<p class=\"text-primary h4\">{{item.technology}}</p>\n" +
    "			<p class=\"text-muted\">{{item.description}}</p>\n" +
    "		</div>	\n" +
    "	</div>\n" +
    "	\n" +
    "</div>");
}]);
