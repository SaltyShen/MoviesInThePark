'use strict';
angular.module('Chicago Movies at The Park App',[])
.controller('MovieSearch', ['$scope','$http', function($scope, $http){

    $http.get('https://data.cityofchicago.org/resource/7piw-z6r6.json').then(function(response){
    console.log(response.data);
    $scope.moviesdatabase = response.data;
    
    });
}]);