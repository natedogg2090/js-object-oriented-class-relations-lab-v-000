let store = { drivers: [], passengers: [], trips: []}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
	constructor(name) {
		this.id = ++driverId;
		this.name = name;

		store.drivers.push(this);
	}

	trips() {
		return store.trips.filter(
			function (trip) {
				return trip.driverId === this.id;
			}.bind(this)
		);
	}

	passengers() {
		return this.trips().map(trip => {
			return trip.passenger();
		});
	}
}

class Passenger {
	constructor(name) {
		this.id = ++passengerId;
		this.name = name;

		store.passengers.push(this);
	}

	trips() {
		return store.trips.filter(
			function (trip) {
				return trip.passengerId === this.id;
			}.bind(this)
		);
	}

	drivers() {
		return this.trips().map(trip => {
			return trip.driver();
		});
	}
}

class Trip {
	constructor(driver, passenger) {
		this.id = ++tripId;
		this.driverId = driver.id;
		this.passengerId = passenger.id;

		store.trips.push(this);
	}

	passenger() {
		return store.passengers.find(
			function(passenger) {
				return passenger.id === this.passengerId;
			}.bind(this)
		);
	}

	driver() {
		return store.drivers.find(
			function (driver) {
				return driver.id === this.driverId;
			}.bind(this)

		);
	}
}

// class User {
//     constructor(name) {
//         this.id = ++userId;
//         this.name = name;
 
//         // insert in the user to the store
//         store.users.push(this);
//     }
//     items() {
//         return store.items.filter(
//             function(item) {
//                 return item.userId === this.id;
//             }.bind(this)
//         );
//     }
// }

// class Item {
//     constructor(name, price, user) {
//         this.id = ++itemId;
//         this.name = name;
//         this.price = price;
//         if (user) {
//             this.userId = user.id;
//         }
 
//         // insert in the item to the store
//         store.items.push(this);
//     }
//     setUser(user) {
//         this.userId = user.id;
//     }
//     user() {
//         return store.users.find(
//             function(user) {
//                 return user.id === this.userId;
//             }.bind(this)
//         );
//     }
// }