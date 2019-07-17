//ФЭЙК ЭПИ
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';

/*function makeGETRequest(url, callback) {
	let xhr;

	if (window.XMLHttpRequest) {
	  xhr = new XMLHttpRequest();
	} else if (window.ActiveXObject) { 
	  xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xhr.onreadystatechange = function () {//метод когдла запрос выполнен, запускается функция 
	  if (xhr.readyState === 4) { // параметр с каким статусом ваш запрос заверщился 

		callback(xhr.responseText);// сюда придет запрос JSON
	  }
	}

	xhr.open('GET', url, true);
	xhr.send();
  }*/

  function makeGETRequest (url) {
	return new Promise((resolve, reject) => {
		let xhr;
		if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		} else if (window.ActiveXObject) { 
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.onreadystatechange = ()=> {//метод когдла запрос выполнен, запускается функция 
		if (xhr.readyState === 4) { // параметр с каким статусом ваш запрос заверщился 
			resolve	(xhr.responseText)
		
}}
xhr.open('GET', url, true);
xhr.send();

	})
	
}

makeGETRequest(`${API_URL}/catalogData.json`).then ((data) => {
	//console.log(data);
	})



  

//Глобальные сущности 
var userCart = [];

class GoodsList {
	constructor () {
		this.goods = []
	}
	
	fetchGoods (cb) {
		makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
			this.goods = JSON.parse(goods);
			cb ()
		  })
	}
	render () {
		const block = document.querySelector ('.products')
		this.goods.forEach (product => {
			const prod = new Product (product)
			block.insertAdjacentHTML ('beforeend', prod.render ())
		})
	}
}

const list = new GoodsList();
list.fetchGoods(() => {
  list.render()
})

class Product {
	constructor (product) {
		this.id = product.id_product
		this.title = product.product_name
		this.price = product.price
		this.img = image
	}
	render () {
		return `<div class="product-item">
                        <img src="${this.img}" alt="Some img">
                        <div class="desc">
                            <h3>${this.title}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn" 
                            data-name="${this.title}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                        </div>
                    </div>`
	}
}



/*class cartItem {
	constructor (product) {
		this.tiile =  '';
		this.price = 0;
		this.img = cartImage;
	}
	render () { 
	return  `<div class="cart-item" data-id="${this.id}">
	<div class="product-bio">
		<img src="${this.img}" alt="Some image">
		<div class="product-desc">
			<p class="product-title">${this.name}</p>
			<p class="product-quantity">Quantity: ${this.quantity}</p>
			<p class="product-single-price">$${this.price} each</p>
		</div>
	</div>
	<div class="right-block">
		<p class="product-price">${this.quantity * this.price}</p>
		<button class="del-btn" data-id="${this.id}">&times;</button>
	</div>
</div>`
}
}

class Cart {
	constructor (){
	}
addProduct (product) {
let productId = +product.dataset['id'];
let find = userCart.find (element => element.id === productId)

 	if (!find) {
 		userCart.push ({
 			name: product.dataset['name'],
 			id: productId,
 			img: cartImage,
 			price: +product.dataset['price'],
 			quantity: 1
 		})
 	} else {
 		find.quantity++
 	}
 	this.renderCart ();
 }	
 removeProduct (product) {
	let productId = +product.dataset['id'];
	let find = userCart.find (element => element.id === productId)
		if (find.quantity > 1) {
		find.quantity--
	} else {
		userCart.splice (userCart.indexOf(find), 1);
		document.querySelector (`.cart-item[data-id="${productId}"]`).remove ()
	}
	this.renderCart ();
 }
	renderCart () {
	let allProducts = '';
	for (item of userCart) {
	}
	}
}*/



//https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B0%D1%81%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-javascript-%D1%81-async-await-ba5f47f4436