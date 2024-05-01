class Vehicle {
    move(){
        console.log("O veículo está em movimento.")
    }
}

class Car extends Vehicle {
    move(){
        console.log("O carro está se movendo.")
    }
}

class Ship extends Vehicle{
    move(){
        console.log("O navio está navegando no mar!")
    }
}

class Aircraft extends Vehicle {
    move(speed){
        console.log(`A aeronave está voando a ${speed} km/h`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

// delorean.move()
// blackPearl.move()
// epoch.move(45)

function start(vehicle){
    console.log("Start a vehicle...")
    vehicle.move()
}
start(delorean)
start(blackPearl)
start(epoch)