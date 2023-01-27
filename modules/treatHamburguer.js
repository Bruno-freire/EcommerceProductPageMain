export function openHamburguer(){
  window.scrollTo(0,0);
  document.querySelector('.sideNavbar').style.left= '0em'
  document.documentElement.style.overflow = 'hidden'
}

export function closeHamburguer(){
  document.querySelector('.sideNavbar').style.left= '-100em'
  document.documentElement.style.overflow = 'visible'
}