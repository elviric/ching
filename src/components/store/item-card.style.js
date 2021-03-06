import STYLE from 'constants/style'

import STORE from './constants'

const BADGE_RADIUS = 22

export default {
  base: {
    position: 'relative',
    marginTop: 30,
    paddingLeft: STORE.MIN_SPACE_BETWEEN_ITEMS,
  },
  base__first: {
    paddingLeft: 0,
  },

  photo: {
    borderRadius: 12,
    width: STORE.ITEM_WIDTH,
    height: STORE.ITEM_WIDTH,
  },
  photo__selected: {
    border: `3px solid ${STYLE.COLOR.CYAN}`,
    borderRadius: 12,
    boxSizing: 'border-box',
  },
  photo__noPhoto: {
    backgroundColor: STYLE.COLOR.LIGHT_BLUE,
  },
  photo_badge: {
    position: 'absolute',
    top: -17,
    right: -15,

    width: BADGE_RADIUS * 2,
    height: BADGE_RADIUS * 2,
    borderRadius: BADGE_RADIUS,
    backgroundColor: STYLE.COLOR.CYAN,

    color: STYLE.COLOR.WHITE,
    fontSize: 18,
    fontWeight: STYLE.FONT.WEIGHT.BOLD,
  },
  photo_gradient: {},
  photo_editButton: {
    background: STYLE.COLOR.WHITE,
    borderRadius: 70,
    boxShadow: `0px 8px 8px ${STYLE.COLOR.TRANSLUCENT_BLACK}`,

    fontSize: 12,
    fontWeight: STYLE.FONT.WEIGHT.MEDIUM,

    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  itemName: {
    marginTop: 15,
    color: STYLE.COLOR.BLUE,
    fontSize: 16,
    fontWeight: STYLE.FONT.WEIGHT.MEDIUM,
  },

  itemPrice: {
    marginTop: 5,
    color: STYLE.COLOR.BLUE,
    fontSize: 14,
    fontWeight: STYLE.FONT.WEIGHT.MEDIUM,
  },
}
