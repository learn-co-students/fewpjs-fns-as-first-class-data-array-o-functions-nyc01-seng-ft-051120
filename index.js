
function wakeDog(name, breed){
    let msg=`Wake ${name} the ${breed}`
    console.log(msg)
    return msg
}

function leashDog(name, breed){
    let  msg=`Leash ${name} the ${breed}`
    console.log(msg)
    return msg
}

function walkToPark(name, breed){
    let msg=`Walk to the park with ${name} the ${breed}`
    console.log(msg)
    return msg
}

function throwFrisbee(name, breed){
    let msg=`Throw the frisbee for ${name} the ${breed}`
    console.log(msg)
    return msg
}

function walkHome(name, breed){
    let msg=`Walk home with ${name} the ${breed}`
    console.log(msg)
    return msg
}

function unleashDog(name, breed){
    let msg=`Unleash ${name} the ${breed}`
    console.log(msg)
    return msg
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
let ms=[]
function exerciseDog(name, breed){
    for(let i=0; i<routine.length; i++){
       ms.push(routine[i](name, breed));
}
return ms
}
exerciseDog('tesring', 'human')




 
 