var app = angular.module('application', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
    when('/schoollist', {
    	templateUrl: 'views/schoollist.html',
        controller: 'SchoolListController'
    }).
    when('/schooldetail/:schoolid', {
    	templateUrl: 'views/schooldetail.html',
        controller: 'SchoolDetailController'
    }).
    when('/schooladd', {
    	templateUrl: 'views/schooladd.html',
        controller: 'SchoolAddController'
    }).
    otherwise({
    	redirectTo: '/'
    });
}]);	


app.controller('SchoolListController', function($scope, $http) {
	
	$http.get("ajax/schoollist.php").success(function(data){
		$scope.schools = data;
	});

});

app.controller('SchoolDetailController', function($scope, $http, $routeParams) {
	
	$http.get("ajax/schooldetail.php?schoolid=" + $routeParams.schoolid).success(function(data){
		$scope.school = data;
	});
	  
});

/*
  $scope.addTask = function (task) {
    $http.post("ajax/addTask.php?task="+task).success(function(data){
        getTask();
        $scope.taskInput = "";
      });
  };
  $scope.deleteTask = function (task) {
    if(confirm("Are you sure to delete this line?")){
    $http.post("ajax/deleteTask.php?taskID="+task).success(function(data){
        getTask();
      });
    }
  };

  $scope.toggleStatus = function(item, status, task) {
    if(status=='2'){status='0';}else{status='2';}
      $http.post("ajax/updateTask.php?taskID="+item+"&status="+status).success(function(data){
        getTask();
      });
  };
  */

