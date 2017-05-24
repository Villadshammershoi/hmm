(function (angular) {
    var app = angular.module('offerend.login');
    app.directive('requestUserToken', ['$http', function ($http) {
        return function (scope, element, attrs) {
            $http.defaults.headers.common['RequestVerificationToken'] = attrs.ncgRequestVerificationToken || "no request verification token";
        };
    }])

})(angular);
