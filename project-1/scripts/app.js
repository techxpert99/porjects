(function() {
    'use strict';

    angular.module('SampleApp', [])
        .controller('SampleCtl', SampleController);

    SampleController.$inject = ['$scope'];

    function SampleController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;
    }

})();