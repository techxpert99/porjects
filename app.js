(function() {
    'use strict';

    angular.module('DIApp', [])

    .controller('DIController', ['$scope', '$filter', function($scope, $filter) {
        $scope.name = "";
        $scope.upper = function() {
            $scope.name = $scope.name.toUpperCase();
        };
    }]);
})();