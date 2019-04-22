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
    * This class manages the skill data object for the Character Sheet
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
        set: function(val){ mSkill.abilityMod = Number(val); }
        });
      
      /** Accessor for is a Class Skill. */
      Object.defineProperty(mThis, 'isClassSkill',
        {
        get: function(){ return mSkill.isClassSkill; },
        set: function(val){ mSkill.isClassSkill = val; }
        });
      
      /** Accessor for Miscellaneous Modifier. */
      Object.defineProperty(mThis, 'miscMod',
        {
        get: function(){ return Number(mSkill.miscMod); },
        set: function(val){ mSkill.miscMod = Number(val); }
        });
      
      /** Accessor for Name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mSkill.name; },
        set: function(val){ mSkill.name = val; }
        });
        
      /** Accessor for Ranks. */
      Object.defineProperty(mThis, 'ranks',
        {
        get: function(){ return Number(mSkill.ranks); },
        set: function(val){ mSkill.ranks = Number(val); }
        });
        
      /** Accessor for Trained Only. */
      Object.defineProperty(mThis, 'trainedOnly',
        {
        get: function(){ return mSkill.trainedOnly; },
        set: function(val){ mSkill.trainedOnly = val; }
        });
      }
      
    return Skill;
    });//END Skill factory.
  })();
  