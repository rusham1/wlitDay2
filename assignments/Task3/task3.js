const animal={
    makeSound(){
        return "Some Sound";
    }
}

const dog={
    name:"Buddy"
}

dog.__proto__=animal

console.log(dog.makeSound())