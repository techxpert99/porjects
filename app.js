(function() {
    'use strict';

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', ['$scope', function($scope) {
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.updateNumeric = function() {
            var totalNameValue = 0;
            var name = $scope.name;
            for (var index = 0; index < name.length; index++)
                totalNameValue += name.charCodeAt(index);
            $scope.totalValue = totalNameValue;
        };
    }]);
})();