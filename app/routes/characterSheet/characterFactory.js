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
      /** Self reference. */
      var mThis = this;
      
      /** This design pattern prevents the source object reference from being modified. */
      /** Internal Character object. */
      var mCharacter = src || {};
      /** Accessor for source object. */
      mThis.getSource = function() { return mCharacter; };

      /************************************************************************
      * Methods
      ************************************************************************/
      /************************************************************************
      * calculateAttributeModifier */
      /**
      * Calculates the modifier of the passed in attribute. (attr - 10) / 2.
      * eg 10 returns 0, 12 returns 1, 13 returns 1, 9 returns -1.
      *
      * @param  attr  Attribute like Strength or Dexterity.
      ************************************************************************/
      mThis.calculateAttributeModifier(attr)
        {
        return Math.floor((attr-10) / 2);
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
          var ac = mThis.armorBonus + mThis.shieldBonus + mThis.naturalArmor mThis.deflectionMod + mThis.miscACMod + mThis.calculateAttributeModifier(mThis.dex);
          return Number(ac);
          }
        });
        
      /** Accessor for age. */
      Object.defineProperty(mThis, 'age',
        {
        get: function(){ return Number(mCharacter.age); }
        set: function(val){ return mCharacter.age = Number(val); }
        });
        
      /** Accessor for alignment. */
      Object.defineProperty(mThis, 'alignment',
        {
        get: function(){ return mCharacter.alignment; }
        set: function(val){ return mCharacter.alignment = val; }
        });
            
      /** Accessor for Bonus for wearing Armor. */
      Object.defineProperty(mThis, 'armorBonus',
        {
        get: function(){ return Number(mCharacter.armorBonus); }
        set: function(val){ return mCharacter.armorBonus = Number(val); }
        });
      
      /** Accessor for Base Attack Bonus. */
      Object.defineProperty(mThis, 'bab',
        {
        get: function(){ return Number(mCharacter.bab); }
        set: function(val){ return mCharacter.bab = Number(val); }
        });
                
      /** Accessor for Base Speed. */
      Object.defineProperty(mThis, 'baseSpeed',
        {
        get: function(){ return Number(mCharacter.baseSpeed); }
        set: function(val){ return mCharacter.baseSpeed = Number(val); }
        });
          
      /** Accessor for Burrow Speed. */
      Object.defineProperty(mThis, 'burrowSpeed',
        {
        get: function(){ return Number(mCharacter.burrowSpeed); }
        set: function(val){ return mCharacter.burrowSpeed = Number(val); }
        });
        
      /** Accessor for Charisma. */
      Object.defineProperty(mThis, 'cha',
        {
        get: function(){ return Number(mCharacter.cha); }
        set: function(val){ return mCharacter.cha = Number(val); }
        });
             
      /** Accessor for Climb Speed. */
      Object.defineProperty(mThis, 'climbSpeed',
        {
        get: function(){ return Number(mCharacter.climbSpeed); }
        set: function(val){ return mCharacter.climbSpeed = Number(val); }
        });
        
      /** Accessor for Constitution. */
      Object.defineProperty(mThis, 'con',
        {
        get: function(){ return Number(mCharacter.con); }
        set: function(val){ return mCharacter.con = Number(val); }
        });
        
      /** Accessor for Deflection Modifier. */
      Object.defineProperty(mThis, 'deflectionMod',
        {
        get: function(){ return Number(mCharacter.deflectionMod); }
        set: function(val){ return mCharacter.deflectionMod = Number(val); }
        });
        
      /** Accessor for deity. */
      Object.defineProperty(mThis, 'deity',
        {
        get: function(){ return mCharacter.deity; }
        set: function(val){ return mCharacter.deity = val; }
        });
      
      /** Accessor for Dexterity. */
      Object.defineProperty(mThis, 'dex',
        {
        get: function(){ return Number(mCharacter.dex); }
        set: function(val){ return mCharacter.dex = Number(val); }
        });
            
      /** Accessor for Damage Resistance. */
      Object.defineProperty(mThis, 'dr',
        {
        get: function(){ return Number(mCharacter.dr); }
        set: function(val){ return mCharacter.dr = Number(val); }
        });
             
      /** Accessor for eyes. */
      Object.defineProperty(mThis, 'eyes',
        {
        get: function(){ return mCharacter.eyes; }
        set: function(val){ return mCharacter.eyes = val; }
        });
        
      /** Accessor for Fortitude Base Save. */
      Object.defineProperty(mThis, 'fortBase',
        {
        get: function(){ return Number(mCharacter.fortBase); }
        set: function(val){ return mCharacter.fortBase = Number(val); }
        });
        
      /** Accessor for Fortitude Save magic modifier. */
      Object.defineProperty(mThis, 'fortMagicMod',
        {
        get: function(){ return Number(mCharacter.fortMagicMod); }
        set: function(val){ return mCharacter.fortMagicMod = Number(val); }
        });
        
      /** Accessor for gender. */
      Object.defineProperty(mThis, 'gender',
        {
        get: function(){ return mCharacter.gender; }
        set: function(val){ return mCharacter.gender = val; }
        });
               
      /** Accessor for Fly Speed. */
      Object.defineProperty(mThis, 'flySpeed',
        {
        get: function(){ return Number(mCharacter.flySpeed); }
        set: function(val){ return mCharacter.flySpeed = Number(val); }
        });

      /** Accessor for hair. */
      Object.defineProperty(mThis, 'hair',
        {
        get: function(){ return mCharacter.hair; }
        set: function(val){ return mCharacter.hair = val; }
        });
        
      /** Accessor for height. */
      Object.defineProperty(mThis, 'height',
        {
        get: function(){ return mCharacter.height; }
        set: function(val){ return mCharacter.height = val; }
        });
        
      /** Accessor for homeLand. */
      Object.defineProperty(mThis, 'homeLand',
        {
        get: function(){ return mCharacter.homeLand; }
        set: function(val){ return mCharacter.homeLand = val; }
        });
            
      /** Accessor for Hit Points. */
      Object.defineProperty(mThis, 'hp',
        {
        get: function(){ return Number(mCharacter.hp); }
        set: function(val){ return mCharacter.hp = Number(val); }
        });
           
      /** Accessor for Intelligence. */
      Object.defineProperty(mThis, 'int',
        {
        get: function(){ return Number(mCharacter.int); }
        set: function(val){ return mCharacter.int = Number(val); }
        });
        
      /** Accessor for Miscelaneous Armor Modifier. */
      Object.defineProperty(mThis, 'miscACMod',
        {
        get: function(){ return Number(mCharacter.miscACMod); }
        set: function(val){ return mCharacter.miscACMod = Number(val); }
        });
        
      /** Accessor for name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mCharacter.name; }
        set: function(val){ return mCharacter.name = val; }
        });

      /** Accessor for Natural Armor Bonus. */
      Object.defineProperty(mThis, 'naturalArmor',
        {
        get: function(){ return Number(mCharacter.naturalArmor); }
        set: function(val){ return mCharacter.naturalArmor = Number(val); }
        });
        
      /** Accessor for race. */
      Object.defineProperty(mThis, 'race',
        {
        get: function(){ return mCharacter.race; }
        set: function(val){ return mCharacter.race = val; }
        });
      
      /** Accessor for Base Reflex Save. */
      Object.defineProperty(mThis, 'refBase',
        {
        get: function(){ return Number(mCharacter.refBase); }
        set: function(val){ return mCharacter.refBase = Number(val); }
        });
        
      /** Accessor for Reflex Save magic modifier. */
      Object.defineProperty(mThis, 'refMagicMod',
        {
        get: function(){ return Number(mCharacter.refMagicMod); }
        set: function(val){ return mCharacter.refMagicMod = Number(val); }
        });
        
      /** Accessor for Shield AC Bonus. */
      Object.defineProperty(mThis, 'shieldBonus',
        {
        get: function(){ return Number(mCharacter.shieldBonus); }
        set: function(val){ return mCharacter.shieldBonus = Number(val); }
        });
  
      /** Accessor for size (e.g. small/medium/large). */
      Object.defineProperty(mThis, 'size',
        {
        get: function(){ return mCharacter.size; }
        set: function(val){ return mCharacter.size = val; }
        });
          
      /** Accessor for Size Modifier. */
      Object.defineProperty(mThis, 'sizeMod',
        {
        get: function(){ return Number(mCharacter.sizeMod); }
        set: function(val){ return mCharacter.sizeMod = Number(val); }
        });
      
      /** Accessor for list of Skills. */
      Object.defineProperty(mThis, 'skills',
        {
        get: function(){ return mCharacter.skills; }
        set: function(val){ return mCharacter.skills = val; }
        });
        
      /** Accessor for Speed while wearing armor in feet. */
      Object.defineProperty(mThis, 'speedWithArmor',
        {
        get: function(){ return mCharacter.Number(speedWithArmor); }
        set: function(val){ return mCharacter.speedWithArmor = Number(val); }
        });
        
      /** Accessor for Strength. */
      Object.defineProperty(mThis, 'str',
        {
        get: function(){ return Number(mCharacter.str); }
        set: function(val){ return mCharacter.str = Number(val); }
        });
          
      /** Accessor for Speed while swimming in feet. */
      Object.defineProperty(mThis, 'swimSpeed',
        {
        get: function(){ return Number(mCharacter.swimSpeed); }
        set: function(val){ return mCharacter.swimSpeed = Number(val); }
        });

      /** Accessor for list of weapons. */
      Object.defineProperty(mThis, 'weapons',
        {
        get: function(){ return mCharacter.weapons; }
        set: function(val){ return mCharacter.weapons = val; }
        });
        
      /** Accessor for weight in pounds. */
      Object.defineProperty(mThis, 'weight',
        {
        get: function(){ return Number(mCharacter.weight); }
        set: function(val){ return mCharacter.weight = Number(val); }
        });
      
      /** Accessor for Base Will Save. */
      Object.defineProperty(mThis, 'willBase',
        {
        get: function(){ return Number(mCharacter.willBase); }
        set: function(val){ return mCharacter.willBase = Number(val); }
        });
              
      /** Accessor for Will Save magic modifier. */
      Object.defineProperty(mThis, 'willMagicMod',
        {
        get: function(){ return Number(mCharacter.willMagicMod); }
        set: function(val){ return mCharacter.willMagicMod = Number(val); }
        });
            
      /** Accessor for Wisdom. */
      Object.defineProperty(mThis, 'wis',
        {
        get: function(){ return Number(mCharacter.wis); }
        set: function(val){ return mCharacter.wis = Number(val); }
        });
      }
      
    return Character;    
    });//END Character factory.
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  