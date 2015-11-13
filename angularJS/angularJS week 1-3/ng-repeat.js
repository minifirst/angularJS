/**
 * Created by Shun Chang on 11/11/2015.
 */
var myApp = angular.module("sampleApp",[]);
myApp.controller("test",function($scope){
    $scope.items=["iPhone","Samsung","HTC"];
    $scope.orders=[
        {
            'name':'MLB',
            'type':'Baseball'
        },
        {
            'name':'NBA',
            'type':'Basketball'
        },
        {
            'name':'NFL',
            'type':'Football'
        }
    ];
    $scope.built=function(){
        $scope.teams=[
            {'Tname':'Golden State Warriors','Location':'Oakland'},
            {'Tname':'New York Knicks','Location':'New York City'},
            {'Tname':'Miami Heat','Location':'Miami'},
            {'Tname':'Los Angels Clippers','Location':'LA'},
            {'Tname':'Los Angels Lakers','Location':'LA'},
            {'Tname':'Atlanta Hawks','Location':'Atlanta'}
        ];
    };
    $scope.DF=function(){
        $scope.teams.shift();
    };
    $scope.DL=function(){
        $scope.teams.pop();
    };
    $scope.DR=function(i){
        $scope.teams.splice(i,1);
    };
    $scope.tableVisable=false;
    $scope.EDIT= function (i) {
        $scope.tableVisable=!$scope.tableVisable;
        $scope.teamname= $scope.teams[i].Tname;
        $scope.place= $scope.teams[i].Location;
        $scope.num=i;
    };
    $scope.save= function() {
        $scope.tableVisable=!$scope.tableVisable;
        $scope.teams[$scope.num].Tname =  $scope.teamname;
        $scope.teams[$scope.num].Location = $scope.place;
        $scope.tableVisable=false;
    };

});