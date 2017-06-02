(function (angular) {
    var app = angular.module('offerend.offices');
    app.controller("OfficeController", ["$scope", "$http", '$location', 'GetOfficeService', '$uibModal', '$timeout', function ($scope, $http, $location, GetOfficeService, $uibModal, $timeout) {
        var $ctrl = this;
        $scope.office = 1;

        $scope.loading = false;

        $scope.searchOffices = "";
        $scope.sortType = "Title";
        $scope.sortReverse = false;

        $scope.CreateOrUpdateOffice = { Title: "", Description: "", NumberOfEmployees: "", Relation: "", Interest: "", id: 0 };


        //Create/Edit offices
        $scope.createOffice = function (isValid) {
            if (isValid) {
                console.log($scope.createOffice);
                $http.post('/Offices/CreateOrUpdateOffice?stringOffice=' + JSON.stringify($scope.CreateOrUpdateOffice))
                $timeout($scope.createOffice, 2000)
                    .then(function (data, headers, status) {
                        var modalInstance = $uibModal.open({
                            animation: $ctrl.animationsEnabled,
                            templateUrl: 'ModalContent.html',
                            controller: 'ModalInstanceController',
                            controllerAs: '$ctrl',
                        });
                        $scope.offerendCreateOrUpdateOfficeForm.$setPristine();
                        $scope.loading = true;

                    });
            }
        };


        //Fetch Offices for display
        $scope.Offices = [];
        $scope.usersOffices = [];
        $scope.currentOffice = {};

        GetOfficeService.getOffices(false).then(function (d) {
            $scope.Offices = d.data;
        });

        GetOfficeService.getOffices(true).then(function (d) {
            $scope.usersOffices = d.data;
        });

        GetOfficeService.GetOfficePage(1).then(function (d) {
            $scope.currentOffice = d.data;
        });

        app.controller('ModalInstanceController', ['$uibModalInstance', function ($uibModalInstance) {
            var $ctrl = this;

            $ctrl.ok = function () {
                $uibModalInstance.close();

            };
        }]);

    }]);
})(angular)