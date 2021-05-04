import { ref } from 'vue'

export default function useDisclosure () {
  const isOpen = ref(false)

  function onOpen () {
    isOpen.value = true
  }

  function onClose () {
    isOpen.value = false
  }

  function toggle () {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    toggle,
    onOpen,
    onClose
  }
}
