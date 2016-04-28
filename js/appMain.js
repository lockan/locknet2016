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
appMain.controller('mainController', function ($scope, $http, $sce) {
	$scope.pageheader = "Home";
	$scope.contentheader = "Welcome";
	
	$http.get('/main/main_content.html').then(function(response) {
		$scope.pagecontent = $sce.trustAsHtml(response.data);
	});
	
});

// RESUME CONTROLLER
appMain.controller('resumeController', function ($scope) {
	$scope.pageheader = "Resume"
});

// CODE CONTROLLER
appMain.controller('codeController', function ($scope, $http, $sce) {
	$scope.pageheader = "Code Samples"
	$scope.samples = [];
		
	var sampledata = null;

	$http.get('/codesamples/codesampledata.json').then(function(response) { 
		$scope.samples = response.data;
	});
	
	$scope.renderbox = function(sample) { 
		return '/codesamples/template_codesample.html';
	};
	
});