(function()
  {
  "use strict"

  angular.module("app")
 
  /****************************************************************************
  * Constructor Factory: Ability
  *
  * Returns a constructor function to create objects to manage Ability
  * objects.
  ****************************************************************************/
  .factory("Ability",function()
    {
    /**************************************************************************
    * Class: Ability
    *
    * This class manages the Ability data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Ability(src)
      {
      /** Self reference. */
      var mThis = this;
      
      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Ability object. */
      var mAbility = src || {};
      /** Accessor for source object. */
      mThis.getSource = function() { return angular.copy(mAbility); };

      /************************************************************************
      * Methods
      ************************************************************************/
      /************************************************************************
      * calculateAttributeModifier */
      /**
      * Calculates the modifier of the passed in attribute. (attr - 10) / 2.
      * eg 10 returns 0, 12 returns 1, 13 returns 1, 9 returns -1.
      *
      * @param  attr            Attribute like Strength or Dexterity.
      * @param  attrAdjustment  Attribute adjustment (e.g. temp adustment).
      ************************************************************************/
      mThis.calculateAttributeModifier = function()
        {
        return Math.floor((mThis.score - 10) / 2);
        }
      
      /************************************************************************
      * Accessors
      ************************************************************************/
      /** Accessor for ID. */
      Object.defineProperty(mThis, 'id',
        {
        get: function(){ return Number(mAbility.id); }
        });

      /** Accessor for Name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mAbility.name; },
        set: function(val){ mAbility.name = val; }
        });
        
      /** Accessor for Ability Score. */
      Object.defineProperty(mThis, 'score',
        {
        get: function(){ return Number(mAbility.score + mAbility.tempAdjustment); },
        set: function(val){ mAbility.score = Number(val); }
        });
      
      /** Accessor for Temporary Adjusted Value. */
      Object.defineProperty(mThis, 'tempAdjustment',
        {
        get: function() { return Number(mAbility.tempAdjustment); },
        set: function(val) { mAbility.tempAdjustment = Number(val); } //TODO CH  Bug: It doesn't like when enterring negative numbers when '-' is the first character.
        });
      }
      
    return Ability;
    });//END Skill factory.
  })();
  