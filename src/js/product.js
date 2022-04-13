const Product = {
    products: [],
    getAll: function(){
        return this.products;
    },
    getOne: function (code){
        return this.products.find(product => product.code === code);
    },
    addNew: function (obj){
        this.products.push(obj);
        document.querySelector("#product-table-body").innerHTML += `
            <tr class="row-table">
                <td>${obj.code}</td>
                <td>${obj.name}</td>
                <td>${obj.price}$</td>
                <td><button type="button" class="delete_product"></button></td>
            </tr>`;
    },
    delete: function(element){
        const row_el = element.parentNode.parentNode;
        const container = row_el.parentNode;
        const all_children = container.children;
        const index = Array.from(all_children).indexOf(row_el);
        this.products.splice(index, 1); 
        container.removeChild(row_el);
    },
    find_index: function(code){
        return this.products.findIndex(product => product.code === code);
    },
    find_Price: function(code){
        return this.products.find(product => product.code === code).price;
    },
    listForSelectionTable: function(product){
        return `<tr class="row-selection">
                    <td>${product.code}</td>
                    <td>${product.name}</td>
                    <td>${product.price}$</td>
                    <td><label><input type="checkbox" class="select-product" name="products" value="${product.code}"></label></td>
                    </tr>`;
    }
};
export {Product};