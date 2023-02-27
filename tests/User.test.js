const User = require('../src/User')

// User tests here

// test username
describe("something", () =>{
    test('somethin', () =>{
        user1=new User('bob123','pass',5)
        expect(user1.username).toBe('bob123')
        expect(user1.password).toBe('pass')
        expect(user1.age).toBe(5)
        user1.login('pass')
        expect(user1.loggedIn).toBe(true)
        user1.logout()
        expect(user1.loggedIn).toBe(false)
    })
})
// test password

// test age

// test login

// test logout
