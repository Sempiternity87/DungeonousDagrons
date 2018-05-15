(function()
  {
  "use strict"

  angular.module("app")

  /****************************************************************************
  * Constructor Factory: Character5e
  *
  * Returns a constructor function to create objects to manage Character
  * objects.
  ****************************************************************************/
  .factory("Character5e",function(Ability5e, Skill5e)
    {
    /**************************************************************************
    * Class: Character
    *
    * This class manages the main data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Character5e(src)
      {
      //TODO CH  xp, acItems(obj array), gear(obj array), gear weight, feats(string array), special abilities(string array), pp, gp, sp, cp, spells(string array), domains/school string, notes
      /** Self reference. */
      var mThis = this;

      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Character object. */
      var mCharacter = src || {};

      /** Accessor for source object. */
      mThis.getSource = function() { return angular.copy(mCharacter); };

      /** Set abilities to Ability typed objects. */
      mThis.abilities = mCharacter.abilities.map(ability => new Ability5e(ability));
      mThis.saves     = mCharacter.saves    .map(save    => new Skill5e(save,  getAbilityMod(save.ability),  mCharacter.proficiency));
      mThis.skills    = mCharacter.skills   .map(skill   => new Skill5e(skill, getAbilityMod(skill.ability), mCharacter.proficiency));

      /************************************************************************
      * Methods
      ************************************************************************/
      function getAbilityMod(abilityName)
        {
        var mod = 0;
        mThis.abilities.forEach(function(ability)
          {
          if (ability.shortName == abilityName)
            mod = ability.mod;
          });

        return mod;
        }

      /************************************************************************
      * Accessors
      ************************************************************************/
      /** Accessor for ID. */
      Object.defineProperty(mThis, 'id',
        {
        get: function(){ return Number(mCharacter.id); }
        });

      /** Accessor for Armor Class. */
      Object.defineProperty(mThis, 'ac',
        {
        get: function()
          {
          // var ac = 10 + mThis.armorBonus + mThis.shieldBonus +  mThis.calculateAttributeModifier(mThis.dex, mThis.dexTempAdjustment) + mThis.sizeMod +  mThis.naturalArmor + mThis.deflectionMod + mThis.asMiscMod;
          // return Number(ac);
          }
        });

      /** Accessor for Age, int */
      Object.defineProperty(mThis, 'age',
        {
        get: function(){ return Number(mCharacter.age); },
        set: function(val){ return mCharacter.age = Number(val); }
        });

      /** Accessor for Alignment, string. */
      Object.defineProperty(mThis, 'alignment',
        {
        get: function(){ return mCharacter.alignment; },
        set: function(val){ return mCharacter.alignment = val; }
        });

      /** Accessor for Base Speed in feet, int. */
      Object.defineProperty(mThis, 'baseSpeed',
        {
        get: function(){ return Number(mCharacter.baseSpeed); },
        set: function(val){ return mCharacter.baseSpeed = Number(val); }
        });

      /** Accessor for Eyes, string. */
      Object.defineProperty(mThis, 'eyes',
        {
        get: function(){ return mCharacter.eyes; },
        set: function(val){ return mCharacter.eyes = val; }
        });

      /** Accessor for experience, int. */
      Object.defineProperty(mThis, 'experience',
        {
        get: function(){ return Number(mCharacter.experience); },
        set: function(val){ return mCharacter.experience = Number(val); }
        });

      /** Accessor for Gender, string. */
      Object.defineProperty(mThis, 'gender',
        {
        get: function(){ return mCharacter.gender; },
        set: function(val){ return mCharacter.gender = val; }
        });

      /** Accessor for Hair, string. */
      Object.defineProperty(mThis, 'hair',
        {
        get: function(){ return mCharacter.hair; },
        set: function(val){ return mCharacter.hair = val; }
        });

      /** Accessor for Height (e.g. 5'6"), string. */
      Object.defineProperty(mThis, 'height',
        {
        get: function(){ return mCharacter.height; },
        set: function(val){ return mCharacter.height = val; }
        });

      /** Accessor for Hit Points, int. */
      Object.defineProperty(mThis, 'maxHP',
        {
        set: function(val){ return mCharacter.hp = Number(val); },
        get: function()
          {
          var hp = 0;

          mCharacter.levels.forEach(function(level)
            {
            hp += level.hp;
            });

          hp += (mThis.level * mThis.con);
          return Number(hp);
          }
        });

      /** Accessor for Current Hit Points, int. */
      Object.defineProperty(mThis, 'hpCurrent',
        {
        get: function(){ return Number(mCharacter.hpCurrent); },
        set: function(val){ return mCharacter.hpCurrent = Number(val); }
        });

      /** Accessor for Languages, string. */
      Object.defineProperty(mThis, 'languages',
        {
        get: function(){ return mCharacter.languages; },
        set: function(val){ return mCharacter.languages = val; }
        });

      /** Accessor for Level, string. */
      Object.defineProperty(mThis, 'level',
        {
        get: function(){ return mCharacter.levels.length; },
        set: function(val){ return mCharacter.level = val; }
        });

      /** Accessor for Name, string. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mCharacter.name; },
        set: function(val){ return mCharacter.name = val; }
        });

      /** Accessor for Race, string. */
      Object.defineProperty(mThis, 'race',
        {
        get: function(){ return mCharacter.race; },
        set: function(val){ return mCharacter.race = val; }
        });

      /** Accessor for list of Weapons, array. */
      Object.defineProperty(mThis, 'weapons',
        {
        get: function(){ return mCharacter.weapons; },
        set: function(val){ return mCharacter.weapons = val; }
        });

      /** Accessor for Weight in pounds, int. */
      Object.defineProperty(mThis, 'weight',
        {
        get: function(){ return Number(mCharacter.weight); },
        set: function(val){ return mCharacter.weight = Number(val); }
        });
      }

    return Character5e;
    });//END Character factory.
  })();




























