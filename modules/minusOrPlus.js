export function minus(){
  let number = parseInt(document.getElementById('valueSO_SO').innerText)
  if(number == 0){
    return
  }
  number = number-1
  document.getElementById('valueSO_SO').innerText = number
}

export function plus(){
  let number = parseInt(document.getElementById('valueSO_SO').innerText)
  number = number+1
  document.getElementById('valueSO_SO').innerText = number
}