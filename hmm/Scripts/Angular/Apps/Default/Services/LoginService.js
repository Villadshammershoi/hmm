(function (angular) {
    var app = angular.module('offerend');
    app.service('LoginService', ['$http', function ($http) {
        var fact = {};  
        fact.postUserDetails = function (data) {  
            return $http.post('Account/Login?model=', { data: JSON.stringify(data) })
            .then(function (data, headers, response) {
                console.log(response.data);
                return response.data;
            })

        };
    return fact; 
    }]);
})(angular)



//return $http({  
            //    url: 'Account/Login?model=',
            //    method: 'POST',
            //    data: JSON.stringify(data),
            //    headers: { 'content-type': 'application/json' } 
            //})