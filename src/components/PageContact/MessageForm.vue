<script setup lang="ts">
import { inject, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { isAxiosError } from 'axios'
import SendIcon from '@/components/Icons/SendIcon.vue'
import { sendMessage } from '@/utils/api'
import { config } from '@/utils/config'
import LoaderIcon from '@/components/Icons/LoaderIcon.vue'
import ExpandSection from '@/components/Shared/ExpandSection.vue'
import type { TTreeChecked } from '@/models/treeChecked'

const baseMsgContent = 'Hi Alexey 👋\n' + "I'm need your expertise, for next:\n"

const secureText = ref(baseMsgContent)
const msgTitle = ref('')
const msgTitleLength = ref(0)
const msgContact = ref('')
const msgContactLength = ref(0)
const msgContent = ref(secureText.value)
const isLoading = ref(false)
const error = ref('')
const success = ref('')

const checkedList = inject('checkedList') as TTreeChecked[]

const getToken = (): string => {
  let token = localStorage.getItem(config.LOCALSTORAGE_KEYS.clientId)
  if (!token) {
    token = uuidv4()
    localStorage.setItem(config.LOCALSTORAGE_KEYS.clientId, token)
  }
  return token
}

const onSubmit = async (e: Event) => {
  e.preventDefault()
  error.value = ''
  isLoading.value = true
  try {
    if (msgContent.value !== secureText.value) {
      throw new Error('U try cracked, but u lose 👾')
    }
    const apiResponse = await sendMessage(
      {
        title: msgTitle.value,
        content: secureText.value,
        contact: msgContact.value
      },
      getToken()
    )
    if (apiResponse.status === 200) {
      success.value =
        'The message has been sent successfully. Remember that sending more than one message per hour is not recommended. I will definitely contact you at the specified contacts as soon as possible.'
      return
    } else {
      throw new Error(`Request is failed: ${apiResponse.data}`)
    }
  } catch (e) {
    if (isAxiosError(e)) {
      const respData = e.response?.data
      error.value = JSON.stringify(respData ? respData : e.message, null, 2)
    } else {
      error.value = (e as Error).message
    }
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

const isCheckedRecursive = (node: TTreeChecked): boolean => {
  if (node.checked) return true
  if (node.children) {
    for (const child of node.children) {
      if (isCheckedRecursive(child)) return true
    }
  }
  return false
}

const generateCheckedTreeString = (tree: TTreeChecked[], depth: number = 0): string => {
  let result = ''

  for (const node of tree) {
    if (
      node.checked ||
      (node.children && node.children.some((child) => isCheckedRecursive(child)))
    ) {
      const spaceSymbol = depth > 0 ? ' ⎿ ' : '• '
      result += '  '.repeat(depth) + spaceSymbol + node.title + '\n'
      if (node.children) {
        result += generateCheckedTreeString(node.children, depth + 1)
      }
    }
  }

  return result
}

watch(checkedList, (value) => {
  secureText.value = baseMsgContent
  secureText.value += generateCheckedTreeString(value)
  msgContent.value = secureText.value
})

watch(msgTitle, (value) => {
  msgTitleLength.value = value.length ?? 0
})

watch(msgContact, (value) => {
  msgContactLength.value = value.length ?? 0
})
</script>

<template>
  <div>
    <form method="post" class="bg-gray-800 rounded-2xl flex flex-col p-4 gap-2" @submit="onSubmit">
      <Transition name="from-top">
        <ExpandSection v-if="error" class="bg-red-500 rounded text-gray-50" closable>
          <template #title>
            <span class="text-lg">Oops... Some error just occurred!</span>
          </template>
          <template #body>
            <pre class="text-sm">{{ error }}</pre>
          </template>
        </ExpandSection>
      </Transition>
      <Transition name="from-top">
        <ExpandSection v-if="success" class="bg-green-600 rounded text-gray-50" closable>
          <template #title>
            <span class="text-lg">Message successful sent!</span>
          </template>
          <template #body>
            <span>{{ success }}</span>
          </template>
        </ExpandSection>
      </Transition>
      <label for="name" class="text-gray-50 flex-col flex items-start">
        <span>Enter your name</span>
        <span class="flex w-full">
          <input
            v-model.trim="msgTitle"
            :disabled="isLoading"
            placeholder="Donald Trump"
            type="text"
            name="name"
            id="name"
            required
            maxlength="255"
            minlength="3"
            class="placeholder:italic py-2 px-3 rounded-l w-full text-gray-950"
          />
          <input
            class="w-fit max-w-20 min-w-10 cursor-default rounded-r border-l px-1 text-center transition duration-700"
            :class="msgTitleLength > 255 || msgTitleLength < 3 ? 'bg-red-500' : 'bg-green-600'"
            disabled
            :value="`${msgTitleLength}/255`"
            type="text"
            name="name-counter"
            id="name-counter"
          />
        </span>
      </label>
      <label for="name" class="text-gray-50 flex-col flex items-start">
        <span>Enter your contact</span>
        <span class="flex w-full">
          <input
            v-model.trim="msgContact"
            :disabled="isLoading"
            placeholder="mobile, tg, wa, mail, etc."
            type="text"
            name="contact"
            id="contact"
            required
            maxlength="255"
            minlength="5"
            class="placeholder:italic py-2 px-3 rounded-l w-full text-gray-950"
          />
          <input
            class="w-fit max-w-20 min-w-10 cursor-default rounded-r border-l px-1 text-center transition duration-700"
            :class="msgContactLength > 255 || msgContactLength < 5 ? 'bg-red-500' : 'bg-green-600'"
            disabled
            :value="`${msgContactLength}/255`"
            type="text"
            name="name-counter"
            id="name-counter"
          />
        </span>
      </label>
      <label for="msg-body" class="text-gray-50 flex-col flex items-start">
        <span>Message text (read only)</span>
        <textarea
          name="msg-body"
          id="msg-body"
          rows="6"
          disabled
          placeholder="Dear Alexey, ..."
          class="w-full h-full rounded text-gray-950 px-3 py-2 disabled:bg-gray-200 cursor-not-allowed"
          :value="msgContent"
        ></textarea>
      </label>
      <button
        :disabled="isLoading"
        class="flex items-center px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed transition duration-500 bg-blue-600 text-red-50 rounded w-52 h-8 mx-auto relative"
      >
        <span class="flex-grow">Send</span>
        <span class="w-6 h-6">
          <LoaderIcon v-if="isLoading" class="animate-spin" />
          <SendIcon v-else />
        </span>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
