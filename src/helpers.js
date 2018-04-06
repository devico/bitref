import * as R from 'ramda'
import {solvedBoard} from './constants'

export const shuffleBoard = board => {
  const arr = [...board]
  for (let i = arr.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    const x = arr[index];
    arr[index] = arr[i];
    arr[i] = x;
  }
  return arr
}
