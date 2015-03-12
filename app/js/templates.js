angular.module('templates-main', ['../app/templates/about.html', '../app/templates/home.html', '../app/templates/tech-stack.html']);

angular.module("../app/templates/about.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/about.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-12 text-center\"><h1>{{title}}</h1></div>	\n" +
    "</div>");
}]);

angular.module("../app/templates/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/home.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-12 text-center\"><h1>{{welcomeMessage}}</h1></div>	\n" +
    "</div>");
}]);

angular.module("../app/templates/tech-stack.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/templates/tech-stack.html",
    "<div class=\"row\">\n" +
    "	<div class=\"col-12 text-center\"><h1>{{title}}</h1></div>	\n" +
    "</div>");
}]);
