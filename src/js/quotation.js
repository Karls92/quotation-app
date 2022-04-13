const Quote = {
    quotations: [],
    getAll: function(){
        return this.quotations;
    },
    getOne: function (code){
        return this.quotations.find(quotation => quotation.code === code);
    },
    addNew: function (obj){
        this.quotations.push(obj);
        document.querySelector("#quote-table-body").innerHTML += `<tr> 
        <td>${obj.code}</td> 
        <td>${obj.company}</td>
        <td>${obj.email}</td>
        <td>${obj.products.length} Products</td> 
        <td>${obj.total}$</td> 
        <td><button type="button" class="delete_quote"></button></td>
        </tr>`;
    },
    delete: function(element){
        const row_el = element.parentNode.parentNode;
        const container = row_el.parentNode;
        const all_children = container.children;
        const index = Array.from(all_children).indexOf(row_el);
        this.quotations.splice(index, 1); 
        container.removeChild(row_el);
    },
    findElem: function(code){
        return this.quotations.findIndex(quotation => quotation.code === code);
    }
};
export { Quote };