(function() {
    'use strict';

    var shoppingList1 = [
        "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter"
    ];

    var shoppingList2 = [{
            name: "Milk",
            quantity: "2"
        },
        {
            name: "Donuts",
            quantity: "200"
        },
        {
            name: "Cookies",
            quantity: "300"
        },
        {
            name: "Chocolate",
            quantity: "5"
        }
    ];

    angular.module('SampleApp', [])
        .controller('SampleCtl', SampleController);

    SampleController.$inject = ['$scope'];

    function SampleController($scope) {
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;
    }

})();