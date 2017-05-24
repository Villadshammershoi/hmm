(function (angular) {
    var app = angular.module("offerend.login");
    app.controller('LoginController', ['$scope', '$http', '$location', 'LoginService', function ($scope, $http, $location, LoginService) {
        $scope.loginData = { UserName: "", Password: "" }

        $scope.isLoggedIn = false;

        $scope.loginAccount = function (isValid) {
            if (isValid) {
                console.log($scope.loginData);
                $http.post('Account/Login', { model: $scope.loginData, returnUrl: "/Home" })
                    .then(function (data, headers) {

                    });

            }
        };
    }]);
})(angular)