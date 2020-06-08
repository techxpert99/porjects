(function() {
    'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', ['$scope', function($scope) {
        $scope.name = "";
        $scope.totalValue = 0;
    }]);
})();