(function() {
    'use strict';

    angular.module('SampleApp', [])

    .controller('SampleCtl', ['$scope', function($scope) {

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
    }]);
})();