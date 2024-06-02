<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { isAxiosError } from 'axios'
import SendIcon from '@/components/Icons/SendIcon.vue'
import { sendMessage } from '@/utils/api'
import { config } from '@/utils/config'
import LoaderIcon from '@/components/Icons/LoaderIcon.vue'
import type { TTreeChecked } from '@/models/treeChecked'
import MessageMasteredList from '@/components/PageContact/MessageMasteredList.vue'
import { generateCheckedTreeString, isCheckedRecursive } from '@/utils/checkBoxTree'
import QuestionIcon from '@/components/Icons/QuestionIcon.vue'
import TooltipElement from '@/components/Shared/TooltipElement.vue'
import { useNotifyStore } from '@/utils/store'

const baseMsgContent = 'Hi Alexey 👋\n' + "I'm need your expertise, for next:\n"
const { addMessage } = useNotifyStore()

const msgTitle = ref('')
const msgTitleLength = ref(0)
const validTitleLength = computed(() => msgTitleLength.value > 2 && msgTitleLength.value < 256)

const msgContact = ref('')
const msgContactLength = ref(0)
const validContactLength = computed(
  () => msgContactLength.value > 4 && msgContactLength.value < 256
)

const secureText = ref(baseMsgContent)
const msgContent = ref(secureText.value)

const checkedList = inject('checkedList') as TTreeChecked[]
const checkCheckedList = computed(() => checkedList.some((v) => isCheckedRecursive(v)))

const isLoading = ref(false)
const checkForm = computed(
  () => validContactLength.value && validTitleLength.value && checkCheckedList.value
)

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
  isLoading.value = true
  try {
    if (msgContent.value !== secureText.value) {
      throw new Error('U try cracked, but u lose 👾')
    }

    if (!checkCheckedList.value) {
      throw new Error('Choose one or more expertise in list!')
    }

    const apiResponse = await sendMessage(
      {
        title: msgTitle.value,
        content: secureText.value,
        contact: msgContact.value
      },
      getToken()
    )
    console.log(apiResponse)
    if (apiResponse.status === 200) {
      addMessage({
        msg: 'The message has been sent successfully. Remember that sending more than one message per hour is not recommended. I will definitely contact you at the specified contacts as soon as possible.',
        color: 'success'
      })
      return
    } else {
      throw new Error(`Request is failed: ${apiResponse.data}`)
    }
  } catch (e) {
    if (isAxiosError(e)) {
      let respData = e.response?.data
      respData = JSON.stringify(respData ? respData : e.message, null, 2)
      addMessage({
        msg: respData,
        color: 'error'
      })
    } else {
      addMessage({
        msg: (e as Error).message,
        color: 'error'
      })
    }
    console.error(e)
  } finally {
    isLoading.value = false
  }
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
  <form
    method="post"
    class="bg-gray-800 rounded-2xl w-full max-w-3xl flex flex-col p-4 gap-2"
    @submit="onSubmit"
  >
    <label for="name" class="text-gray-50 flex-col flex items-start border-b pb-2 border-gray-500">
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
          class="appearance-none placeholder:italic py-2 px-3 rounded-l w-full text-gray-950"
        />
        <input
          class="appearance-none w-fit text-sm max-w-20 min-w-10 cursor-default rounded-r border-l px-1 text-center transition duration-700"
          :class="validTitleLength ? 'bg-green-600' : 'bg-red-500'"
          readonly
          :value="`${msgTitleLength}/255`"
          type="text"
          name="name-counter"
          id="name-counter"
        />
      </span>
    </label>
    <Transition name="from-top-slow">
      <label
        v-if="msgTitleLength < 256 && msgTitleLength > 2"
        for="name"
        class="text-gray-50 flex-col flex items-start border-b pb-2 border-gray-500"
      >
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
            class="appearance-none placeholder:italic py-2 px-3 rounded-l w-full text-gray-950"
          />
          <input
            class="appearance-none w-fit text-sm max-w-20 min-w-10 cursor-default rounded-r border-l px-1 text-center transition duration-700"
            :class="validContactLength ? 'bg-green-600' : 'bg-red-500'"
            readonly
            :value="`${msgContactLength}/255`"
            type="text"
            name="name-counter"
            id="name-counter"
          />
        </span>
      </label>
    </Transition>

    <Transition name="from-top-slow">
      <div v-if="validContactLength && validTitleLength" class="border-b pb-2 border-gray-500">
        <h3 class="text-gray-50">Choose one or more</h3>
        <MessageMasteredList class="text-gray-50" />
      </div>
    </Transition>

    <label for="msg-body" class="text-gray-50 flex-col flex items-start">
      <span>Message text (read only)</span>
      <textarea
        name="msg-body"
        id="msg-body"
        rows="6"
        readonly
        placeholder="Dear Alexey, ..."
        class="w-full h-full rounded text-gray-950 px-3 py-2 disabled:bg-gray-200 cursor-not-allowed"
        :value="msgContent"
      ></textarea>
    </label>
    <div class="flex items-center justify-center">
      <Transition>
        <div v-if="!checkForm">
          <TooltipElement>
            <template #default>
              <QuestionIcon class="w-6 h-6 fill-gray-500 stroke-gray-500 stroke-0" />
            </template>
            <template #content>
              <span>It is necessary to fill out the form in full</span>
            </template>
          </TooltipElement>
        </div>
      </Transition>
      <button
        :disabled="isLoading || !checkForm"
        class="flex items-center px-2 py-1 disabled:bg-gray-500 disabled:cursor-not-allowed transition duration-500 bg-blue-600 text-red-50 rounded w-52 h-8 relative"
      >
        <span class="flex-grow">Send</span>
        <span class="w-6 h-6">
          <LoaderIcon v-if="isLoading" class="animate-spin" />
          <SendIcon class="w-6 h-6 fill-gray-50 stroke-gray-700" v-else />
        </span>
      </button>
    </div>
  </form>
</template>

<style scoped></style>
