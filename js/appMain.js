var appMain = angular.module("appMain", ['ngSanitize']);

appMain.controller("mainController", function ($scope, $http, $sce) {

	$scope.pageheader = "Page Header";
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