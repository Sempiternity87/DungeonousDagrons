(function()
  {
  "use strict"

  angular.module("app")

  /****************************************************************************
  * Constructor Factory: Weapon5e
  *
  * Returns a constructor function to create objects to manage Weapon
  * objects.
  ****************************************************************************/
  .factory("Weapon5e",function()
    {
    /**************************************************************************
    * Class: Weapon
    *
    * This class manages the weapon data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Weapon5e(src)
      {
      /** Self reference. */
      var mThis = this;

      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Weapon object. */
      var mWeapon = src || {};
      /** Accessor for source object. */
      mThis.getSource = function() { return angular.copy(mWeapon); };

      /************************************************************************
      * Methods
      ************************************************************************/
      /************************************************************************
      * Accessors
      ************************************************************************/
      /** Accessor for ID. */
      Object.defineProperty(mThis, 'id',
        {
        get: function(){ return Number(mWeapon.id); }
        });

      /** Accessor for Ammunition. */
      Object.defineProperty(mThis, 'ammunition',
        {
        get: function(){ return mWeapon.ammunition; },
        set: function(val){ return mWeapon.ammunition = val; }
        });

      /** Accessor for Attack Bonus. */
      Object.defineProperty(mThis, 'attackBonus',
        {
        get: function(){ return Number(mWeapon.attackBonus); },
        set: function(val){ return mWeapon.attackBonus = Number(val); }
        });

      /** Accessor for Critical. */
      Object.defineProperty(mThis, 'critical',
        {
        get: function(){ return mWeapon.critical; },
        set: function(val){ return mWeapon.critical = val; }
        });

      /** Accessor for Damage. */
      Object.defineProperty(mThis, 'damage',
        {
        get: function(){ return mWeapon.damage; },
        set: function(val){ return mWeapon.damage = val; }
        });

      /** Accessor for Name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mWeapon.name; },
        set: function(val){ return mWeapon.name = val; }
        });

      /** Accessor for Range. */
      Object.defineProperty(mThis, 'range',
        {
        get: function(){ return mWeapon.range; },
        set: function(val){ return mWeapon.range = val; }
        });

      /** Accessor for Type. */
      Object.defineProperty(mThis, 'type',
        {
        get: function(){ return mWeapon.type; },
        set: function(val){ return mWeapon.type = val; }
        });
      }

    return Weapon;
    });//END Weapon factory.
  })();
