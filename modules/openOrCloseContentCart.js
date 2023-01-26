export function openOrCloseContentCart(){
  const cart = document.getElementById('contentCart')
  if(cart.style.display == 'none'){
    cart.style.display = 'flex'
  }
  else{
    cart.style.display = 'none'
  }
}