(function()
  {
  "use strict"

  angular.module("app")
 
  /****************************************************************************
  * Constructor Factory: Skill
  *
  * Returns a constructor function to create objects to manage Skill
  * objects.
  ****************************************************************************/
  .factory("Skill",function()
    {
    /**************************************************************************
    * Class: Skill
    *
    * This class manages the main data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Skill(src)
      {
      /** Self reference. */
      var mThis = this;
      
      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Skill object. */
      var mSkill = src || {};
      /** Accessor for source object. */
      mThis.getSource = function() { return mSkill; };

      /************************************************************************
      * Methods
      ************************************************************************/
      /************************************************************************
      * Accessors
      ************************************************************************/
      /** Accessor for ID. */
      Object.defineProperty(mThis, 'id',
        {
        get: function(){ return Number(mSkill.id); }
        });
      }
      
    return Skill;
    });//END Skill factory.
  })();
  