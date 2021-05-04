<template>
  <FocusLoop is-visible :disabled="!isOpen">
    <div
      class="va-popup va-fixed va-flex va-flex-wrap va-justify-end va-antialiased va-text-color"
      style="z-index: 10000"
      role="region"
      :dir="dir"
    >
      <transition name="scale">
        <div
          v-show="isOpen"
          id="va-popup-box"
          class="va-popup__box va-w-full va-rounded-lg va-mb-4 va-shadow-lg va-bg-main va-border va-border-solid va-border-gray-200 va-overflow-hidden"
        >
          <PopupHeader />
          <PopupBody />
          <PopupFooter />
        </div>
      </transition>
      <PopupButton
        :popup-show="isOpen"
        :notifications="issuesFound"
        @toggle-popup="togglePopup"
      />
    </div>
  </FocusLoop>
  <Highlight />
</template>

<script>
import { computed, inject } from 'vue'
import { vueAxe } from '../utils/constants'
import { FocusLoop } from '@vue-a11y/focus-loop'

import useDisclosure from '../composables/useDisclosure'
import useEventListener from '../composables/useEventListener'

import PopupBody from './PopupBody.vue'
import Highlight from './Highlight.vue'
import PopupButton from './PopupButton.vue'
import PopupHeader from './PopupHeader.vue'
import PopupFooter from './PopupFooter.vue'

export default {
  name: 'Popup',

  disableAxeAudit: true,

  components: {
    FocusLoop,
    Highlight,
    PopupBody,
    PopupHeader,
    PopupFooter,
    PopupButton
  },

  props: {
    dir: {
      type: String,
      default: 'ltr'
    }
  },

  setup () {
    const { results } = inject(vueAxe)
    const { isOpen, onClose, toggle: togglePopup } = useDisclosure()

    const issuesFound = computed(() => {
      if (!results.value.issuesFound) return 0
      return results.value.issuesFound
    })

    useEventListener('keydown', e => (e.key === 'Escape' && isOpen.value) && onClose())

    return {
      isOpen,
      togglePopup,
      issuesFound
    }
  }
}
</script>

<style>
@import '../styles/base.css';

.va-popup {
  font-family: var(--va-font-family);
  z-index: 999;
  right: 20px;
  bottom: 20px;
  max-width: 420px;
  margin-left: 20px;

  &__box {
    min-width: 280px;
    transition: transform .3s ease-in-out, opacity .2s, visibility .2s;
    transform-origin: bottom right;
    transform: scale3d(1,1,1);
  }

  &[dir="ltr"] {
    @apply va-text-left;
  }

  &[dir="rtl"] {
    @apply va-flex va-flex-wrap va-justify-end va-right-auto;
    left: 20px;
  }
}

.va-popup[dir="rtl"] .va-popup-box {
  transform-origin: bottom left;
}

.va-popup__box {
  &.scale-enter-from, &.scale-leave-active {
    transform: scale3d(0,0,0);
  }

  ul {
    list-style-type: none;
  }

  @media (min-width: 420px) {
    width: 420px;
  }
}

@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  .va-popup * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
</style>
