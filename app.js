(function() {
    'use strict';

    angular.module('DIApp', [])

    .controller('DIController', ['$scope', '$filter', function($scope, $filter) {
        $scope.name = "";
        $scope.upper = function() {
            var upcase = $filter['uppercase'];
            $scope.name = upcase($scope.name);
        };
    }]);
})();