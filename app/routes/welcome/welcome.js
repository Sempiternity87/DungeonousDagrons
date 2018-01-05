(function()
  {
  "use strict"

  angular.module("app")
 
  /*****************************************************************************
  * Component: welcome */
  /**
  * Defines the component for Welcome screen.
  *****************************************************************************/
  .component("welcome",
    {
    templateUrl:"app/routes/welcome/welcome.html",
    controller: WelcomeController
    });
    
  /*****************************************************************************
  * WelcomeController */
  /**
  * Controller for the Welcome component.
  *****************************************************************************/
  function WelcomeController($scope)
    {
    /** Reference to self. */ var mThis = this;
    }//END WelcomeController
  })();