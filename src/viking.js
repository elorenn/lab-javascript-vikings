// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }    
  }
}

// War
class War {
  constructor () {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(vikingObj) {
    this.vikingArmy.push(vikingObj);
  }
  addSaxon(saxonObj) {
    this.saxonArmy.push(saxonObj);
  }
  // attack(defender) {
  //   this.defender = defender;
  //   let attacker;
  //   let armyA;
  //   let armyD;
  //   if (defender === "viking") {
  //     armyD = this.vikingArmy;
  //     armyA = this.saxonArmy;
  //   } else {
  //     armyD = this.saxonArmy;
  //     armyA = this.vikingArmy;
  //   }
  //   defender = armyD[Math.floor(Math.random() * armyD.length)];
  //   attacker = armyA[Math.floor(Math.random() * armyA.length)];
  //   let result = defender.receiveDamage(attacker.strength);
  //   if (defender.health <= 0) {
  //     armyD.splice(armyD.indexOf(defender), 1);
  //   }
  //   return result;   
  // }
  // vikingAttack() {
  //   this.attack("saxon");
  // }
  // saxonAttack() {
  //   this.attack("viking");
  // }
  vikingAttack() {
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(saxon), 1);
    }
    return result;
  }
  saxonAttack() {
    let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let result = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(viking), 1);
    }
    return result;
  }
  showStatus() {
    if (!this.saxonArmy.length) {
      return "Vikings have won the war of the century!";
    } else if (!this.vikingArmy.length) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
