(function(){
var app;
app = angular.module('catBrowser', []);

app.controller('BrowserController', [
'$scope', '$http', function($scope, $http) {

      return $scope.cats = [
       {"id": 18, "name": "Michelle", "gender": "F", "age": 1, "breed": "Egyptian Mau", "weight": 5, "about": "test 2", "photo": "./egyptianMau_3EPH7s3.jpg", "location": {"name": "Marcus Pod", "address1": "9191 Towne Center Drive", "address2": "", "city": "San Diego", "state": "CA", "zip_code": 92122, "phone": "1234567890", "email": "marcus.planta@brightscope.com"}},
        {"id": 19, "name": "Andrew", "gender": "M", "age": 2, "breed": "Exotic", "weight": 5, "about": "test 3", "photo": "./exotic_BsCG7sh.jpg", "location": {"name": "David's \"Fur-Real\" Felines", "address1": "2723 Durant Ave", "address2": "", "city": "Berkeley", "state": "CA", "zip_code": 94704, "phone": "8001234567", "email": "david.lorenz@brightscope.com"}}

      ];
    }
  ]);

}).call(this);
