var productName = document.getElementById("productName"),
    productPrice = document.getElementById("productPrice"),
    productCategory = document.getElementById("productCategory"),
    productDesc = document.getElementById("productDesc"),
    productsList = []



    if (localStorage.getItem("productsList")) {
        productsList = JSON.parse(localStorage.getItem("productsList"))
        ubdateTable(productsList)
    }

function addProduct(){
    if (nameValidate()&&priceValidate()&&catValidate()&&descValidate()) {
        var product = {
            name : productName.value,
            price : productPrice.value,
            category : productCategory.value,
            desc : productDesc.value
        }
    
        productsList.push(product)
    
        ubdateTable(productsList)
        clear()
        localStorage.setItem("productsList",JSON.stringify(productsList))

    }else{
        alert("check product info")
    }
}

function clear (){
    productName.value = ""
    productPrice.value = ""
    productCategory.value = ""
    productDesc.value = ""
    productName.classList.remove("is-valid")
    productPrice.classList.remove("is-valid")
    productCategory.classList.remove("is-valid")
    productDesc.classList.remove("is-valid")
}


function ubdateTable(list){
    var cartona = ""
    for(let i =0 ; i<list.length;i++ ){
    cartona += `<tr>
    <td>${i+1}</td>
    <td>${list[i].name}</td>
    <td>${list[i].price}</td>
    <td>${list[i].category}</td>
    <td>${list[i].desc}</td>
    <td><button class="btn btn-warning" onclick="editProduct(${i})">Update</button></td>
    <td><button class="btn btn-danger" onclick="deletProduct(${i})" >Delete</button></td>
  </tr>`
    }   
    document.getElementById("tbody").innerHTML = cartona
}

function deletProduct(index){
    productsList.splice(index,1)
    ubdateTable(productsList)
    localStorage.setItem("productsList",JSON.stringify(productsList))
}


function editProduct(index){
    productName.value = productsList[index].name
    productPrice.value = productsList[index].price
    productCategory.value = productsList[index].category
    productDesc.value = productsList[index].desc
    localStorage.setItem("editingindex",JSON.stringify(index))
    document.getElementById("addBtn").classList.replace("d-block","d-none")
    document.getElementById("ubdateBtn").classList.replace("d-none","d-block")
    console.log(localStorage.editingindex);
}


function updateProduct(){
    if (nameValidate()&&priceValidate()&&catValidate()&&descValidate()) {

    var index = localStorage.editingindex 
    document.getElementById("addBtn").classList.replace("d-none","d-block")
    document.getElementById("ubdateBtn").classList.replace("d-block","d-none")
    

    productsList[index].name =  productName.value
    productsList[index].price =  productPrice.value
    productsList[index].category =  productCategory.value
    productsList[index].desc =  productDesc.value
    localStorage.removeItem("editingindex")
    localStorage.setItem("productsList",JSON.stringify(productsList))
    ubdateTable(productsList)
    clear()
    }
}


function search(letter) {
    var founded = []
    for(let i=0;i<productsList.length;i++){
        if(productsList[i].name.toLowerCase().includes(letter.toLowerCase())){
            founded.push(productsList[i])
        }else{
            continue
        }
    }
    if(founded.length){
        ubdateTable(founded)
    }else{
        document.getElementById("tbody").innerHTML=`<tr><td colspan="7" class="text-center h1 text-danger">Not found</td></tr>`
    }

    
}



function nameValidate(){
    var regx = /^[A-Z][a-zA-z]{3,8}$/

    if (regx.test(productName.value)) {
        productName.classList.replace("is-invalid","is-valid")
        document.getElementById("nameHelper").classList.replace("d-block","d-none")
        return true

    }else{
        productName.classList.add("is-invalid")
        document.getElementById("nameHelper").classList.replace("d-none","d-block")
        return false

    }
}



function priceValidate(){
    if(/^([1-9][0-9]{3,4}|100000)$/.test(productPrice.value)){
        productPrice.classList.replace("is-invalid","is-valid")
        document.getElementById("priceHelper").classList.replace("d-block","d-none")
        return true
    }else{
        productPrice.classList.add("is-invalid")
        document.getElementById("priceHelper").classList.replace("d-none","d-block")
        return false

    }
}


function catValidate(){
    if(/^(mobile|TV|laptop|Tablet)$/i.test(productCategory.value)){
        productCategory.classList.replace("is-invalid","is-valid")
        document.getElementById("catHelper").classList.replace("d-block","d-none")
        return true
    }else{
        productCategory.classList.add("is-invalid")
        document.getElementById("catHelper").classList.replace("d-none","d-block")
        return false
    }
}


function descValidate(){
    if(/^.{5,}$/i.test(productDesc.value)){
        productDesc.classList.replace("is-invalid","is-valid")
        document.getElementById("descHelper").classList.replace("d-block","d-none")
        return true
    }else{
        productDesc.classList.add("is-invalid")
        document.getElementById("descHelper").classList.replace("d-none","d-block")
        return false
    }
}






