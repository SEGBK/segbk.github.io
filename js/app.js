var app = angular.module('app', []);

app.controller('navController', function navController($scope, $http){
	$scope.elems = ["Repos", "Memebrs"]
});
app.controller('userController', function userController($scope, $http){
	$http({
	  method: 'GET',
	  url: 'https://api.github.com/orgs/SEGBK'
	}).then(function successCallback(response) {
		$scope.user = response.data;
		console.log(response)
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
		$scope.repos = response.data
  	}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});