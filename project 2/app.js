(function() {
    anglular.module('app')
        .controller('appctl', AppCtl);

    var shoppingList = [
        { name: Cookie, quantity: 10 },
        { name: Chocolate, quantity: 5 }
    ];

    function AppCtl() {
        this.shoppingList = shoppingList;
    }
})();