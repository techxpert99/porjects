(function() {
    'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', ['$scope', function() {
        $scope.name = "Ritik";
        $scope.totalValue = 0;
    }]);
})();