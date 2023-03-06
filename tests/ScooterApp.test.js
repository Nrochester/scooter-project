const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here
describe('scooter app tests', () => {
    test('scooter app method tests', () => {
        scooterApp1=new ScooterApp()
      expect(Object.keys(scooterApp1.stations).length).toBe(3);
      expect(Object.keys(scooterApp1.registeredUsers).length).toBe(0);
      let user=scooterApp1.registerUsers('bob','pass',87)
      console.log(user)
        expect(user.username).toBe('bob')
        expect(()=>{scooterApp1.registerUsers('bob','pass',87).toThrow('already registered')})
        expect(()=>{scooterApp1.registerUsers('randy','pass',8).toThrow('too young to register')})
       console.log(scooterApp1.registeredUsers)
       expect(scooterApp1.registeredUsers.bob.loggedIn).toBe(false)
        scooterApp1.loginUser('bob','pass')
        expect(scooterApp1.registeredUsers.bob.loggedIn).toBe(true)
        expect(()=>{scooterApp1.loginUser('bob','pasgs').toThrow('Username or password is incorrect')})
        scooterApp1.logoutUser('bob')
        expect(scooterApp1.registeredUsers.bob.loggedIn).toBe(false)
        expect(()=>{scooterApp1.loginUser('bolb').toThrow('no such user is logged in')})
        let scooter1=scooterApp1.createScooter('station 1')
        expect(scooter1.station).toBe('station 1')
        expect(()=>{scooterApp1.createScooter('bolb').toThrow('no such  station')})
        scooterApp1.dockScooter(scooter1,'station 2')
        expect(scooter1.station).toBe('station 2')
        expect(()=>{scooterApp1.dockScooter(scooter1,'station 5').toThrow('no such  station')})
        expect(()=>{scooterApp1.dockScooter(scooter1,'station 2').toThrow('scooter already at station')})
        scooterApp1.rentScooter(scooter1,user)
        expect(scooter1.user).toBe(user)
        expect(()=>{scooterApp1.rentScooter(scooter1,user).toThrow('scooter already rented')})

    }
  )
  })
// register user

// log in

// log out

// rent scooter

// dock scooter
