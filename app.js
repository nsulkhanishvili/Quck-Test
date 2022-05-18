// დოკუმენტში უნდა გქონდეთ ორი ღილაკი.
// თითოეულზე დაჭერისას უნდა მიდიოდეს რექვესთი სხვადასხვა API ზე (შეგიძლიათ გამოიყენოთ ნებისმიერი API)
// დადებითი პასუხის შემთხვევაში მოსული ინფორმაცია დაამატეთ HTML - ის მხარეს.
// ერორის შემთხვევაში ან დალოგეთ, ან ისიც html - ს მხარეს გაიტანეთ.
// - - - - - - -
// ვინც ვერ შეძლებთ რექვესთების გამოყენებას, სტატიკურად შექმენით 2 ერეი ობიექტებით და მისი მონაცემები დაამატეთ HTML - ში
// მაგ: [ { name: 'John',  age: 45 }, { name: 'Joe',  age: 55 } ]


const myDiv = document.querySelector('#main');
const ul = document.createElement('ul');
myDiv.appendChild(ul);

const arrPerson = [{
        name: 'John',
        age: 45 
    },
    {
        name: 'Joe',
        age: 15

    },
];

const newPerson = arrPerson.filter((person) => {
        return person.name
}).forEach(person => {
    const li = document.createElement('li');
    li.textContent = person.name;
    ul.appendChild(li);

});
console.log(newPerson);