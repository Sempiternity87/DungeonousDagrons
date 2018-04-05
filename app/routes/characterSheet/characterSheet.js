(function()
  {
  "use strict"

  angular.module("app")

  /*****************************************************************************
  * Component: CharacterSheet */
  /**
  * Defines the component for the Character Sheet.
  *****************************************************************************/
  .component("characterSheet",
    {
    templateUrl:"app/routes/characterSheet/characterSheet.html",
    controller: CharacterSheetController
    });

  /*****************************************************************************
  * CharacterSheetController */
  /**
  * Controller for the Character Sheet component.
  *****************************************************************************/
  function CharacterSheetController($scope, Character)
    {
    /** Reference to self. */ var mThis = this;





    }//END CharacterSheetController
  })();
