import { SET_USER } from './constants'
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSSAGE } from './constants'

export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  }
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSSAGE,
    id
  }
}

export const setUser = (user) => ({
  type: SET_USER,
  user
})
