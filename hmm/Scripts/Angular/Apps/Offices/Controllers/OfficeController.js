(function (angular) {
    var app = angular.module('offerend.offices');
    app.controller("OfficeController", ["$scope", "$http", '$location', 'GetOfficeService', '$uibModal', '$timeout', function ($scope, $http, $location, GetOfficeService, $uibModal, $timeout) {
        var $ctrl = this;

        $scope.loading = false;

        $scope.searchOffices = "";
        $scope.sortType = "Title";
        $scope.sortReverse = false;

        $scope.CreateOrUpdateOffice = { Title: "", Description: "", NumberOfEmployees: "", Relation: "", Interest: "" };


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

        GetOfficeService.getOffices().then(function (d) {
            $scope.Offices = d.data;
        });


        app.controller('ModalInstanceController', ['$uibModalInstance', function ($uibModalInstance) {
            var $ctrl = this;

            $ctrl.ok = function () {
                $uibModalInstance.close();

            };
        }]);

    }]);
})(angular)