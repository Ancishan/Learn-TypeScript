{
    // oop class

    /** manually system
     * 
     * class Animal {
        name: string;
        species:string;
        sound:string;

        constructor(name:string, species: string, sound:string){
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        makeSound(){
            console.log(`This ${this.name} says ${this.sound}`)
        }
    }

    // create a dog instant using by class Animal

    const dog = new Animal("German Shepard Bhai", "dog", "Ghew GHew");
    const cat = new Animal ("persian", "cat", 'meaw mea');
    cat.makeSound();

     * 
     */
    // short and code clean krr jnno modifier hisabe public krtte hbe
    
    class Animal {
        constructor(public name:string, public species: string, public sound:string)
        {}

        makeSound(){
            console.log(`This ${this.name} says ${this.sound}`)
        }
    }
    // create a dog instant using by class Animal
    const dog = new Animal("German Shepard Bhai", "dog", "Ghew GHew");
    const cat = new Animal ("persian", "cat", 'meaw mea');
    cat.makeSound();

    


    // 
}