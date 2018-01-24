(function()
  {
  "use strict"

  angular.module("app")
 
  /*****************************************************************************
  * Component: CharacterSheet */
  /**
  * Defines the component for the Character Sheet.
  *****************************************************************************/
  .component("characterSheet5e",
    {
    templateUrl:"app/routes/characterSheet5e/characterSheet5e.html",
    controller: characterSheet5eController
    });
    
  /*****************************************************************************
  * CharacterSheetController */
  /**
  * Controller for the Character Sheet component.
  *****************************************************************************/
  function characterSheet5eController($http, $scope, Character5e)
    {
    /** Reference to self. */ var mThis = this;
    

    $http.get("app/assets/characters/Rex Darwin.json").then(function(resp)
      {
      var character = new Character5e(resp.data);
      console.log(character);

      mThis.character  = character;
      }, function(err)
      {
      console.log(err)
      });
    
    
    }//END CharacterSheetController
  })();
  