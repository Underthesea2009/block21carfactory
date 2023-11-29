// Car constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Add getDescription method to Car prototype
  Car.prototype.getDescription = function() {
    return `${this.make} ${this.model} ${this.year}`;
  };
  
  // ElectricCar constructor function, subclass of Car
  function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year); // Inherit Car properties
    this.range = range;
  }
  
  // Set ElectricCar's prototype to be a Car's prototype
  ElectricCar.prototype = Object.create(Car.prototype);
  
  // Set ElectricCar's constructor back to ElectricCar
  ElectricCar.prototype.constructor = ElectricCar;
  
  // Override getDescription method for ElectricCar
  ElectricCar.prototype.getDescription = function() {
    return `${this.make} ${this.model} ${this.year}, Range: ${this.range} miles`;
  };
  
  // Create an instance of ElectricCar
  const myTesla = new ElectricCar("Tesla", "Model S", 2019, 300);
  
  // Test getDescription method
  console.log(myTesla.getDescription());
  