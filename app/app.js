var myApp=angular.module('myApp',[]);

myApp.controller('myController',function($scope,$http){
var url = "https://hirehive-testing-account.hirehive.com/api/v1/jobs.json";
 $http.get(url).success(function(response){
     $scope.myData = response;
     $scope.myJobs =[];

     $scope.clearSearch = function() {
        $scope.search = null;
    }

     $scope.setGroup = function(row) {
       //HASHTAGS
            return (angular.lowercase(row.title).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
            angular.lowercase(row.category).indexOf(angular.lowercase($scope.query) || '') !== -1);
   };

    $scope.search = function(row2) {
      //Search Box searching title and description text
      return (angular.lowercase(row2.title).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
      angular.lowercase(row2.description.text).indexOf(angular.lowercase($scope.query) || '') !== -1);
   }
 });
});
