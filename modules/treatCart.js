function creatElementFunction(srcImg,title,value){
  const miniContent = document.querySelector('.miniContent')
  const quantifyItens = parseInt(document.getElementById('valueSO_SO').innerText)
  const shoesToBuy = document.createElement('div')
  shoesToBuy.className = 'shoesToBuy'
  const miniImgSection = document.createElement('div')
  miniImgSection.className = 'miniImgSection'
  const primaryImg = document.createElement('img')
  primaryImg.setAttribute('src', srcImg)
  miniImgSection.appendChild(primaryImg)
  const textAndValueMiniSection = document.createElement('div')
  textAndValueMiniSection.className = 'textAndValueMiniSection'
  const imgDelete = document.createElement('div')
  imgDelete.className = 'imgDelete'
  const imgD = document.createElement('img')
  imgD.setAttribute('src', './images/icon-delete.svg')
  imgDelete.appendChild(imgD)

  const titleShoesToBuy = document.createElement('div')
  titleShoesToBuy.className = 'titleShoesToBuy'
  titleShoesToBuy.innerText = title
  const valueShoesToBuy = document.createElement('div')
  valueShoesToBuy.className = 'valueShoesToBuy'

  const valueText = parseInt(value)
  valueShoesToBuy.innerText = `$${valueText}.00 x ${quantifyItens} `
  const strong = document.createElement('strong')
  strong.innerText = `$${valueText * quantifyItens}.00`
  valueShoesToBuy.appendChild(strong)


  textAndValueMiniSection.append(titleShoesToBuy,valueShoesToBuy)
  shoesToBuy.append(miniImgSection,textAndValueMiniSection,imgDelete)
  miniContent.append(shoesToBuy)
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