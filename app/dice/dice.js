(function()
  {
  "use strict"
  
  angular.module("app")
  
  /*****************************************************************************
  * Component: dice */
  /**
  * Defines the component for dice.
  *****************************************************************************/
  .component("dice",
    {
    templateUrl:"app/dice/dice.html",
    controller: DiceController
    });
    
  /*****************************************************************************
  * DiceController */
  /**
  * Controller for the Form Dice component.
  *****************************************************************************/
  function DiceController($scope)
    {
    /** Reference to self. */ var mThis = this;
    
    /***************************************************************************
    * $onInit */
    /**
    * Initialize the controller.
    ***************************************************************************/
    mThis.$onInit = function()
      {
      
      };
    }
  })();