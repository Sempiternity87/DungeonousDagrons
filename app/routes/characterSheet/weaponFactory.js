(function()
  {
  "use strict"

  angular.module("app")
 
  /****************************************************************************
  * Constructor Factory: Weapon
  *
  * Returns a constructor function to create objects to manage Weapon
  * objects.
  ****************************************************************************/
  .factory("Weapon",function()
    {
    /**************************************************************************
    * Class: Weapon
    *
    * This class manages the main data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Weapon(src)
      {
      /** Self reference. */
      var mThis = this;
      
      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Weapon object. */
      var mWeapon = src || {};
      /** Accessor for source object. */
      mThis.getSource = function() { return mWeapon; };

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
      }
      
    return Weapon;
    });//END Weapon factory.
  })();
  