(function() {
    'use strict';

    angular.module('LunchChecker', [])

    .controller('LCCtl', ['$scope', function($scope) {
        $scope.message = "";
        $scope.lunch_menu = "";
        $scope.checkMenu() = function() {
            $lunch = $scope.lunch_menu.split(',');
            if ($lunch.length <= 3)
                $scope.message = "Enjoy!";
            else
                $scope.message = "Too Much!";
        };
    }]);
})();