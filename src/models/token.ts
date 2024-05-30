export interface IToken {
  access_token: string,
  token_type: string
}

export interface IUserToken {
  exp: number
  sub: string
  iat: number
}


export const getToken = (): string | null => {
  return localStorage.getItem('token')
}
export const setToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const parseJwt = (token: string | null): IUserToken | null => {
  if (!token) {
    return null
  }
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))
  const parsedJson = JSON.parse(jsonPayload) as IUserToken
  if (parsedJson?.exp) {
    return JSON.parse(jsonPayload)
  }
  return null
}

