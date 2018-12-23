angular
  .module("SampleApp", []);

angular
  .module("SampleApp")
  .controller("SampleController", SampleController);

SampleController.$inject = ["$scope"];

function SampleController($scope) {
  var vm = $scope;

  vm.Title = "My fist app";

  vm.data = [{
    "firstname":"rustam",
    "lastname":"kafeev",
    "profession":"developer"
  },{
    "firstname":"alesha",
    "lastname":"popovich",
    "profession":"pop"
  },{
    "firstname":"ivan",
    "lastname":"tzarevich",
    "profession":"knight"
  }]

}


