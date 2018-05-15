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
    function Skill5e(src, mod, proficiency)
      {
      /** Self reference. */
      var mThis = this;

      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Skill object. */
      var mSkill = src || {};

      /** Accessor for source object. */
      mThis.getSource = function() { return angular.copy(mSkill); };

      mThis.proficiency = proficiency;

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
        get: function(){ return Number(mod); }
        });

      /** Accessor for Ability name. */
      Object.defineProperty(mThis, 'abilityName',
        {
        get: function() { return  mSkill.ability; }
        });

      /** Accessor for double proficient skill. */
      Object.defineProperty(mThis, 'doubleProficient',
        {
        get: function(){ return mSkill.doubleProficient; }
        });

      /** Accessor for proficient skill. */
      Object.defineProperty(mThis, 'proficient',
        {
        get: function(){ return mSkill.proficient; }
        });

      /** Accessor for Name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mSkill.name; }
        });

      /** Accessor for Value. */
      Object.defineProperty(mThis, 'value',
        {
        get: function()
          {
          return Number(mod + (mThis.proficient ? mThis.proficiency * (mThis.doubleProficient ? 2 : 1) : 0));
          }
        });
      }

    return Skill5e;
    });//END Skill factory.
  })();
