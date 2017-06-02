(function (angular) {
    var app = angular.module('offerend.login');
    app.controller('RegisterController', ['$scope', '$uibModal', '$http', '$timeout', function ($scope, $uibModal, $http, $timeout) {
        $scope.createAccount = { username: "", password: "", confirmPassword: "", email: "", confirmEmail: "" };
        $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
        $scope.passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        $scope.offerendRegisterForm = {};
        $scope.loading = false;

        var $ctrl = this;
        $ctrl.animationsEnabled = true;

        var vm = this;

        $scope.form = 1;

        //Create Account
        $scope.createAccount = function (isValid) {
            if (isValid) {
                $http.post('../Account/Register?username=' + $scope.createAccount.username + '&password=' + $scope.createAccount.password + '&confirmPassword=' + $scope.createAccount.confirmPassword + '&email=' + $scope.createAccount.email + '&confirmEmail=' + $scope.createAccount.confirmEmail)
                $scope.loading = true;
                $timeout($scope.createAccount, 2000)
                    .then(function (data, status, response) {
                        $scope.loading = false;
                        var modalInstance = $uibModal.open({
                            animation: $ctrl.animationsEnabled,
                            templateUrl: 'ModalContent.html',
                            controller: 'ModalInstanceController',
                            controllerAs: '$ctrl',
                        });

                        $scope.createAccount = {};
                        offerendRegisterForm.$setPristine();
                        offerendRegisterForm = {};
                    }, function (response) {
                        $scope.loading = false;
                    }).finally(function () {

                    });
            }
        };
    }]);

    app.controller('ModalInstanceController', ['$uibModalInstance', function ($uibModalInstance) {
        var $ctrl = this;

        $ctrl.ok = function () {
            $uibModalInstance.close();

        };
    }]);
})(angular);