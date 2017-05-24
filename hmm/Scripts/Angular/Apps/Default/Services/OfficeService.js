(function (angular) {
    var app = angular.module('offerend');
    app.service('GetOfficeService', ['$http', function ($http) {
        var offices = {};

        offices.getOffices = function () {
            return $http.get('/Offices/GetOffices');
        }
        return offices;
    }]);
})(angular)