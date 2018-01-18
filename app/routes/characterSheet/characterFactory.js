(function()
  {
  "use strict"

  angular.module("app")
 
  /****************************************************************************
  * Constructor Factory: Character
  *
  * Returns a constructor function to create objects to manage Character
  * objects.
  ****************************************************************************/
  .factory("Character",function()
    {
    /**************************************************************************
    * Class: Character
    *
    * This class manages the main data object for the Character Sheet
    * application.
    *
    * @param  src  Source object to populate properties.
    **************************************************************************/
    function Character(src)
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
      mThis.calculateAttributeModifier(attr, attrAdjustment)
        {
        return Math.floor((attr + attrMod - 10) / 2);
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
          {//TODO CH  SIZE MODIFIER
          var ac = 10 + mThis.armorBonus + mThis.shieldBonus +  mThis.calculateAttributeModifier(mThis.dex, mThis.dexTempAdjustment) + mThis.sizeMod +  mThis.naturalArmor + mThis.deflectionMod + mThis.asMiscMod;
          return Number(ac);
          }
        });
      
      /** Accessor for Miscelaneous Armor Modifier, int. */
      Object.defineProperty(mThis, 'asMiscMod',
        {
        get: function(){ return Number(mCharacter.asMiscMod); }
        set: function(val){ return mCharacter.asMiscMod = Number(val); }
        });
      
      /** Accessor for Age, int */
      Object.defineProperty(mThis, 'age',
        {
        get: function(){ return Number(mCharacter.age); }
        set: function(val){ return mCharacter.age = Number(val); }
        });
        
      /** Accessor for Alignment, string. */
      Object.defineProperty(mThis, 'alignment',
        {
        get: function(){ return mCharacter.alignment; }
        set: function(val){ return mCharacter.alignment = val; }
        });
            
      /** Accessor for Bonus for wearing Armor, int. */
      Object.defineProperty(mThis, 'armorBonus',
        {
        get: function(){ return Number(mCharacter.armorBonus); }
        set: function(val){ return mCharacter.armorBonus = Number(val); }
        });
      
      /** Accessor for Base Attack Bonus, int. */
      Object.defineProperty(mThis, 'bab',
        {
        get: function(){ return Number(mCharacter.bab); }
        set: function(val){ return mCharacter.bab = Number(val); }
        });
                
      /** Accessor for Base Speed in feet, int. */
      Object.defineProperty(mThis, 'baseSpeed',
        {
        get: function(){ return Number(mCharacter.baseSpeed); }
        set: function(val){ return mCharacter.baseSpeed = Number(val); }
        });
          
      /** Accessor for Burrow Speed in feet, int. */
      Object.defineProperty(mThis, 'burrowSpeed',
        {
        get: function(){ return Number(mCharacter.burrowSpeed); }
        set: function(val){ return mCharacter.burrowSpeed = Number(val); }
        });
        
      /** Accessor for Charisma, int. */
      Object.defineProperty(mThis, 'cha',
        {
        get: function(){ return Number(mCharacter.cha); }
        set: function(val){ return mCharacter.cha = Number(val); }
        });
      
      /** Accessor for Charisma Temp Adjustment, int. */
      Object.defineProperty(mThis, 'chaTempAdjustment',
        {
        get: function(){ return Number(mCharacter.chaTempAdjustment); }
        set: function(val){ return mCharacter.chaTempAdjustment = Number(val); }
        });
      
      /** Accessor for Climb Speed in feet, int. */
      Object.defineProperty(mThis, 'climbSpeed',
        {
        get: function(){ return Number(mCharacter.climbSpeed); }
        set: function(val){ return mCharacter.climbSpeed = Number(val); }
        });
        
      /** Accessor for Constitution, int. */
      Object.defineProperty(mThis, 'con',
        {
        get: function(){ return Number(mCharacter.con); }
        set: function(val){ return mCharacter.con = Number(val); }
        });
        
      /** Accessor for Constitution Temp Adjustment, int. */
      Object.defineProperty(mThis, 'conTempAdjustment',
        {
        get: function(){ return Number(mCharacter.conTempAdjustment); }
        set: function(val){ return mCharacter.conTempAdjustment = Number(val); }
        });
        
      /** Accessor for Deflection Modifier, int. */
      Object.defineProperty(mThis, 'deflectionMod',
        {
        get: function(){ return Number(mCharacter.deflectionMod); }
        set: function(val){ return mCharacter.deflectionMod = Number(val); }
        });
        
      /** Accessor for Deity, string. */
      Object.defineProperty(mThis, 'deity',
        {
        get: function(){ return mCharacter.deity; }
        set: function(val){ return mCharacter.deity = val; }
        });
      
      /** Accessor for Dexterity, int. */
      Object.defineProperty(mThis, 'dex',
        {
        get: function(){ return Number(mCharacter.dex); }
        set: function(val){ return mCharacter.dex = Number(val); }
        });
        
      /** Accessor for Dexterity Temp Adjustment, int. */
      Object.defineProperty(mThis, 'dexTempAdjustment',
        {
        get: function(){ return Number(mCharacter.dexTempAdjustment); }
        set: function(val){ return mCharacter.dexTempAdjustment = Number(val); }
        });
       
      /** Accessor for Damage Resistance, int. */
      Object.defineProperty(mThis, 'dr',
        {
        get: function(){ return Number(mCharacter.dr); }
        set: function(val){ return mCharacter.dr = Number(val); }
        });
             
      /** Accessor for Eyes, string. */
      Object.defineProperty(mThis, 'eyes',
        {
        get: function(){ return mCharacter.eyes; }
        set: function(val){ return mCharacter.eyes = val; }
        });
        
      /** Accessor for Fortitude Base Save, int. */
      Object.defineProperty(mThis, 'fortBase',
        {
        get: function(){ return Number(mCharacter.fortBase); }
        set: function(val){ return mCharacter.fortBase = Number(val); }
        });
        
      /** Accessor for Fortitude Save Magic Modifier, int. */
      Object.defineProperty(mThis, 'fortMagicMod',
        {
        get: function(){ return Number(mCharacter.fortMagicMod); }
        set: function(val){ return mCharacter.fortMagicMod = Number(val); }
        });

      /** Accessor for Fortitude Save Miscellaneous Modifier, int. */
      Object.defineProperty(mThis, 'fortMiscMod',
        {
        get: function(){ return Number(mCharacter.fortMagicMod); }
        set: function(val){ return mCharacter.fortMagicMod = Number(val); }
        });        

      /** Accessor for Fortitude Save Temporary Modifier, int. */
      Object.defineProperty(mThis, 'fortTempMod',
        {
        get: function(){ return Number(mCharacter.fortTempMod); }
        set: function(val){ return mCharacter.fortTempMod = Number(val); }
        });
        
      /** Accessor for Gender, string. */
      Object.defineProperty(mThis, 'gender',
        {
        get: function(){ return mCharacter.gender; }
        set: function(val){ return mCharacter.gender = val; }
        });
               
      /** Accessor for Fly Speed in feet, int. */
      Object.defineProperty(mThis, 'flySpeed',
        {
        get: function(){ return Number(mCharacter.flySpeed); }
        set: function(val){ return mCharacter.flySpeed = Number(val); }
        });

      /** Accessor for Hair, string. */
      Object.defineProperty(mThis, 'hair',
        {
        get: function(){ return mCharacter.hair; }
        set: function(val){ return mCharacter.hair = val; }
        });
        
      /** Accessor for Height (e.g. 5'6"), string. */
      Object.defineProperty(mThis, 'height',
        {
        get: function(){ return mCharacter.height; }
        set: function(val){ return mCharacter.height = val; }
        });
        
      /** Accessor for Home Land, string. */
      Object.defineProperty(mThis, 'homeLand',
        {
        get: function(){ return mCharacter.homeLand; }
        set: function(val){ return mCharacter.homeLand = val; }
        });
            
      /** Accessor for Hit Points, int. */
      Object.defineProperty(mThis, 'hp',
        {
        get: function(){ return Number(mCharacter.hp); }
        set: function(val){ return mCharacter.hp = Number(val); }
        });
           
      /** Accessor for Current Hit Points, int. */
      Object.defineProperty(mThis, 'hpCurrent',
        {
        get: function(){ return Number(mCharacter.hpCurrent); }
        set: function(val){ return mCharacter.hpCurrent = Number(val); }
        });
           
      /** Accessor for Intelligence, int. */
      Object.defineProperty(mThis, 'int',
        {
        get: function(){ return Number(mCharacter.int); }
        set: function(val){ return mCharacter.int = Number(val); }
        });
      
      /** Accessor for Intelligence Temp Adjustment, int. */
      Object.defineProperty(mThis, 'intTempAdjustment',
        {
        get: function(){ return Number(mCharacter.intTempAdjustment); }
        set: function(val){ return mCharacter.intTempAdjustment = Number(val); }
        });
       
      /** Accessor for Miscelaneous Initiative Modifier, int. */
      Object.defineProperty(mThis, 'initiativeMiscMod',
        {
        get: function(){ return Number(mCharacter.initiativeMiscMod); }
        set: function(val){ return mCharacter.initiativeMiscMod = Number(val); }
        });
      
      /** Accessor for Languages, string. */
      Object.defineProperty(mThis, 'languages',
        {
        get: function(){ return mCharacter.languages; }
        set: function(val){ return mCharacter.languages = val; }
        });
      
      /** Accessor for Name, string. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mCharacter.name; }
        set: function(val){ return mCharacter.name = val; }
        });

      /** Accessor for Natural Armor Bonus, int. */
      Object.defineProperty(mThis, 'naturalArmor',
        {
        get: function(){ return Number(mCharacter.naturalArmor); }
        set: function(val){ return mCharacter.naturalArmor = Number(val); }
        });
      
      /** Accessor for Nonlethal Damage, int. */
      Object.defineProperty(mThis, 'nonLethalDamage',
        {
        get: function(){ return Number(mCharacter.nonLethalDamage); }
        set: function(val){ return mCharacter.nonLethalDamage = Number(val); }
        });
      
      /** Accessor for Race, string. */
      Object.defineProperty(mThis, 'race',
        {
        get: function(){ return mCharacter.race; }
        set: function(val){ return mCharacter.race = val; }
        });
      
      /** Accessor for Base Reflex Save, int. */
      Object.defineProperty(mThis, 'refBase',
        {
        get: function(){ return Number(mCharacter.refBase); }
        set: function(val){ return mCharacter.refBase = Number(val); }
        });
        
      /** Accessor for Reflex Save Magic Modifier, int. */
      Object.defineProperty(mThis, 'refMagicMod',
        {
        get: function(){ return Number(mCharacter.refMagicMod); }
        set: function(val){ return mCharacter.refMagicMod = Number(val); }
        });
      
      /** Accessor for Reflex Save Miscellaneous Modifier, int. */
      Object.defineProperty(mThis, 'refMiscMod',
        {
        get: function(){ return Number(mCharacter.refMiscMod); }
        set: function(val){ return mCharacter.refMiscMod = Number(val); }
        });        

      /** Accessor for Reflex Save Temporary Modifier, int. */
      Object.defineProperty(mThis, 'refTempMod',
        {
        get: function(){ return Number(mCharacter.refTempMod); }
        set: function(val){ return mCharacter.refTempMod = Number(val); }
        });
      
      /** Accessor for Shield AC Bonus, int. */
      Object.defineProperty(mThis, 'shieldBonus',
        {
        get: function(){ return Number(mCharacter.shieldBonus); }
        set: function(val){ return mCharacter.shieldBonus = Number(val); }
        });
  
      /** Accessor for Size (e.g. small/medium/large), string. */
      Object.defineProperty(mThis, 'size',
        {
        get: function(){ return mCharacter.size; }
        set: function(val){ return mCharacter.size = val; }
        });
          
      /** Accessor for Size Modifier, int. */
      Object.defineProperty(mThis, 'sizeMod',
        {
        get: function(){ return Number(mCharacter.sizeMod); }
        set: function(val){ return mCharacter.sizeMod = Number(val); }
        });
      
      /** Accessor for list of Skills, array. */
      Object.defineProperty(mThis, 'skills',
        {
        get: function(){ return mCharacter.skills; }
        set: function(val){ return mCharacter.skills = val; }
        });
        
      /** Accessor for Speed while wearing armor in feet, int. */
      Object.defineProperty(mThis, 'speedWithArmor',
        {
        get: function(){ return mCharacter.Number(speedWithArmor); }
        set: function(val){ return mCharacter.speedWithArmor = Number(val); }
        });
        
      /** Accessor for Strength, int. */
      Object.defineProperty(mThis, 'str',
        {
        get: function(){ return Number(mCharacter.str); }
        set: function(val){ return mCharacter.str = Number(val); }
        });

      /** Accessor for Strength Temp Adjustment, int. */
      Object.defineProperty(mThis, 'strTempAdjustment',
        {
        get: function(){ return Number(mCharacter.strTempAdjustment); }
        set: function(val){ return mCharacter.strTempAdjustment = Number(val); }
        });
      
      /** Accessor for Speed while swimming in feet, int. */
      Object.defineProperty(mThis, 'swimSpeed',
        {
        get: function(){ return Number(mCharacter.swimSpeed); }
        set: function(val){ return mCharacter.swimSpeed = Number(val); }
        });

      /** Accessor for list of Weapons, array. */
      Object.defineProperty(mThis, 'weapons',
        {
        get: function(){ return mCharacter.weapons; }
        set: function(val){ return mCharacter.weapons = val; }
        });
        
      /** Accessor for Weight in pounds, int. */
      Object.defineProperty(mThis, 'weight',
        {
        get: function(){ return Number(mCharacter.weight); }
        set: function(val){ return mCharacter.weight = Number(val); }
        });
      
      /** Accessor for Base Will Save, int. */
      Object.defineProperty(mThis, 'willBase',
        {
        get: function(){ return Number(mCharacter.willBase); }
        set: function(val){ return mCharacter.willBase = Number(val); }
        });
              
      /** Accessor for Will Save Magic Modifier, int. */
      Object.defineProperty(mThis, 'willMagicMod',
        {
        get: function(){ return Number(mCharacter.willMagicMod); }
        set: function(val){ return mCharacter.willMagicMod = Number(val); }
        });
      
      /** Accessor for Will Save Miscellaneous Modifier, int. */
      Object.defineProperty(mThis, 'willMiscMod',
        {
        get: function(){ return Number(mCharacter.willMiscMod); }
        set: function(val){ return mCharacter.willMiscMod = Number(val); }
        });        

      /** Accessor for Will Save Temporary Modifier, int. */
      Object.defineProperty(mThis, 'willTempMod',
        {
        get: function(){ return Number(mCharacter.willTempMod); }
        set: function(val){ return mCharacter.willTempMod = Number(val); }
        });
      
      /** Accessor for Wisdom, int. */
      Object.defineProperty(mThis, 'wis',
        {
        get: function(){ return Number(mCharacter.wis); }
        set: function(val){ return mCharacter.wis = Number(val); }
        });
        
      /** Accessor for Wisdom Temp Adjustment, int. */
      Object.defineProperty(mThis, 'wisTempAdjustment',
        {
        get: function(){ return Number(mCharacter.wisTempAdjustment); }
        set: function(val){ return mCharacter.wisTempAdjustment = Number(val); }
        });
      }
      
    return Character;    
    });//END Character factory.
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  