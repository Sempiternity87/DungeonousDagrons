(function()
  {
  "use strict"

  angular.module("app")

  /*****************************************************************************
  * Component: initiativeTracker5e */
  /**
  * Defines the component for the Initiative Tracker.
  *****************************************************************************/
  .component("initiativeTracker5e",
    {
      templateUrl:"app/routes/initiativeTracker5e/initiativeTracker5e.html",
    controller: initiativeTracker5eController
    });

  /*****************************************************************************
  * initiativeTracker5eController */
  /**
  * Controller for the Initiative Tracker component.
  *****************************************************************************/
  function initiativeTracker5eController($scope)
    {
    /** Reference to self. */ var mThis = this;

    /** Tracks global ID for assigning to list objects. */ var currentID = 0;

    /** Definition for a character object on the table. */
    mThis.character =
      {
      name:         "" //Name of character.
      ,init:        0  //Initiative.
      ,hp:          0  //Health Points.
      ,ac:          0  //Armor Class.
      ,dc:          0  //Spell Save DC.
      ,notes:       0  //Notes.
      ,id:          0  //ID of object.
      ,currentTurn: false //Indication it is this char's turn.
      };

    /** List of characters in the table.*/
    mThis.characterList = [];

    /** Current index in the character array for determining turn. */
    mThis.currentCharIndex = -1;

    /** Counts how many minutes have passed. */
    mThis.minuteCounter = "00";

    /** Counts how many seconds have passed. */
    mThis.secondCounter = "00";

    /** Counts how many rounds have passed. */
    mThis.roundCounter  = 0;

    /**************************************************************************
    * $onInit */
    /**
    * Initialize the controller.
    **************************************************************************/
    mThis.$onInit = function()
      {
      currentID++;
      mThis.characterList.push({id: currentID, currentTurn: false});
      mThis.newEncounter();
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
      if(index < mThis.characterList.length - 1)
        {
        var temp = mThis.characterList[index];

        mThis.characterList[index]     = mThis.characterList[index + 1];
        mThis.characterList[index + 1] = temp;

        var obj = mThis.characterList.find(function(c){ return c.currentTurn == true; });
        var i   = mThis.characterList.findIndex(function(c){ return c == obj; });
        mThis.currentCharIndex = i
        }
      };

    /**************************************************************************
     * newEncounter */
    /**
    * Sets round counter (and time) to zero.
    **************************************************************************/
    mThis.newEncounter = function()
      {
      mThis.roundCounter = 0;
      updateRound();
      };

    /**************************************************************************
    * nextTurn */
    /**
    * Moves the current turn marker to the next character in the queue.
    * Increments the round counter, seconds, and minutes when the whole list
    * has been incremented through. Updates the clock/round header
    * appropriately.
    **************************************************************************/
    mThis.nextTurn = function()
      {
      /** Change turn for current character. */
      if (mThis.currentCharIndex >= 0)
        mThis.characterList[mThis.currentCharIndex].currentTurn = false;

      /** Move to next character in list. */
      if(mThis.currentCharIndex < mThis.characterList.length - 1)
        {
        mThis.currentCharIndex++;
        }

      /** Loop back to the beginning of the list, then increment rounds, seconds, and minutes. */
      else
        {
        mThis.currentCharIndex = 0;
        mThis.roundCounter++;

        updateRound();
        }

      /** Change turn for next character. */
      mThis.characterList[mThis.currentCharIndex].currentTurn = true;
      };

    /**************************************************************************
    * orderByInitiative */
    /**
    * Use bubble sort to order the list by initiative descending. Resets turn
    * marker to beginning of list.
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
    * turnOwner */
    /**
    * Finds the current turn owner, and return's a string showing turn
    * possession.
    **************************************************************************/
    mThis.turnOwner = function()
      {
      var obj = mThis.characterList.find(function(c){ return c.currentTurn == true; });
      return obj;
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
      if(index > 0)
        {
        var temp = mThis.characterList[index];

        mThis.characterList[index]     = mThis.characterList[index - 1];
        mThis.characterList[index - 1] = temp;

        var obj = mThis.characterList.find(function(c){ return c.currentTurn == true; });
        var i   = mThis.characterList.findIndex(function(c){ return c == obj; });
        mThis.currentCharIndex = i
        }
      };

    /**************************************************************************
    * updateRound */
    /**
    * Updates the round counter and time/header information.
    **************************************************************************/
    var updateRound = function()
      {
      var seconds = ((mThis.roundCounter * 6) % 60);
      var minutes = (Math.floor(mThis.roundCounter / 10));

      mThis.secondCounter = ("0" + seconds).slice(-2);
      mThis.minuteCounter = ("0" + minutes).slice(-2);
      };
    }//END initiativeTracker5eController
  })();
