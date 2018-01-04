(function()
  {
  "use strict"

  /** Die object definition for reference. */
  var die =
    {
    sides   : 0, //Number of sides.
    quantity: 0, //Quantity rolled.
    modifier: 0, //+/- integer to modify roll by.
    result  : 0, //(sides * qty) + modifier.
    image   : "" //Image to use for button.
    };

  angular.module("app")
 
  /*****************************************************************************
  * Component: dice */
  /**
  * Defines the component for dice.
  *****************************************************************************/
  .component("dice",
    {
    templateUrl:"app/routes/dice/dice.html",
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
      /** Load the dice list. */
      mThis.dice = 
        [
        {sides: 100, quantity: 1, modifier: 0, result: 0, image: "app/assets/images/d100.png"},
        {sides: 20,  quantity: 1, modifier: 0, result: 0, image: "app/assets/images/d20.png"},
        {sides: 12,  quantity: 1, modifier: 0, result: 0, image: "app/assets/images/d12.png"},
        {sides: 10,  quantity: 1, modifier: 0, result: 0, image: "app/assets/images/d10.png"},
        {sides: 8,   quantity: 1, modifier: 0, result: 0, image: "app/assets/images/d8.png"},
        {sides: 6,   quantity: 1, modifier: 0, result: 0, image: "app/assets/images/d6.png"},
        {sides: 4,   quantity: 1, modifier: 0, result: 0, image: "app/assets/images/d4.png"}
        ];
      };
      
    /***************************************************************************
    * roll */
    /**
    * Generate random number based on passed in die object.
    *
    * @param  die  Die object to roll.
    ***************************************************************************/
    mThis.roll = function(die)
      {
      var i      = 0;
      var result = 0;
      var sides  = Number(die.sides);
      var qty    = Number(die.quantity);
      
      die.result = 0;
      
      for(; i < qty; i++)
        {
        result += Number(chance["d"+ sides]());
        }
      
      die.result += Number(die.modifier) + result;
      }
      
    }//END DiceController
  })();