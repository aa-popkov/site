import axios from 'axios'
import { config } from '@/utils/config'
import type { IToken } from '@/models/token'
import { useUserStore } from '@/utils/store'
import type { IUser } from '@/models/users'

export const sendMessage = async (data: object, token: string) => {
  return await axios.postForm(`${config.BACKEND_API}/api/v1/client/send_message`, data, {
    headers: {
      'X-Token': token
    }
  })
}

export const login = async (data: object) => {
  return await axios.postForm<IToken>(`${config.BACKEND_API}/api/v1/auth/login`, data)
}

export const getUsers = async () => {
  const {token} = useUserStore()
  return await axios.get<IUser[]>(
    `${config.BACKEND_API}/api/v1/user/get_all`,
    {
      params: {
        page_number: 0,
        page_size: 10
      },
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    )
}
