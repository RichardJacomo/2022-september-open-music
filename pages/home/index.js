//render:
function render(array) {

    const ul = document.querySelector(".ul-products");
    array.forEach((e) => {
      const card = createCard(e);
      ul.appendChild(card);
    });
  }

function createCard(element) {
    const li = document.createElement("li");
    const imgMusic = document.createElement("img");
    const divMusicTitle = document.createElement("div");
    const pMusicBand = document.createElement("p");
    const pMusicYear = document.createElement("p");
    const h3NameMusic = document.createElement("h3");
    const divMusicPrice = document.createElement("div");
    const h3Price = document.createElement("h3");
    const buttonBuy = document.createElement("button");

    li.classList = 'li-product'
    imgMusic.classList = 'img-product'
    divMusicTitle.classList = 'div-product'
    pMusicBand.classList = 'band-product all'
    pMusicYear.classList = 'year-product all'
    h3NameMusic.classList = 'name-product all'
    divMusicPrice.classList = 'price-buy-product all'
    h3Price.classList = 'price-product all'
    buttonBuy.classList = 'buy-product all'

    imgMusic.src = element.img;
    pMusicBand.innerText = element.band
    pMusicYear.innerText = element.year
    h3NameMusic.innerText = element.title 
    h3Price.innerText =  `R$${element.price}`
    buttonBuy.innerText = 'Comprar'

    li.append(imgMusic, divMusicTitle, h3NameMusic, divMusicPrice)
    divMusicTitle.append(pMusicBand, pMusicYear)
    divMusicPrice.append(h3Price, buttonBuy)
    return li
  }

render(products);

//filter:
const inputFilter = document.querySelector('#price-filter')
const valueFilter = document.querySelector('.value-price-filter')
const ulClean = document.querySelector('ul')
function eventFilter() {
    const filterButtons = document.querySelectorAll('.button-filter')
    const ulList = document.querySelector('.ul-products')
    const div = document.querySelector('div')

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        ulList.innerHTML = ''
        valueFilter.innerHTML = ''
        const filter = button.innerText
        if(filter === 'Todos') {
          filterInput(products)
          inputFilter.value = 0
        }else if(filter !== 'Todos' && filter !== undefined){
          const filteredProducts = filterProduct(filter)
          filterInput(filteredProducts)
          inputFilter.value = 0
        }
      })
    })
  }

function filterProduct(text) {
    const productsFiltered = products.filter(product => product.category.includes(text))
    return productsFiltered;
  }
eventFilter()

function filterInput(productsCategory){
// valueFilter.innerHTML = `Até R$ ${inputFilter.value}`;
inputFilter.oninput = function(){
valueFilter.innerHTML = `Até R$ ${inputFilter.value}`;
inputFilter.addEventListener('mousemove', () =>{
      const filterInputArray = productsCategory.filter((e)=>{
        return e.price <= inputFilter.value
      })
      ulClean.innerHTML = ''
      render(filterInputArray)
})
}
}








