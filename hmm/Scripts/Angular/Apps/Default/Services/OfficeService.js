(function (angular) {
    var app = angular.module('offerend');
    app.service('GetOfficeService', ['$http', function ($http) {
        var offices = {};

        offices.getOffices = function (ShowUsersOnly) {
            return $http.get('/Offices/GetOffices?ShowUsersOnly=' + ShowUsersOnly);
        }
        return offices;


        //Get currentOffice values
        var currentOffice = {};
        currentOffice.GetOfficePage = function (id) {
            return $http.get('/Offices/GetOfficePage/' + id);
        }
        return currentOffice;
    }]);
})(angular)