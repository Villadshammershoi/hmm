(function (angular) {
    var app = angular.module('offerend');
    app.service('LoginService', ['$http', function ($http) {
        var fact = {};  
        fact.getUserDetails = function (d) {  
            debugger;  
            return $http({  
                url: 'Account/Login?model=',
                method: 'POST',  
                data:JSON.stringify(d),  
                headers: { 'content-type': 'application/json' }  
        });  
    };  
    return fact; 
    }]);
})(angular)