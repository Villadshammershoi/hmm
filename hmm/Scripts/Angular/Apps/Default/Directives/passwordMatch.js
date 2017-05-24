(function (angular) {
    var app = angular.module('offerend');
    app.directive("matcher", function ($timeout) {
        return {
            restrict: "A",
            require: "ngModel",

            link: function (scope, element, attributes, ngModel) {
                ngModel.$validators.matcher = function (modelValue) {
                    return attributes.matcher === modelValue;
                };
            }
        };
    });
})(angular)