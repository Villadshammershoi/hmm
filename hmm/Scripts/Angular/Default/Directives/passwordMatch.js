//(function (angular) {
//    var app = angular.module('offerend')
//    app.directive("noMatch", function ($timeout) {
//        return {
//            restrict: "A",
//            require: "ngModel",

//            link: function (scope, element, attributes, ngModel) {
//                ngModel.$validators.noMatch = function (modelValue) {
//                    return attributes.noMatch !== modelValue;
//                };
//            }
//        };
//    });
//});