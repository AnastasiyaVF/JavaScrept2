// 1-2 задание
let Text = `
    One: 'Hi Mary.'
    Two:'Oh, hi.'
    One:'How are you doing?'
    Two:'I'm doing alright. How about you?'
    One:'Not too bad. The weather is great isn't it?'
    Two:'Yes. It's absolutely beautiful today.'
    One:'I wish it was like this more frequently.'
    Two:'Me too.'
    One:'So where are you going now?'
    Two:'I'm going to meet a friend of mine at the department store.'
    One:'Going to do a little shopping?'
    Two:'Yeah, I have to buy some presents for my parents.'
    One:'What's the occasion?'
    Two:'It's their anniversary.'
    One:'That's great. Well, you better get going. You don't want to be late.'
    Two:'I'll see you next time.'
    One:'Sure. Bye.'
`;
 
    console.log(Text.replace (/(\W)'|'(\n)/g, '"'));


// задание 3
    
             let fields = [
                {name: 'Name', pattern: /^[a-zа-яё]+(?: [a-zа-яё]+)?$/i, valid: false},
                {name: 'Phone', pattern: /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,  valid: false},
                {name: 'Email', pattern: /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i, valid: false},
            ];
        
        
    //     validateForm() { // проверка на влидность 
    //         valid = RegExp (pattern).test ()
    //     }
        
    //     // метод заполнени значений
    // }
    
    let Name = document.getElementById ('name');
    Name.addEventListener ('change', ()=> {
        let valid = new RegExp(/^[a-zа-яё]+(?: [a-zа-яё]+)?$/i).test(Name.value)
        if (!valid){
        Name.style.borderColor = "red";
        }
    })
        // имя /^[a-zа-яё]+(?: [a-zа-яё]+)?$/i
    // телефон /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
    // email /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i
    // https://realadmin.ru/coding/valid-field-js.html

   
        // let validateName = new Form(Name, NameRegExp);
        // let validatePhone = new Form(Phone, PhoneRegExp);
        // let validateEmail = new Form(Email, EmailRegExp);


// document.getElementById('sendBtn').addEventListener('click',()=>{
//     if(){

//     }
// })


