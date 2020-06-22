let wakeDog = function(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

let leashDog = function(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

let walkToPark = function(dogName, dogBreed) {
    const string = console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

let throwFrisbee = function (dogName, dogBreed) {
    const string = console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
};

let walkHome = function (dogName, dogBreed) {
    const string = console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
};

const unleashDog = function (dogName, dogBreed) {
    const string = console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
};

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    const named_array = []
    for (let i = 0; i < routine.length; i++) {
    let result = routine[i](dogName, dogBreed);
    named_array.push(result)
    }
    return named_array
}






