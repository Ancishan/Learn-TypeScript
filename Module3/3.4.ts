{
    // instance of guard
    class Animal {
        name:string;
        species:string;

        constructor(name:string, species:string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log("I am making sound")
        }
    } 

    class Dog extends Animal {
        constructor(name:string, species:string){
            super(name, species);
        }
        makeBarking(){
            console.log(`I am barking`)
        }
    }

    class Cat extends Animal{
        constructor(name:string, species:string){
            super(name, species)
        }
        makeMeu(){
            console.log(`meam meau meau`)
        }
    }

    // instoent 

    // smartly way 
    const isDog = (animal : Animal) :boolean =>{
    return animal instanceof Dog;
    }
    const isCat = (animal : Animal) :boolean =>{
    return animal instanceof Cat;
    }


      const getAnimal=(animal: Animal) =>{
        if(isDog(animal)){
            animal.makeBarking();
        }
        else if(isCat(animal)){
            animal.makeMeu();
        } else {
            animal.makeSound();
        }
   
    }

    // const getAnimal=(animal: Animal) =>{
    //     if(animal instanceof Dog){
    //         animal.makeBarking();
    //     }
    //     else if(animal instanceof Cat){
    //         animal.makeMeu();
    //     } else {
    //         animal.makeSound();
    //     }
   
    // }

    const dog = new Dog('Dog bhai', 'dog');
    const cat = new Cat('cat bhai', 'cat');

    getAnimal(dog)
    getAnimal(cat)


    // 
}