(function (angular) {
    var app = angular.module('offerend.login');
    app.controller('LoginRegisterController', ['$scope', '$uibModal', '$http', '$location', function ($scope, $uibModal, $http, $location) {
        $scope.createAccount = { username: "", password: "", confirmPassword: "", email: "", confirmEmail: "", validationMessage: "", registerSuccessMessage: "" };
        var $ctrl = this;
        $ctrl.animationsEnabled = true;

        //Create Account
        $scope.createAccount = function (isValid, size, parentSelector) {
            if (isValid) {
                var modalInstance = $uibModal.open({
                    animation: $ctrl.animationsEnabled,
                    templateUrl: 'ModalContent.html',
                    controller: 'ModalInstanceController',
                    controllerAs: '$ctrl',
                });

                $http.post('../Account/Register?username=' + $scope.createAccount.username + '&password=' + $scope.createAccount.password + '&repeatPassword=' + $scope.createAccount.repeatPassword + '&email=' + $scope.createAccount.email + '&repeatEmail=' + $scope.createAccount.repeatEmail)
                    .then(function (data, headers, status) {
                        if (!!data && data.Success == true) {   
                            $scope.createAccount.registerSuccessMessage = "Account successfully created!";
                            alert("you did it, your form is working!");
                        }

                    });
            }
        };

        //$scope.checkPasswords = function () {
        //    if ($scope.offerendRegisterForm.$invalid && $scope.createAccount.password != $scope.createAccount.repeatPassword) {
        //        $scope.createAccount.validationMessage = "Your password aint matching!!!";
        //    }
        //};


        $scope.form = 1;





    }])



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

    app.controller('ModalInstanceController', ['$uibModalInstance', function ($uibModalInstance) {
        var $ctrl = this;

        $ctrl.ok = function () {
            $uibModalInstance.close();
        };
        $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
})(angular);