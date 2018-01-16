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
    
    /** Tracks global ID for assigning to list objects. */ var currentID = 0;
    
    /** Definition for a character object on the table. */
    mThis.character =
      {
      name: ""  //Name of character.
      ,init:  0 //Initiative.
      ,hp:    0 //Health Points.
      ,ac:    0 //Armor Class.
      ,touch: 0 //Touch AC.
      ,bab:   0 //Base Attack Bonus.
      ,cmb:   0 //Combat Maneuver Bonus.
      ,cmd:   0 //Combat Maneuver Defense.
      ,id:    0 //ID of object.
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
      currentID++;
      mThis.characterList.push({id: currentID});
      };
      
    /**************************************************************************
    * add */
    /**
    * Adds a new row to the data grid.
    **************************************************************************/
    mThis.add = function()
      {
      currentID++;
      mThis.characterList.push({id: currentID});
      };
      
    /**************************************************************************
    * down */
    /**
    * Moves the object one down in the list by increasing its index and
    * swapping it with the object in the next highest index.
    **************************************************************************/
    mThis.down = function(character)
      {
      var index = mThis.characterList.indexOf(character);
      
      /** If at the end of the list, do nothing. */
      if(index + 1 < mThis.characterList.length)
        {
        var temp = mThis.characterList[index];
        
        mThis.characterList[index]     = mThis.characterList[index + 1];
        mThis.characterList[index + 1] = temp;
        }
      };

    /**************************************************************************
    * orderByInitiative */
    /**
    * Use bubble sort to order the list by initiative descending.
    **************************************************************************/
    mThis.orderByInitiative = function()
      {
      var swapped = false;
      
      do
        {
        swapped = false;
        
        for(var i = 0; i < mThis.characterList.length - 1; i++)
          {
          if(Number(mThis.characterList[i].init) < Number(mThis.characterList[i+1].init))
            {
            var temp = mThis.characterList[i];
            
            mThis.characterList[i]     = mThis.characterList[i + 1];
            mThis.characterList[i + 1] = temp;
            
            swapped = true;
            }
          }
        }
      while(swapped);
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
    * Moves the object one up in the list by decreasing its index and
    * swapping it with the object in the next lowest index.
    **************************************************************************/
    mThis.up = function(character)
      {
      var index = mThis.characterList.indexOf(character);
      
      /** If at the end of the list, do nothing. */
      if(index + 1 > 0)
        {
        var temp = mThis.characterList[index];

        mThis.characterList[index]     = mThis.characterList[index - 1];
        mThis.characterList[index - 1] = temp;
        }
      };
    }//END InitiativeTrackerController
  })();