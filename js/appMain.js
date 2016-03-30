var appMain = angular.module("appMain", ['ngSanitize', 'ngRoute']);

//ROUTER
appMain.config(function($routeProvider, $locationProvider) {
	$routeProvider

	// index
	.when('/', {
		templateUrl : 'main.html',
		controller  : 'mainController'
	})

	// resume
	.when('/resume', {
		templateUrl : 'resume.html',
		controller  : 'resumeController'
	})

	// code
	.when('/code', {
		templateUrl : 'code.html',
		controller  : 'codeController'
	});
	
	$locationProvider.html5Mode(true);
});

// MAIN CONTROLLER
appMain.controller('mainController', function ($scope, $http) {

	$scope.pageheader = "Home";
	
});

// RESUME CONTROLLER
appMain.controller('resumeController', function ($scope) {
	$scope.pageheader = "Resume"
});

// CODE CONTROLLER
appMain.controller('codeController', function ($scope, $http, $sce) {
	$scope.pageheader = "Code Samples"
	$scope.samples = [];
		
	var samplebox;
	var sampledata = null;
	
	$http.get('/codesamples/template_codesample.html').then(function(response) { 
		samplebox = response.data;	
	});

	$http.get('/codesamples/codesampledata.json').then(function(response) { 
		$scope.samples = response.data;
	});
	
	$scope.renderbox = function(sample) { 
		return '/codesamples/template_codesample.html';
	};
	
});