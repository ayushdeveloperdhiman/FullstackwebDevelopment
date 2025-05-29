const car = {
  name: "Car",
  color: "Black",
  getDetails(brand, seats) {
    console.log(`
        This is a ${this.color} ${this.name} of ${brand} company.
        It has ${seats} seats.`);
  },
};

const bus = {
  name: "Bus",
  color: "Blue",
};

car.getDetails("Audi", 5);

//Call Method
car.getDetails.call(bus, "Star", 50);

//Apply Method
car.getDetails.apply(bus, ["Volvo", 64]);

// Bind Method
const vehicle = car.getDetails.bind(bus);
vehicle("Mahinda", 20);
