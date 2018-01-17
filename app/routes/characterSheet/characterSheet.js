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
    
    /** Skill definition. */
    mThis.skill =
      {
      id: 0
      ,name: ""
      ,ranks: 0
      ,abilityMod: ""
      };
      
    /** Weapon definition. */
    mThis.weapon =
      {
      id: 0
      ,name: ""
      ,attackBonus: 0
      ,critical: ""
      ,type: ""
      ,range: 0
      ,ammunition: 0
      ,damage: ""
      };
      
    }//END CharacterSheetController
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  