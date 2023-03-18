

// add item using btn click 
document.getElementById('addProductBtn').addEventListener('click',function(){
   addItem()
})
// add item using enter key press
document.getElementById('addProductId').addEventListener('keypress',function(e){
   if (e.key === 'Enter') {
      addItem()
    }
})


function addItem(){
   const addProductElement=document.getElementById('addProductId')
   const addProductText=addProductElement.value

   if(addProductText==''){
      return;
   }
   addProductElement.value=''
   setProduct(addProductText)

   //save to localStore products
   saveProductToLocalStore(addProductText)
}



const setProduct=(text)=>{
   const productContainer=document.getElementById('productContainer')
   const li=document.createElement('li')
   li.innerText=text
   productContainer.appendChild(li)

   
   
}

const saveProductToLocalStore=(productName)=>{
   // get product localStore 
   let products=getProductLocalStore()
   // set new product
   products.push(productName)

   let productsString=JSON.stringify(products)
   localStorage.setItem('products',productsString)

}

// get product from  localStore
const getProductLocalStore=()=>{
   let products=[]
   let storeCart=localStorage.getItem('products')
   if(storeCart){
      return products=JSON.parse(storeCart)
   }else{
      return products
   }
}



// show product form localStore .// show product list on our display
const showProductLocalStore=()=>{
   let products=getProductLocalStore()

   products.forEach(product=>{
     setProduct(product)
   })

}

showProductLocalStore()



