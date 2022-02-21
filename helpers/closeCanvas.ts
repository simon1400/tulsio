import { offcanvas, util } from 'uikit'

export default (e, id) => {
  e.preventDefault()
  offcanvas(util.find(id)).hide();
}