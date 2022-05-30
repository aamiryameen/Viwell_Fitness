export const createAsyncDelay = duration => new Promise((resolve, reject) => setTimeout(() => { resolve(); }, duration));


export function ValidateEmail(mail: string) {
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String.prototype.trim.call(mail))) {
      return (true)
  
    }
    return (false)
  }
  export function ValidatePassword(password: string) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/.test(String.prototype.trim.call(password))) {
      return (true)
    }
    return (false)
  }
import { BASE_UNIT_HEIGHT, BASE_UNIT_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH } from "./constants/index";

export function normalizeFont(size: number, uncontrolled = false) {
    const fontSize = (SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size;
    if (uncontrolled) {
        return fontSize;
    } else {
        return fontSize > 20 ? 20 : fontSize;
    }
}

let isDarkThemeEnabled = false

export function normalizeX(size: number) {
    return Math.round((SCREEN_WIDTH / BASE_UNIT_WIDTH) * size);
}

export function normalizeY(size: number) {
    return Math.round((SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size);
}


export function setIsDarkModeEnabled(isEnabled: boolean) {
  isDarkThemeEnabled = isEnabled
}

export function getIsDarkModeEnabled() {
  return isDarkThemeEnabled
}