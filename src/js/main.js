import { Product } from './product.js';
import { Quote } from './quotation.js';

//Selectors
var $ = function(selector){
    return document.querySelector(selector);
}
//get events
document.attachEvent = function( evt, q, fn ) {
    document.addEventListener( evt, ( e ) => {
        if (e.target.matches( q ) ) {
         fn.apply( e.target, [e] );
     }
    });
};
// reset forms //
function reset(...data){
    data.forEach(item => {
        if (item instanceof NodeList ){
            for(let x of item) { x.checked = false }
        } else{ item.value = ''; }
    });
}
 // sections menu //
$('#btn-show-quote').addEventListener('click', function(event){
    //active menu button
    $('#btn-show-product').classList.remove('active');
    this.classList.add('active');
    //change panel
    $('#products').classList.remove("open-section");
    $('#products').classList.add("close-section");
    $('#quotes').classList.remove("close-section");
    $('#quotes').classList.add("open-section");
});
$('#btn-show-product').addEventListener('click', function(event){
    //active menu button
    $('#btn-show-quote').classList.remove('active');
    this.classList.add('active');
    //change panel
    $('#quotes').classList.remove("open-section");
    $('#quotes').classList.add("close-section");
    $('#products').classList.remove("close-section");
    $('#products').classList.add("open-section");
});

// Products //
// add products 
$("#product-form").addEventListener('submit', function(e){
    e.preventDefault();
    let newProduct = {
        code: $('#product-code').value,
        name: $('#product-name').value,
        price: parseFloat($('#product-price').value).toFixed(2)
    };
    Product.find_index(newProduct.code) === -1 ? (Product.addNew(newProduct), $("#list-product-quotes").innerHTML += Product.listForSelectionTable(newProduct), reset($('#product-code'), $('#product-name'), $('#product-price'))) : alert("The product Exist");
});
//delete products
document.attachEvent('click','.delete_product', function() {
    Product.delete(this);
});

// Quotation //
// New Quote //
$("#quote-form").addEventListener('submit', function(e){
    e.preventDefault(); 
    let newQuote = {};
    let product_codes = [];
    let totalPrice = 0.00;
    const checkboxs = document.querySelectorAll('.select-product');
    if(Quote.findElem($('#quote-code').value) === -1){
        if(checkboxs.length > 0) {
            for(let product of checkboxs){
                if (product.checked) {
                    product_codes.push(product.attributes.value.value); //insert product code
                    totalPrice += parseFloat(Product.find_Price(product.attributes.value.value)); // get the price
                }     
            }
            newQuote = {
                code: $('#quote-code').value,
                company: $('#quote-company').value,
                email: $('#company-email').value,
                phone: $('#company-phone').value, 
                products: product_codes,
                total: totalPrice.toFixed(2)
            }; 
            product_codes.length > 0 ? (Quote.addNew(newQuote), reset($('#quote-code'), $('#quote-company'), $('#company-email'), $('#company-phone'), checkboxs)) : alert("You have to select al least one product to do a Quatation");
        }else alert("You have to select at lest one product");
    }else{
        alert("The Quote Exist");
    }
});
// Delete Quote //
document.attachEvent('click','.delete_quote', function() {
    Quote.delete(this);
});

