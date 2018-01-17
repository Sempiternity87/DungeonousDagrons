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
      
      /** Internal Character object. */
      var mCharacter = src || {};
      
      /** Accessor for source object. */
      mThis.getSource = function() { return mCharacter; };
      
      /** Accessor for ID. */
      Object.defineProperty(mThis, 'id',
        {
        get: function(){ return mCharacter.id; }
        });
        
      /** Accessor for age. */
      Object.defineProperty(mThis, 'age',
        {
        get: function(){ return mCharacter.age; }
        set: function(val){ return mCharacter.age = val; }
        });
        
      /** Accessor for alignment. */
      Object.defineProperty(mThis, 'alignment',
        {
        get: function(){ return mCharacter.alignment; }
        set: function(val){ return mCharacter.alignment = val; }
        });
            
      /** Accessor for armorBonus. */
      Object.defineProperty(mThis, 'armorBonus',
        {
        get: function(){ return mCharacter.armorBonus; }
        set: function(val){ return mCharacter.armorBonus = val; }
        });
      
      /** Accessor for bab. */
      Object.defineProperty(mThis, 'bab',
        {
        get: function(){ return mCharacter.bab; }
        set: function(val){ return mCharacter.bab = val; }
        });
                
      /** Accessor for baseSpeed. */
      Object.defineProperty(mThis, 'baseSpeed',
        {
        get: function(){ return mCharacter.baseSpeed; }
        set: function(val){ return mCharacter.baseSpeed = val; }
        });
          
      /** Accessor for burrowSpeed. */
      Object.defineProperty(mThis, 'burrowSpeed',
        {
        get: function(){ return mCharacter.burrowSpeed; }
        set: function(val){ return mCharacter.burrowSpeed = val; }
        });
        
      /** Accessor for cha. */
      Object.defineProperty(mThis, 'cha',
        {
        get: function(){ return mCharacter.cha; }
        set: function(val){ return mCharacter.cha = val; }
        });
             
      /** Accessor for climbSpeed. */
      Object.defineProperty(mThis, 'climbSpeed',
        {
        get: function(){ return mCharacter.climbSpeed; }
        set: function(val){ return mCharacter.climbSpeed = val; }
        });
        
      /** Accessor for con. */
      Object.defineProperty(mThis, 'con',
        {
        get: function(){ return mCharacter.con; }
        set: function(val){ return mCharacter.con = val; }
        });
        
      /** Accessor for deflectionMod. */
      Object.defineProperty(mThis, 'deflectionMod',
        {
        get: function(){ return mCharacter.deflectionMod; }
        set: function(val){ return mCharacter.deflectionMod = val; }
        });
        
      /** Accessor for deity. */
      Object.defineProperty(mThis, 'deity',
        {
        get: function(){ return mCharacter.deity; }
        set: function(val){ return mCharacter.deity = val; }
        });
      
      /** Accessor for dex. */
      Object.defineProperty(mThis, 'dex',
        {
        get: function(){ return mCharacter.dex; }
        set: function(val){ return mCharacter.dex = val; }
        });
            
      /** Accessor for dr. */
      Object.defineProperty(mThis, 'dr',
        {
        get: function(){ return mCharacter.dr; }
        set: function(val){ return mCharacter.dr = val; }
        });
             
      /** Accessor for eyes. */
      Object.defineProperty(mThis, 'eyes',
        {
        get: function(){ return mCharacter.eyes; }
        set: function(val){ return mCharacter.eyes = val; }
        });
        
      /** Accessor for fortBase. */
      Object.defineProperty(mThis, 'fortBase',
        {
        get: function(){ return mCharacter.fortBase; }
        set: function(val){ return mCharacter.fortBase = val; }
        });
        
      /** Accessor for fortMagicMod. */
      Object.defineProperty(mThis, 'fortMagicMod',
        {
        get: function(){ return mCharacter.fortMagicMod; }
        set: function(val){ return mCharacter.fortMagicMod = val; }
        });
        
      /** Accessor for gender. */
      Object.defineProperty(mThis, 'gender',
        {
        get: function(){ return mCharacter.gender; }
        set: function(val){ return mCharacter.gender = val; }
        });
               
      /** Accessor for flySpeed. */
      Object.defineProperty(mThis, 'flySpeed',
        {
        get: function(){ return mCharacter.flySpeed; }
        set: function(val){ return mCharacter.flySpeed = val; }
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
            
      /** Accessor for hp. */
      Object.defineProperty(mThis, 'hp',
        {
        get: function(){ return mCharacter.hp; }
        set: function(val){ return mCharacter.hp = val; }
        });
           
      /** Accessor for int. */
      Object.defineProperty(mThis, 'int',
        {
        get: function(){ return mCharacter.int; }
        set: function(val){ return mCharacter.int = val; }
        });
        
      /** Accessor for name. */
      Object.defineProperty(mThis, 'name',
        {
        get: function(){ return mCharacter.name; }
        set: function(val){ return mCharacter.name = val; }
        });

      /** Accessor for naturalArmor. */
      Object.defineProperty(mThis, 'naturalArmor',
        {
        get: function(){ return mCharacter.naturalArmor; }
        set: function(val){ return mCharacter.naturalArmor = val; }
        });
        
      /** Accessor for race. */
      Object.defineProperty(mThis, 'race',
        {
        get: function(){ return mCharacter.race; }
        set: function(val){ return mCharacter.race = val; }
        });
      
      /** Accessor for refBase. */
      Object.defineProperty(mThis, 'refBase',
        {
        get: function(){ return mCharacter.refBase; }
        set: function(val){ return mCharacter.refBase = val; }
        });
        
      /** Accessor for refMagicMod. */
      Object.defineProperty(mThis, 'refMagicMod',
        {
        get: function(){ return mCharacter.refMagicMod; }
        set: function(val){ return mCharacter.refMagicMod = val; }
        });
        
      /** Accessor for shieldBonus. */
      Object.defineProperty(mThis, 'shieldBonus',
        {
        get: function(){ return mCharacter.shieldBonus; }
        set: function(val){ return mCharacter.shieldBonus = val; }
        });
  
      /** Accessor for size. */
      Object.defineProperty(mThis, 'size',
        {
        get: function(){ return mCharacter.size; }
        set: function(val){ return mCharacter.size = val; }
        });
          
      /** Accessor for sizeMod. */
      Object.defineProperty(mThis, 'sizeMod',
        {
        get: function(){ return mCharacter.sizeMod; }
        set: function(val){ return mCharacter.sizeMod = val; }
        });
      
      /** Accessor for skills. */
      Object.defineProperty(mThis, 'skills',
        {
        get: function(){ return mCharacter.skills; }
        set: function(val){ return mCharacter.skills = val; }
        });
        
      /** Accessor for speedWithArmor. */
      Object.defineProperty(mThis, 'speedWithArmor',
        {
        get: function(){ return mCharacter.speedWithArmor; }
        set: function(val){ return mCharacter.speedWithArmor = val; }
        });
        
      /** Accessor for str. */
      Object.defineProperty(mThis, 'str',
        {
        get: function(){ return mCharacter.str; }
        set: function(val){ return mCharacter.str = val; }
        });
          
      /** Accessor for swimSpeed. */
      Object.defineProperty(mThis, 'swimSpeed',
        {
        get: function(){ return mCharacter.swimSpeed; }
        set: function(val){ return mCharacter.swimSpeed = val; }
        });

      /** Accessor for weapons. */
      Object.defineProperty(mThis, 'weapons',
        {
        get: function(){ return mCharacter.weapons; }
        set: function(val){ return mCharacter.weapons = val; }
        });
        
      /** Accessor for weight. */
      Object.defineProperty(mThis, 'weight',
        {
        get: function(){ return mCharacter.weight; }
        set: function(val){ return mCharacter.weight = val; }
        });
      
      /** Accessor for willBase. */
      Object.defineProperty(mThis, 'willBase',
        {
        get: function(){ return mCharacter.willBase; }
        set: function(val){ return mCharacter.willBase = val; }
        });
              
      /** Accessor for willMagicMod. */
      Object.defineProperty(mThis, 'willMagicMod',
        {
        get: function(){ return mCharacter.willMagicMod; }
        set: function(val){ return mCharacter.willMagicMod = val; }
        });
            
      /** Accessor for wis. */
      Object.defineProperty(mThis, 'wis',
        {
        get: function(){ return mCharacter.wis; }
        set: function(val){ return mCharacter.wis = val; }
        });

      }
      
    return Character;    
    });//END Character factory.
  })();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  