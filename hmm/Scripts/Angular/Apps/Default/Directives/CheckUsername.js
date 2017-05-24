(function (angular) {
    var app = angular.module('offerend');
    app.directive('usernameAvailable', function ($timeout, $q, $http) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            link: function (scope, elm, attr, ngModel) {
                ngModel.$asyncValidators.usernameExists = function (modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    return $http.get('api/CheckUsername/' + value + "/").then(function (res, data) {
                        console.log(value);
                        $timeout(function () {
                            ngModel.$setValidity('usernameExists', !res.data);
                            console.log(res);
                        }, 1000);
                    });
                };
            }
        }
    });
})(angular);