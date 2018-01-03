(function()
  {
  "use strict"

  /** Die object definition. */
  var die =
    {
    sides   : 0,
    quantity: 0,
    modifier: 0,
    result  : 0,
    image   : ""
    };

  
  angular.module("app")
 
  /*****************************************************************************
  * Component: dice */
  /**
  * Defines the component for dice.
  *****************************************************************************/
  .component("dice",
    {
    templateUrl:"app/dice/dice.html",
    controller: DiceController
    });
    
  /*****************************************************************************
  * DiceController */
  /**
  * Controller for the Form Dice component.
  *****************************************************************************/
  function DiceController($scope)
    {
    /** Reference to self. */ var mThis = this;

    /** List of dice. */
    mThis.dice = [];
       
    /***************************************************************************
    * $onInit */
    /**
    * Initialize the controller.
    ***************************************************************************/
    mThis.$onInit = function()
      {
      mThis.dice = 
        [
        {sides: 100, quantity: 0, modifier: 0, result: 0, image: "app/assets/images/d100.png"},
        {sides: 20, quantity: 0, modifier: 0, result: 0, image: "app/assets/images/d20.png"},
        {sides: 12, quantity: 0, modifier: 0, result: 0, image: "app/assets/images/d12.png"},
        {sides: 10, quantity: 0, modifier: 0, result: 0, image: "app/assets/images/d10.png"},
        {sides: 8, quantity: 0, modifier: 0, result: 0, image: "app/assets/images/d8.png"},
        {sides: 6, quantity: 0, modifier: 0, result: 0, image: "app/assets/images/d6.png"},
        {sides: 4, quantity: 0, modifier: 0, result: 0, image: "app/assets/images/d4.png"}
        ];
      };
      
    /***************************************************************************
    * $onInit */
    /**
    * Initialize the controller.
    ***************************************************************************/
    mThis.roll = function(die)
      {
      var i = 0;
      for(; i < die.quantity; i++)
        {
        if(die.sides == 20)
          die.result += chance.d20();
        }
      die.result += die.modifier;
      }
      
    }//END DiceController
  })();