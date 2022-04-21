export const getItem = <T>(key: string) => {
  let value = window.localStorage.getItem(key)
  if (!value) return value
  value = JSON.parse(value)
  if (value && typeof value === 'object') return value as T
  return value
}
export function setItem (key: string, value: object | string | null) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
export function removeItem (key: string) {
  window.localStorage.removeItem(key)
}
