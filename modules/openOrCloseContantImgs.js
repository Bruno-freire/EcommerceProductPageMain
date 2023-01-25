export function closeImgs(){
  document.getElementById('containerImg').style.display = 'none'
  let passedOn = 0
  document.querySelectorAll('.carousel-item').forEach((ev) => {
    if(passedOn == 0 && ev.className == 'carousel-item active'){
      passedOn = 1
    }
    else if(passedOn == 1 && ev.className == 'carousel-item active'){
      ev.className = 'carousel-item'
    }
  })
}
export function openImgs(){
  document.getElementById('containerImg').style.display = 'flex'
  let value = 0
  document.querySelectorAll('.carousel-item').forEach((ev) => {
    if(ev.className == 'carousel-item active'){
      ev.className == 'carousel-item'
      value = ev.dataset.value
    }
    else if(ev.dataset.value == value){
      ev.className = 'carousel-item active'
    }
  })
}

export function openImgsThroughThumbnail(value){
  document.querySelectorAll('.carousel-item').forEach((ev) => {
    if(ev.className == 'carousel-item active'){
      if(ev.dataset.value == value){
        return
      }
      else{
        ev.className = 'carousel-item'
      }
    }
    else if(ev.dataset.value == value){
      ev.className = 'carousel-item active'
    }
  })
}