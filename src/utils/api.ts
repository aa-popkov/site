import axios from 'axios'
import { config } from '@/utils/config'

export const sendMessage = async (data: object, token: string) => {
  return await axios.postForm(
    `${config.BACKEND_API}/api/v1/client/send_message`,
    data,
    {
      headers: {
        'X-Token': token
      }
    }
  )
}