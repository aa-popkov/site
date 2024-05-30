import { getToken,  type IUserToken, parseJwt, setToken } from '@/models/token'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import { login } from '@/utils/api'

export const useUserStore = defineStore('auth', () => {
  const token = ref(getToken())
  const user = ref<IUserToken | null>(getToken() ? parseJwt(getToken()) : null)
  const loading = ref(false)

  const signIn = async (username: string, password: string) => {
    const resp = await login({username: username, password: password})
    if (resp.status === 200) {
      setToken(resp.data.access_token)
      user.value = parseJwt(resp.data.access_token)
      await router.push('/manage/messages')
    }
  }
  const signOut = async () => {
    localStorage.removeItem('token')
    user.value = null
    token.value = null
    await router.push('/login')
  }
  const startLoading = () => {
    loading.value = true
  }
  const endLoading = () => {
    loading.value = false
  }
  return { token, user, loading, signIn, signOut, startLoading, endLoading }
})
