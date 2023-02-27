class Scooter{
  // scooter code here
  constructor(station){
    this.station = station
    this.user = null
    this.serial = -1
    this.nextSerial = 1
    this.charge = 100
    this.isBroken = false
  }
  rent(user){
    if(this.charge>20 && this.isBroken == false ) {
      this.station=null;
      this.user=user
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
