var appMain = angular.module("appMain", ['ngSanitize', 'ngRoute']);

//ROUTER
appMain.config(function($routeProvider, $locationProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'main.html',
		controller  : 'mainController'
	})

	// route for the about page
	.when('/resume', {
		templateUrl : 'resume.html',
		controller  : 'resumeController'
	})

	// route for the contact page
	.when('/code', {
		templateUrl : 'code.html',
		controller  : 'codeController'
	});
	
	$locationProvider.html5Mode(true);
});

// MAIN CONTROLLER
appMain.controller('mainController', function ($scope, $http, $sce) {

	$scope.pageheader = "Main";
	$scope.test = "This is a test";
	$scope.title = "Sample title";
	$scope.subtitle = "Subtitle";
	$scope.description = "This is some content text that I wrote";
	
	var testdata 
	$http.get('/htmltest.html').then(function(response) { 
		testdata = response.data;
	});
	
	
	$scope.renderbox = function() { 
		return $sce.trustAsHtml(testdata);
	};
	
});

// RESUME CONTROLLER
appMain.controller('resumeController', function ($scope) {
	$scope.pageheader = "Resume"
});

// CODE CONTROLLER
appMain.controller('codeController', function ($scope) {
	$scope.pageheader = "Code"
});