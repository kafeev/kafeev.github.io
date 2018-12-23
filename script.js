angular
  .module("SampleApp", []);

angular
  .module("SampleApp")
  .controller("SampleController", SampleController);

SampleController.$inject = ["$scope"];

function SampleController($scope) {
  var vm = this;


}


