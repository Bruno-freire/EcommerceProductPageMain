import { Div } from "./classModules/Div.js"
import { Img } from "./classModules/Img.js"
import { Strong } from "./classModules/Strong.js"

function creatElementFunction(srcImg,title,value){
  const miniContent = document.querySelector('.miniContent')
  const idImg = Math.floor(Date.now() * Math.random()).toString(36)
  const quantifyItens = parseInt(document.getElementById('valueSO_SO').innerText)
  const shoesToBuy = new Div(miniContent,{ className: 'shoesToBuy'})
  const miniImgSection = new Div(shoesToBuy,{ className: 'miniImgSection'})
  const primaryImg = new Img(miniImgSection,{ src: srcImg})
  primaryImg.render()
  const textAndValueMiniSection = new Div(shoesToBuy,{className: 'textAndValueMiniSection'})
  const imgDelete = new Div(shoesToBuy,{className: 'imgDelete'})
  const imgD = new Img(imgDelete, {className: 'trashCan',src: './images/icon-delete.svg', id: idImg} )
  imgD.render()
  const titleShoesToBuy = new Div(textAndValueMiniSection,{className: 'titleShoesToBuy', innerText: title})
  const valueText = parseInt(value)
  const valueShoesToBuy = new Div(textAndValueMiniSection,{className: 'valueShoesToBuy',innerText: `$${valueText}.00 x ${quantifyItens} `})
  const strong = new Strong(valueShoesToBuy,{innerText: `$${valueText * quantifyItens}.00`})
  strong.render()

  shoesToBuy.render()
  miniImgSection.render()
  textAndValueMiniSection.render()
  imgDelete.render()
  titleShoesToBuy.render()
  valueShoesToBuy.render()
  const imgForRemove = document.getElementById(idImg)
  imgForRemove.addEventListener('click', ()=>{
    deleteImg(imgForRemove)
  })
}

export function addItemInCart(){
  const value = parseInt(document.getElementById('quantifyInCart').innerText)
  const itensInCart = document.getElementById('itensInCart')
  if(document.getElementById('valueSO_SO').innerText == 0){
    return
  }
  if(itensInCart.style.display == 'flex'){
    document.getElementById('quantifyInCart').innerText = value+1
    creatElementFunction('./images/image-product-1-thumbnail.jpg','Fall Limited Edition Sneakers',125)
  }
  else{
    itensInCart.style.display = 'flex'
    const miniContent = document.querySelector('.miniContent')
    miniContent.innerHTML = ''
    document.getElementById('quantifyInCart').innerText = 1
    creatElementFunction('./images/image-product-1-thumbnail.jpg','Fall Limited Edition Sneakers',125)
  }
  const checkout = document.getElementById('checkoutId')
  if(checkout.style.display == 'none'){
    checkout.style.display = 'flex'
  }
}

function deleteImg(ev){
  ev.parentNode.parentNode.remove()
  let quantifyInCart = document.getElementById('quantifyInCart')
  if(quantifyInCart.innerText == 1){
    quantifyInCart.innerText = 0
    document.getElementById('itensInCart').style.display = 'none'
  }else{
    let quantifyInCartText = parseInt(quantifyInCart.innerText)
    quantifyInCartText--
    quantifyInCart.innerText = quantifyInCartText
  }
  const miniContent = document.querySelector('.miniContent')
  if(miniContent.childNodes.length == 0){
    miniContent.innerText = 'Is Empty.'
    document.getElementById('checkoutId').style.display = 'none'

  }
}