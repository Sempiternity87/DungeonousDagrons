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
      name:         "" //Name of character.
      ,init:        0  //Initiative.
      ,hp:          0  //Health Points.
      ,ac:          0  //Armor Class.
      ,touch:       0  //Touch AC.
      ,bab:         0  //Base Attack Bonus.
      ,cmb:         0  //Combat Maneuver Bonus.
      ,cmd:         0  //Combat Maneuver Defense.
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
      mThis.characterList.push({id: currentID, name:"No Name", currentTurn: false});
      };
      
    /**************************************************************************
    * add */
    /**
    * Adds a new row to the data grid.
    **************************************************************************/
    mThis.add = function()
      {
      currentID++;
      mThis.characterList.push({id: currentID, name:"No Name"});
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
      if(mThis.currentCharIndex >= 0)
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
    * previousTurn */
    /**
    * Moves the current turn marker to the previous character in the queue.
    * This method does nothing to the round information.
    **************************************************************************/
    mThis.previousTurn = function()
      {
      /** Change turn for current character. */
      mThis.characterList[mThis.currentCharIndex].currentTurn = false;
      
      /** Move to next character in list. */
      if(mThis.currentCharIndex > 0)
        {
        mThis.currentCharIndex--;
        }
      
      /** Prevent from going out of bounds. */
      else
        {
        mThis.currentCharIndex = 0;
        }
      
      /** Change turn for next character. */
      mThis.characterList[mThis.currentCharIndex].currentTurn = true;
      };
     
    /**************************************************************************
    * remove */
    /**
    * Removes object from Tracker Grid.
    **************************************************************************/
    mThis.remove = function(id)
      {
      mThis.characterList = mThis.characterList.filter(function(e){ return e.id != id; });
      
      /** Move up a position in the list. */
      if(mThis.currentCharIndex >= mThis.characterList.length)
        mThis.currentCharIndex--;  
    
      /** Deleted the last element. */
      if(mThis.characterList.length <= 0)
        mThis.currentCharIndex = -1;
      
      /** Set the new turn owner. */
      if(mThis.currentCharIndex > -1)
        mThis.characterList[mThis.currentCharIndex].currentTurn = true;
      };
     
    /**************************************************************************
    * reset */
    /**
    * Resets counters and turn owner.
    **************************************************************************/
    mThis.reset = function()
      {
      mThis.secondCounter = "00";
      mThis.minuteCounter = "00";
      mThis.roundCounter = 0;
      
      /** Reset all turn values. Overkill. */
      for (var i = 0; i < mThis.characterList.length; i++)
        mThis.characterList[i].currentTurn = false;
      
      mThis.currentCharIndex = -1;
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
      return !obj ? "" : obj.name + "'s turn";
      }
     
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
    * Updates the round counter and time counters.
    **************************************************************************/
    var updateRound = function()
      {
      mThis.roundCounter++;

      var seconds = ((mThis.roundCounter * 6) % 60);
      var minutes = (Math.floor(mThis.roundCounter / 10));
      
      mThis.secondCounter = ("0" + seconds).slice(-2);
      mThis.minuteCounter = ("0" + minutes).slice(-2);
      };
      
    }//END InitiativeTrackerController
  })();