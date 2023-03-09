class Scooter{
  // scooter code here
  constructor(station){
    this.station = station
    this.user = null
    //I see how this works, but is there a better way to do it?
    this.serial = -1
    this.nextSerial = 1
    this.charge = 100
    this.isBroken = false
  }
  rent(user) {
    //When possible, try to use the triple equals instead of double equals
    if(this.charge>20 && this.isBroken == false ) {
      this.station=null;
      this.user = user
      //What if the scooter is broken?
    } else {throw new Error('scooter needs to charge')}
  }
  dock(station){
    this.station=station;
    this.user = null;
  }
 async recharge(){
  if(this.charge==100) {
     console.log('Charge complete');   
     return 
  }    
  console.log('Starting charge');
      
      await new Promise(resolve => setTimeout(resolve, 5000)); 
      this.charge += 5
  }
  async requestRepair(){
      await new Promise(resolve => setTimeout(resolve, 5000));
      this.isBroken = false
      console.log('repair completed');   
  }

}


module.exports = Scooter
