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
    }//END InitiativeTrackerController
  })();