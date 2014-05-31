'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
      $scope.nameFilter = null;
      $scope.clickToOpen = function () {
          ngDialog.open({ template: 'popupTmpl.html' });
      };
      $scope.availableMeasurements = [
      {
          sizeInmm: "1.5",
          description: "1.5mm",
          type: "metric",
          looseFit: "1.6mm"
      },
      {
          sizeInmm: "2",
          description: "2mm",
          type: "metric",
          looseFit: "2.1mm"
      },
      {
          sizeInmm: "2.5",
          description: "2.5mm",
          type: "metric",
          looseFit: "2.6mm"
      },
      {
          sizeInmm: "3",
          description: "3mm",
          type: "metric",
          looseFit: "3.1mm"
      },
      {
          sizeInmm: "3.5",
          description: "3.5mm",
          type: "metric",
          looseFit: "3.6mm"
      },
      {
          sizeInmm: "4",
          description: "4mm",
          type: "metric",
          looseFit: "4.1mm"
      },
      {
          sizeInmm: "4.5",
          description: "4.5mm",
          type: "metric",
          looseFit: "4.6mm"
      },
      {
          sizeInmm: "5",
          description: "5mm",
          type: "metric",
          looseFit: "5.1mm"
      },
      {
          sizeInmm: "1.59",
          description: "1|16\"",
          type: "imperial",
          looseFit: "n/a"
      },
      {
          sizeInmm: "2.38",
          description: "3|32\"",
          type: "imperial",
          looseFit: "n/a"
      },
      {
          sizeInmm: "3.18",
          description: "1|8\"",
          type: "imperial",
          looseFit: "n/a"
      },
      {
          sizeInmm: "3.97",
          description: "5|32\"",
          type: "imperial",
          looseFit: "n/a"
      },
      {
          sizeInmm: "4.76",
          description: "3|16\"",
          type: "imperial",
          looseFit: "n/a"
      }
      ];
      $scope.leftSize = $scope.availableMeasurements[0];
      $scope.rightSize = $scope.availableMeasurements[0];
      $scope.setScrewColour = "silver";
      $scope.leftAccuracy = "exact";
      $scope.rightAccuracy = "exact";
      $scope.numberOfSetScrews = "2";
      $scope.quantity = 1;
      $scope.text = "A 4mm hole is a tight fit for a 4mm shaft.  Usually a tight-fit is recommended, but if you want an easier fit, this option adds 0.1mm to the diameter so a shaft can rotate easily, but not wobble";
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
      $scope.driversList = [
      {
          sizeInmm: 322,
          description: "German"
      },
      {
          sizeInmm: 207,
          description: "Spanish"
      }
      ];
  }]);
