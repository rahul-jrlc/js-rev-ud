"use strict";

// A CLOSER LOOK AT FUNCTIONS

// Default parameters

const bookings = [];

const creatBooking = function (flightNum, numPassengers = 1, price = numPassengers * 178) {
    // pre ES6 way to set default values
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    console.log(`Flight number: ${flightNum}, No. of passengers: ${numPassengers}, Booking cost: ${price}.`);
    bookings.push(booking);

};

creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking("LH123", 3);

creatBooking("LH123", undefined, 300);// skipping a default parameter
