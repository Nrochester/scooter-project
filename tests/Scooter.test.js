const Scooter = require('../src/Scooter')
const User = require('../src/User')

//Method tests
describe('scooter methods', () => {
  // tests here!
  test('something', () => {
    scooter= new Scooter('station1')
    expect(scooter.station).toBe('station1')
    expect(scooter.user).toBe(null)
    expect(scooter.serial).toBe(-1)
    expect(scooter.nextSerial).toBe(1)
    expect(scooter.charge).toBe(100)
    expect(scooter.isBroken).toBe(false)
    user1= new User('bob12','pass12',12)
    scooter.rent(user1)
    expect(scooter.station).toBe(null)
    expect(scooter.user).toBe(user1)
    scooter.isBroken=true
    expect(()=>{scooter.rent(user1).toThrow('scooter needs to charge')})
    scooter.dock('station1')
    expect(scooter.station).toBe('station1')
    expect(scooter.user).toBe(null)
    scooter.isBroken=true
    expect(scooter.isBroken).toBe(true)
    let isRepaired=scooter.requestRepair()
    isRepaired.then(function(data){
      expect(scooter.isBroken).toBe(false)

    })

    scooter.charge=95
    expect(scooter.charge).toBe(95)
    let isRecharge=scooter.recharge()
    isRecharge.then(function(data){
      expect(scooter.charge).toBe(100)
    })
    
  })
  //rent method

  //dock method

  //requestRepair method

  //charge method

})
