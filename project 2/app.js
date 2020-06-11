(function() {
    anglular.module('app')
        .controller('appctl', AppCtl);

    var shoppingList = [
        { item: Cookie, quantity: 10 },
        { item: Chocolate, quantity: 5 }
    ];

    function AppCtl() {
        this.shoppingList = shoppingList;
    }
})();