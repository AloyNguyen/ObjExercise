function createInstructor(firstName,lastName){
    return{
        firstName: firstName,
        lastName: lastName
    }
}


//ES2015

function createInstructor(firstName,lastName){
    return{
        firstName,
        lastName
    };
}

//Computed Property Names 
var favoriteNumber = 42;
var instructor = {
    firstName:"Colt"
}
instructor[favoriteNumber]= `That's my favorite!`

//ES2015 

var favoriteNumber = 42;
var instructor = {
    firstName:"Colt",
    [favoriteNumber]:`That's my favorite!`
}

//Object Methods 
var instructor = {
    firstName:'Colt',
    sayHi:function(){
        return "HI!";
    },
    sayBye:function(){
        return this.firstName + 'says bye!';
    }
}

//Object Methods ES2015 

const instructor ={
    firstName:'Colt',
    sayHi(){
        return "HI!";
    },
    sayBye(){
        return this.firstName + 'says bye!';
    }
}



//Created Animal Function 
const d = createAnimal('dog','bark','Wooof!')
const s = createAnimal('sheep', 'bleet','BAAAAAAAaaaaaa')
function createAnimal(species,verb,noise){
    return{
        species,
        [verb](){
            return noise;
        }
    }
}

d.bark()
s.bleet()