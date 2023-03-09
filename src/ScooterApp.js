const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  // ScooterApp code here
  constructor() {
    this.stations = { "station 1": [], "station 2": [], "station 3": [] };
    this.registeredUsers = {};
  }
  registerUsers(username, password, age) {
    if (username in this.registeredUsers) {
      throw new Error("already registered");
    }
    if (age < 18) {
      throw new Error("too young to register");
    }
    this.registeredUsers[username] = new User(username, password, age);
    console.log("user has been registered");
    return this.registeredUsers[username];
  }
  loginUser(username, password) {
    if (username in this.registeredUsers) {
      this.registeredUsers[username].login(password);
      console.log("user has been logged in");
    } else {
      throw new Error("Username or password is incorrect");
    }
  }
  logoutUser(username) {
    if (username in this.registeredUsers) {
      this.registeredUsers[username].logout();
      console.log("user is logged out");
    } else {
      throw new Error("no such user is logged in");
    }
  }
  createScooter(station) {
    if (!(station in this.stations)) {
      throw new Error("no such  station");
    }
    let scooter = new Scooter(station);
    this.stations[station].push(scooter);
    console.log("created new scooter");
    return scooter;
  }
  dockScooter(scooter, station) {
    if (!(station in this.stations)) {
      throw new Error("no such  station");
    }
    if (scooter.station == station) {
      throw new Error("scooter already at station");
    }
    scooter.dock(station);
    this.stations[station].push(scooter);
    console.log("scooter is docked");
  }
  rentScooter(scooter, user) {
    if (scooter.station == null) {
      throw new Error("scooter already rented");
    }
    let station = scooter.station;
    const index = this.stations[station].indexOf(scooter);
    if (index > -1) {
      this.stations[station].splice(index, 1);
    }
    scooter.rent(user);
    console.log("scooter is rented");
  }
  print() {
    console.log(this.registeredUsers);
    console.log(this.stations);
  }
}

module.exports = ScooterApp;
