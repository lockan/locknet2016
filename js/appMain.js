var appMain = angular.module("appMain", []);

appMain.controller("mainController", function ($scope, $http) {

	$scope.pageheader = "Page Header"
	$scope.test = "This is a test"
	$scope.title = "Sample title"
	$scope.subtitle = "Subtitle"
	$scope.description = "This is some content text that I wrote"
	
});