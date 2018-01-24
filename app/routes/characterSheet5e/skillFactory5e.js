(function()
  {
  "use strict"

  angular.module("app")
 
  /****************************************************************************
  * Constructor Factory: Skill5e
  *
  * Returns a constructor function to create objects to manage Skill
  * objects.
  ****************************************************************************/
  .factory("Skill5e",function()
    {
    /**************************************************************************
    * Class: Skill
    *
    * This class manages the skill data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Skill5e(src)
      {
      /** Self reference. */
      var mThis = this;
      
      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Skill object. */
      var mSkill = src || {};
      /** Accessor for source object. */
      mThis.getSource = function() { return angular.copy(mSkill); };

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

      /** Accessor for Ability Modifier. */
      Object.defineProperty(mThis, 'abilityMod',
        {
        get: function(){ return Number(mSkill.abilityMod); },
        set: function(val){ return mSkill.abilityMod = Number(val); }
        });
      
      /** Accessor for double proficient skill. */
      Object.defineProperty(mThis, 'isDoubleProficient',
        {
        get: function(){ return mSkill.isDoubleProficient; },
        set: function(val){ return mSkill.isProcient = val; }
        });
      
      /** Accessor for proficient skill. */
      Object.defineProperty(mThis, 'isProficient',
        {
        get: function(){ return mSkill.isProficient; },
        set: function(val){ return mSkill.isProficient = val; }
        });

      /** Accessor for Name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mSkill.name; },
        set: function(val){ return mSkill.name = val; }
        });
      }
      
    return Skill;
    });//END Skill factory.
  })();
  