/// <reference path="C:\Users\vill0237\Documents\Visual Studio 2015\Projects\hmm\hmm\Views/Sections/sectiona.html" />
(function (angular) {
    var app = angular.module('offerend.global');
    app.controller('GlobalController', ['$scope', '$timeout', function ($scope, $timeout) {

        $scope.howToBox = [
            { templateUrl: [{ "pages": 'Views/Sections/boxOne.html' }]},
            { templateUrl: [{ "pages": 'Views/Sections/boxTwo.html' }]},
            { templateUrl: [{ "pages": 'Views/Sections/boxThree.html' }]},
            { templateUrl: [{ "pages": 'Views/Sections/boxFour.html' }]},
        ];

        $scope.index = 0;



        //var myEl = angular.element(document.querySelector('.slide'));
        //$timeout(function () {
        //    myEl.addClass('slidein');
        //}, 4000);
    }]);
})(angular);