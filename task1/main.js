const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];

  
//   ***MAP***

// 1. Get the array of all names

// 2. Get the array of all heights

// 3. Get the array of objects with just name and height properties

// 4. Get the array of all first names


//1.

const names = persons.map(person => person.name);
console.log(names);


//2.

const heights = persons.map(person => person.height);
console.log(heights);


//3.

const nameHeight = persons.map((person)=>person.height+" "+ person.name);

console.log(nameHeight);

//4. 
const firstNames = persons.map(person => person.name.split(' ')[0]);

console.log(firstNames);




// ***FILTER***

// 1. Get characters with a mass greater than 100

// 2. Get characters with a height of less than 200

// 3. Get all male characters

// 4. Get all female characters


//1. 
 const characters =persons.filter(person=>parseInt(person.mass)>100);

 console.log(characters);

 //2. 
 const charactersHeight =persons.filter(person=>parseInt(person.height)<200);

 console.log(charactersHeight);

 //3. 
 const charactersGendermale =persons.filter(person=>person.gender ==='male');

 console.log(charactersGendermale);

 //4. 

 const charactersGenderfemale =persons.filter(person=>person.gender ==='female');

 console.log(charactersGenderfemale);


//  ***SORT***

// 1. Sort by mass

// 2. Sort by height

// 3. Sort by name

// 4. Sort by gender


//1. 
const charactersMass = persons.map((person)=>person.mass).sort((a,b)=> a.mass - b.mass );

console.log( charactersMass );


//2.
const charactersHeights =  persons.map((person)=>person.height).sort((a,b)=> a.height - b.height );

console.log(charactersHeights);

//3. 
const charactersName =  persons.map((person)=>person.name).sort((a,b)=> a.name - b.name );

console.log(charactersName);


//4. 

const charactersGender =  persons.map((person)=>person.gender).sort((a,b)=> a.gender - b.gender );

console.log(charactersGender);


// ***EVERY***

// 1. Does every character have blue eyes?

// 2. Does every character have a mass of more than 40?

// 3. Is every character shorter than 200?

// 4. Is every character male?

//1. 

const characterBlueColor = persons.every(person => person.eye_color === 'blue');

console.log(characterBlueColor);

//2. 
const characterMass40 = persons.every(person=> person.mass>40);

console.log(characterMass40);

//3. 
const charactersHeight200 = persons.every(person=> person.height < 200);

console.log(charactersHeight200);

//4. 
const characterGenderMale = persons.every(person=>person.gender === 'male');

console.log(characterGenderMale);


// ***SOME***

// 1. Is there at least one male character?

// 2. Is there at least one character with blue eyes?

// 3. Is there at least one character taller than 210?

// 4. Is there at least one character that has a mass of less than 50?


//1.
const characterSomeMale = persons.some(person=>person.gender === 'male');

console.log(characterSomeMale);

//2. 

const characterSomeblue = persons.some(person=>person.eye_color === 'blue');

console.log(characterSomeblue);


//3. 
const characterSomeTall = persons.some(person=>person.height > 210);

console.log(characterSomeTall);

//4. 

const characterSomeMass = persons.some(person=>person.mass < 50 );

console.log(characterSomeMass);



