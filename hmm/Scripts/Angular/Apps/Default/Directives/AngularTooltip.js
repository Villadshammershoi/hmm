(function (angular) {
    var app = angular.module('offerend');
    app.directive('anularTooltip', function ($scope) {
        $scope.userboxPopover = {
            title: 'Hello user',
            templateUrl: 'userbox.html',
            content: 'asshole'
        };
        $scope.placement = {
            options: [
              'top',
              'top-left',
              'top-right',
              'bottom',
              'bottom-left',
              'bottom-right',
              'left',
              'left-top',
              'left-bottom',
              'right',
              'right-top',
              'right-bottom'
            ],
            selected: 'top'
        };
    });
})(angular);