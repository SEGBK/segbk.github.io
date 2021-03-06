var app = angular.module('app', []);

app.controller('navController', function navController($scope, $http){
	$scope.elems = ["Repos", "Memebrs"]
	$scope.current = "Repos"
	$scope.updateCurrent = function(c){
		$scope.current = c;
		console.log($scope.current)
	}
});
app.controller('userController', function userController($scope, $http){
	$http({
	  method: 'GET',
	  url: 'https://api.github.com/orgs/SEGBK'
	}).then(function successCallback(response) {
		$scope.user = response.data;
  	}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});
app.controller('reposController', function reposController($scope, $http) {
	$http({
	  method: 'GET',
	  url: 'https://api.github.com/orgs/SEGBK/repos'
	}).then(function successCallback(response) {
		console.log(response)
		$scope.repos = response.data
  	}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});