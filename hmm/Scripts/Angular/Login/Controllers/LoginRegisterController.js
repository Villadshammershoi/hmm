(function (angular) {
    var app = angular.module('offerend.login');
    app.controller('LoginRegisterController', ['$scope', '$uibModal', '$http', '$location', function ($scope, $uibModal, $http, $location) {
        $scope.createAccount = { username: "", password: "", repeatPassword: "", email: "", repeatEmail: "", validationMessage: "", registerSuccessMessage: ""};



        $scope.validatePassword = function () {
            if ($scope.createAccount.password != $scope.createAccount.repeatPassword) {
                $scope.createAccount.validationMessage = "Password and Confirm Password don't match.";
            }
        };

        $scope.validateUsername = function () {
            if ($scope.createAccount.username.length < 5) {
                $scope.createAccount.validationMessage = "Username is too short";
            }
        }


        //Create Account
        $scope.createAccount = function () {
            $http.post('../Account/Register?username=' + $scope.createAccount.username + '&password=' + $scope.createAccount.password + '&repeatPassword=' + $scope.createAccount.repeatPassword + '&email=' + $scope.createAccount.email + '&repeatEmail=' + $scope.createAccount.repeatEmail)
                .then(function (data, headers, status) {
                if (!!data && data.Success == true) {
                    $scope.createAccount.registerSuccessMessage = "Account successfully created!";
                }
            });
        };


        $scope.form = 1;
        var $ctrl = this;

        $ctrl.animationsEnabled = true;

        $ctrl.open = function (size, parentSelector) {
            var modalInstance = $uibModal.open({
                animation: $ctrl.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceController',
                controllerAs: '$ctrl',
            });
        };
    }]);

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