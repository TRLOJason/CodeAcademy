// Stay alive for one minute.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

loop {
    // Check the distance to the nearest enemy.
    // If it comes closer than 30 meters, cleave it!
    // Else, attack the enemy by name.
    
    var enemy = this.findNearestEnemy();
   
if (this.isReady("cleave") && this.distanceTo(enemy) < 30) {
        this.moveXY(this.distanceTo(enemy), this.distanceTo(enemy)());
        // Cleave the enemy!
        this.cleave(enemy);
        this.electrocute(enemy);
}
else {
      this.moveXY(this.findNearestEnemy(), this.findNearestEnemy());
      this.attack(enemy);
      this.electrocute(enemy);
}
}
