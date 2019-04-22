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
    
    mThis.character =
      {
      abilities:
        [new Ability({id: 1, name: "STR", score: 17, tempAdjustment: 0}),
         new Ability({id: 2, name: "DEX", score: 16, tempAdjustment: 0}),
         new Ability({id: 3, name: "CON", score: 15, tempAdjustment: 0}),
         new Ability({id: 4, name: "INT", score: 14, tempAdjustment: 0}),
         new Ability({id: 5, name: "WIS", score: 13, tempAdjustment: 0}),
         new Ability({id: 6, name: "CHA", score: 10, tempAdjustment: 0})],
      
      weapons:
        [new Weapon(
           {id:1,
            ammunition: "n/a",
            attackBonus: 3,
            critical:"(19-20) 2x",
            damage: "1d6",
            name: "Short Sword",
            range:"n/a",
            type:"Slashing"}),
         new Weapon(
           {id:2,
            ammunition: "20 arrows",
            attackBonus: 0,
            critical:"2x",
            damage: "1d8",
            name: "Bow",
            range:"60ft",
            type:"Piercing"})]
      }
    
    /**************************************************************************
    * $onInit */
    /**
    * Initialize the controller.
    **************************************************************************/
    mThis.$onInit = function()
      {
      };
    
    /**************************************************************************
    * removeWeapon */
    /**
    * Removes a weapon from the weapon list.
    * @param  weapon  Weapon to remove.
    **************************************************************************/
    mThis.removeWeapon = function(weapon)
      {
      var i = mThis.weapons.indexOf(weapon);
      mThis.weapons.splice(i, 1);
      };
    
    }//END CharacterSheetController
  })();
  