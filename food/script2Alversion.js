/*Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий). ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий). ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий). 
### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.*/



const topping = [
	  { title: 'chees', price: 10, ccal: 20},
      { title: 'salad', price: 20, ccal: 5},
      { title: 'potaito', price: 15, ccal: 10 },
    ]
const flavoring = [
        { title: 'pappers', price: 15, ccal: 0 },
        { title: 'creem', price: 20, ccal: 5 },
    ]
const Size = [ {type: "big", price: 100, ccal:40},
                   {type: "small", price: 50, ccal:20}
  ]

    class Hamburger {
        constructor(size) { 
            this.size = size;
            this.price = size.price;
            this.ccal = size.ccal;
            this.topping= [];
            this.flavoring =[];
    }
        addTopping(topping) {    // Добавить добавку 
            this.topping.push(topping);
            this.price += topping.price;
            this.ccal += topping.ccal; 
        }
        addFlavoring (flavoring) {    // Добавить добавку 
            this.flavoring.push(flavoring);
            this.price += flavoring.price;
            this.ccal += flavoring.ccal; 
        }

        /*removeTopping(topping) { // Убрать добавку }
            this.topping.forEach((elem, i)=>{
                if (elem === topping){
                    this.topping.splice(i,1);
                }
            })
        }*/
        getToppings() {   // Получить список добавок
            this.topping.forEach((elem) => {
                console.log("Тип приправы: " + elem.title + '\n');
                console.log("Цена: " + elem.price + '\n');
                console.log("Каллорийность: " + elem.ccal + '\n');
            })
        }
        getSize() {              // Узнать размер гамбургера 
            console.log(`Размер гамбургера ${this.size.type}`)
        }
        getStuffing() {          // Узнать начинку гамбургера
            this.price.forEach((elem) => {
                console.log("Цена: " + elem.price + '\n');
                console.log("Каллорийность: " + elem.ccal + '\n');
            })
        
        }

        calculatePrice () {
            let SumTopping =this.topping.reduce ((total, carrent) => {
                return total + carrent.price
            },0);
            let SumFlavoring =this.flavoring.reduce ((total, carrent) => {
                return total + carrent.price
            },0);
            this.price += (SumTopping + SumFlavoring);
        }
        

        calculateCalories() {    // Узнать калорийность }
        let CallTopping =this.topping.reduce ((total, carrent) => {
            return total + carrent.ccal
        },0);
        let CcalFlavoring =this.flavoring.reduce ((total, carrent) => {
            return total + carrent.ccal
        },0);
        this.price += (CallTopping + CcalFlavoring);
      }
      getPrice (){
          console.log (this.price)
      }
  }


  let a = new Hamburger (Size [0]);
  a.getSize ();
  a.addTopping (topping [0,2]);
  a.addFlavoring (topping [0,1]);
  a.calculatePrice ();
  a.calculateCalories ();
  a.getPrice ();