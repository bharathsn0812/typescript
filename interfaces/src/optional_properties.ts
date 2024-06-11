interface Car {
    brand: string;
    model: string;
    year?: number; // optional property
}

const myCar: Car = {
    brand: 'Toyota',
    model: 'Corolla'
};

console.log(myCar);
