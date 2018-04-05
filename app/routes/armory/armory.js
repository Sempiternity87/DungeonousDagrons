(function() {
"use strict";

angular.module('app').component('armory', Armory());

function Armory()
  {
  return 0,
    {
    templateUrl:'app/routes/armory/armory.html',
    controller:ArmoryController
    };
  }

function ArmoryController()
  {
  var mThis = this;

  mThis.$onInit = function()
    {

    }
  }
})();
