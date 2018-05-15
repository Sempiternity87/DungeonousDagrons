(function()
  {
  "use strict"

  angular.module("app")

  /****************************************************************************
  * Constructor Factory: Ability5e
  *
  * Returns a constructor function to create objects to manage Ability
  * objects.
  ****************************************************************************/
  .factory("Ability5e",function()
    {
    /**************************************************************************
    * Class: Ability
    *
    * This class manages the Ability data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Ability5e(src)
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
      * Accessors
      ************************************************************************/
      /** Accessor for ID. */
      Object.defineProperty(mThis, 'id',
        {
        get: function(){ return Number(mAbility.id); }
        });

      /** Accessor for Ability score. */
      Object.defineProperty(mThis, 'score',
        {
        get: function(){ return Number(mAbility.score); }
        });

      /** Accessor for ShortName. */
      Object.defineProperty(mThis, 'shortName',
        {
        get: function() { return mAbility.shortName; }
        });

      /** Accessor for Name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mAbility.name; }
        });

      /** Accessor for Ability mod. */
      Object.defineProperty(mThis, 'mod',
        {
        get: function() { return Number(Math.floor((mThis.score - 10) / 2)); }
        });
      }

    return Ability5e;
    });//END Ability 5e factory.
  })();
