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



















//angular.module('UserValidation', []).directive('validPasswordC', function () {
//    return {
//        require: 'ngModel',
//        link: function (scope, elm, attrs, ctrl) {
//            ctrl.$parsers.unshift(function (viewValue, $scope) {
//                var noMatch = viewValue != scope.myForm.password.$viewValue
//                ctrl.$setValidity('noMatch', !noMatch)
//            })
//        }
//    }
//})



//(function (angular) {
//    var app = angular.module('offerend');
//    app.directive('validPasswordC', [function () {
//        return {
//            require: 'ngModel',
//            link: function (scope, elm, attrs, ctrl) {
//                ctrl.$parsers.unshift(function (viewValue, $scope) {
//                    var noMatch = viewValue != scope.offerendRegisterForm.password.$viewValue
//                    ctrl.$setValidity('noMatch', !noMatch)
//                })
//            }
//        }
//    }]);
//})(angular);



