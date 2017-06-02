(function (angular) {
    var app = angular.module("offerend.login");
    app.controller('LoginController', ['$scope', '$http', '$uibModal', '$timeout', 'LoginService', function ($scope, $http, $uibModal, $timeout, $q, LoginService) {
        $scope.loginData = { UserName: "", Password: "" }
        $scope.loading = false;
        $scope.wrongLoginCredentials = "";
        $scope.currentUserIsSignedIn = false;

        $ctrl = this;

        $scope.loginAccount = function (isValid) {
            if (isValid) {
                $http.post('Account/Login', { model: $scope.loginData, returnUrl: "/Home" }, $scope.loading = true)
                    .then(function (d, status, headers, response) {
                        $scope.loading = false;
                        if (d.data.Key) {
                            window.location.reload();
                            $scope.wrongLoginCredentials = "nice one, logged in n all";
                            $scope.currentUserIsSignedIn = true;
                        } else {
                            $scope.wrongLoginCredentials = d.data.Value;
                        }
                    }, function (response) {
                        $scope.loading = false;
                    });
            }
        };
        
        $scope.logOut = function () {
            $http.post('Account/LogOff')
            .then(function () {
                window.location.reload();
            })
        }

        app.controller('ModalInstanceController', ['$uibModalInstance', function ($uibModalInstance) {
            var $ctrl = this;

            $ctrl.ok = function () {
                $uibModalInstance.close();
            };
        }]);
    }]);
})(angular)