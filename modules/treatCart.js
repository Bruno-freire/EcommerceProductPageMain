export function addItemInCart(){
  const value = parseInt(document.getElementById('quantifyInCart').innerText)
  const quantifyItens = parseInt(document.getElementById('valueSO_SO').innerText)
  const itensInCart = document.getElementById('itensInCart')
  if(itensInCart.style.display == 'flex'){
    document.getElementById('quantifyInCart').innerText = value+1
  }
  else{
    itensInCart.style.display = 'flex'
    document.getElementById('quantifyInCart').innerText = 1
  }
}