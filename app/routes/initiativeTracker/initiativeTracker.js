(function()
  {
  "use strict"

  angular.module("app")
 
  /*****************************************************************************
  * Component: InitiativeTracker */
  /**
  * Defines the component for the Initiative Tracker.
  *****************************************************************************/
  .component("initiativeTracker",
    {
    templateUrl:"app/routes/initiativeTracker/initiativeTracker.html",
    controller: InitiativeTrackerController
    });
    
  /*****************************************************************************
  * InitiativeTrackerController */
  /**
  * Controller for the Initiative Tracker component.
  *****************************************************************************/
  function InitiativeTrackerController($scope)
    {
    /** Reference to self. */ var mThis = this;
    var id = 0;
    
    /** Definition for an object on the grid. */
    mThis.character =
      {
      name: "", //Name of character.
      init: 0,  //Initiative.
      hp: 0,    //Health Points.
      ac: 0,    //Armor Class.
      touch: 0, //Touch AC.
      bab: 0,   //Base Attack Bonus.
      cmb: 0,   //Combat Maneuver Bonus.
      cmd: 0,   //Combat Maneuver Defense.
      id: 0     //ID of object.
      };
    
    /** List of characters in the table.*/
    mThis.characterList = [];
      
    /**************************************************************************
    * $onInit */
    /**
    * Initialize the controller.
    **************************************************************************/
    mThis.$onInit = function()
      {
      id++;
      mThis.characterList.push({id: id});
      };
      
    /**************************************************************************
    * add */
    /**
    * Adds a new row to the data grid.
    **************************************************************************/
    mThis.add = function()
      {
      id++;
      mThis.characterList.push({id: id});
      };
      
    /**************************************************************************
    * down */
    /**
    * Moves the object one down in the list.
    **************************************************************************/
    mThis.down = function(id)
      {
      console.log(id + " down");
      };

    /**************************************************************************
    * remove */
    /**
    * Removes object from Tracker Grid.
    **************************************************************************/
    mThis.remove = function(id)
      {
      mThis.characterList = mThis.characterList.filter(function(e){ return e.id != id; });
      };
      
    /**************************************************************************
    * up */
    /**
    * Moves the object one up in the list.
    **************************************************************************/
    mThis.up = function(id)
      {
      console.log(id + " up");
      };
    }//END InitiativeTrackerController
  })();