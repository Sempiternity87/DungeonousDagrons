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
  function CharacterSheetController($scope, Character, Ability, Skill, Weapon)
    {
    /** Reference to self. */ var mThis = this;
    
    mThis.testAbilities = [
      new Ability({id: 0, name: "STR", score: 17, tempAdjustment: 0}),
      new Ability({id: 0, name: "DEX", score: 16, tempAdjustment: 0}),
      new Ability({id: 0, name: "CON", score: 15, tempAdjustment: 0}),
      new Ability({id: 0, name: "INT", score: 14, tempAdjustment: 0}),
      new Ability({id: 0, name: "WIS", score: 13, tempAdjustment: 0}),
      new Ability({id: 0, name: "CHA", score: 12, tempAdjustment: 0}),
      ];
      
    }//END CharacterSheetController
  })();
  