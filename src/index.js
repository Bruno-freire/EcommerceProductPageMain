import { minus, plus } from "../modules/minusOrPlus.js"
import { closeImgs, openImgsThroughThumbnail } from "../modules/openOrCloseContantImgs.js"
const imgClose = document.getElementById('close')
imgClose.addEventListener('click', closeImgs)

import { openImgs } from "../modules/openOrCloseContantImgs.js"

document.querySelectorAll('.carousel-item').forEach((ev) => ev.addEventListener('click', openImgs))
document.querySelectorAll('.thumbnail').forEach((ev) => ev.addEventListener('click', () => {
  openImgsThroughThumbnail(ev.dataset.value)
}))

document.getElementById('minus').addEventListener('click', minus)
document.getElementById('plus').addEventListener('click', plus)
