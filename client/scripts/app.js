/**
 * Created by lukedowell on 8/17/15.
 */

var appControllers = angular.module('appControllers', []);
var myApp = angular.module('myApp', ['ngRoute', "appControllers"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/assets/views/routes/home.html',
                controller: 'SomeController'
            })
            .when('/code', {
                templateUrl: '/assets/views/routes/code.html',
                controller: 'AnotherController'
            })
            .when('/projects', {
                templateUrl: '/assets/views/routes/projects.html',
                controller: 'SomeController'
            })
            .otherwise({
                redirectTo: "/home"
            });
    }]);
