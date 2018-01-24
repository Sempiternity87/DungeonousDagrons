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
  .factory("Character5e",function()
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
      mThis.calculateAttributeModifier = function(attr, attrAdjustment)
        {
        return Math.floor((attr + attrMod - 10) / 2);
        };
        
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
          {//TODO CH  SIZE MODIFIER
          var ac = 10 + mThis.armorBonus + mThis.shieldBonus +  mThis.calculateAttributeModifier(mThis.dex, mThis.dexTempAdjustment) + mThis.sizeMod +  mThis.naturalArmor + mThis.deflectionMod + mThis.asMiscMod;
          return Number(ac);
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
        
      /** Accessor for Charisma, int. */
      Object.defineProperty(mThis, 'cha',
        {
        get: function(){ return Number(mCharacter.cha); },
        set: function(val){ return mCharacter.cha = Number(val); }
        });
        
      /** Accessor for Constitution, int. */
      Object.defineProperty(mThis, 'con',
        {
        set: function(val){ return mCharacter.con = Number(val); },
        get: function()
          {
          var constitution = {};

          mCharacter.abilities.forEach(function(ability)
            {
            if (ability.name == 'Constitution')
              constitution = ability;
            });
          
          return Number(Math.floor((constitution.score - 10) / 2));
          }
        });
      
      /** Accessor for Dexterity, int. */
      Object.defineProperty(mThis, 'dex',
        {
        get: function(){ return Number(mCharacter.dex); },
        set: function(val){ return mCharacter.dex = Number(val); }
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
           
      /** Accessor for Intelligence, int. */
      Object.defineProperty(mThis, 'int',
        {
        get: function(){ return Number(mCharacter.int); },
        set: function(val){ return mCharacter.int = Number(val); }
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
      
      /** Accessor for list of Skills, array. */
      Object.defineProperty(mThis, 'skills',
        {
        get: function(){ return mCharacter.skills; },
        set: function(val){ return mCharacter.skills = val; }
        });
        
      /** Accessor for Strength, int. */
      Object.defineProperty(mThis, 'str',
        {
        get: function(){ return Number(mCharacter.str); },
        set: function(val){ return mCharacter.str = Number(val); }
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
      
      /** Accessor for Wisdom, int. */
      Object.defineProperty(mThis, 'wis',
        {
        get: function(){ return Number(mCharacter.wis); },
        set: function(val){ return mCharacter.wis = Number(val); }
        });
      }
      
    return Character5e;    
    });//END Character factory.
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  