import { atom } from "recoil";

export const horseState = atom({
  key: 'horseState',
  default: {
    teer: 0,
    currentExperience: 0,
    nextExperience: 0,
    tick: 0,
    currentLevel: 0,
    targetLevel: 0,
  },
});