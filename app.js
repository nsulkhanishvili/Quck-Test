// დოკუმენტში უნდა გქონდეთ ორი ღილაკი.
// თითოეულზე დაჭერისას უნდა მიდიოდეს რექვესთი სხვადასხვა API ზე (შეგიძლიათ გამოიყენოთ ნებისმიერი API)
// დადებითი პასუხის შემთხვევაში მოსული ინფორმაცია დაამატეთ HTML - ის მხარეს.
// ერორის შემთხვევაში ან დალოგეთ, ან ისიც html - ს მხარეს გაიტანეთ.
// - - - - - - -
// ვინც ვერ შეძლებთ რექვესთების გამოყენებას, სტატიკურად შექმენით 2 ერეი ობიექტებით და მისი მონაცემები დაამატეთ HTML - ში
// მაგ: [ { name: 'John',  age: 45 }, { name: 'Joe',  age: 55 } ]


function myFunc(url = 'https://fakerapi.it/api/v1/addresses?_quantity=1') {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(finalData => {
                if (finalData.code === 200) {
                    resolve(finalData);
                }
                reject('Status Code ' + finalData.code);
            })
    })
}




async function addresses() {
    const result = await myFunc('https://fakerapi.it/api/v1/addresses?_quantity=100');
    console.log(result);
    const ul = document.querySelector('ul');
    result.data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.city;
        ul.appendChild(li);
    })
}

async function books() {
    const result = await myFunc('https://fakerapi.it/api/v1/books?_quantity=100');
    console.log(result);
    const ul = document.querySelector('ul');
    result.data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        ul.appendChild(li);
    })
}

