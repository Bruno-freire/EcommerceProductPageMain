import '../css/style.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { closeImgs, openImgsThroughThumbnail } from "../modules/openOrCloseContantImgs.js"

const imgClose = document.getElementById('close')
imgClose.addEventListener('click', closeImgs)

import { openImgs } from "../modules/openOrCloseContantImgs.js"

document.querySelectorAll('.carousel-item').forEach((ev) => ev.addEventListener('click', openImgs))
document.querySelectorAll('.thumbnail').forEach((ev) => ev.addEventListener('click', () => {
  openImgsThroughThumbnail(ev.dataset.value)
}))

import { minus, plus } from "../modules/minusOrPlus.js"

document.getElementById('minus').addEventListener('click', minus)
document.getElementById('plus').addEventListener('click', plus)

import { openOrCloseContentCart } from '../modules/openOrCloseContentCart.js'

document.getElementById('cart').addEventListener('click', openOrCloseContentCart)

import { addItemInCart } from '../modules/treatCart.js'

document.getElementById('addItemInTheCart').addEventListener('click', addItemInCart)

import { closeHamburguer, openHamburguer } from '../modules/treatHamburguer.js'

document.getElementById('hamburguerIcon').addEventListener('click', openHamburguer)
document.getElementById('closeIcon').addEventListener('click', closeHamburguer)
document.querySelector('.backgroundNavbar').addEventListener('click', closeHamburguer)