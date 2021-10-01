const animal = [
    {
        "id": 1,
        "name": 'Thanh',
        "height": '1m74',
    },
    {
        "id": 2,
        "name": 'Thu',
        "height": '1m61',
    }
];

let newArray = animal.map(function(animals){
    if(animals.id == 1){
        animals.name = "Meo";
    }
    return animals;
});
console.log(newArray);