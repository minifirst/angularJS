/**
 * Created by Shun Chang on 11/11/2015.
 */
var myApp = angular.module("sampleApp",[]);
myApp.controller("test",function($scope){
    $scope.foo="James";
    $scope.img1=true;
    $scope.toggleImg=function(){
        $scope.img1=!$scope.img1;
    };
});