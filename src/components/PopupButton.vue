<template>
  <button
    class="va-btn va-popup-btn va-w-16 va-h-16 va-relative va-outline-none va-bg-main va-text-color va-border-0 va-rounded-full va-inline-block va-pt-1"
    aria-haspopup="true"
    aria-controls="va-popup-box"
    :aria-expanded="popupShow.toString()"
    :aria-label="ariaLabelButton"
    @click="$emit('togglePopup')"
  >
    <span
      v-show="notifications && !popupShow"
      class="va-absolute va-leading-3 va-w-8 va-h-8 va-flex va-items-center va-justify-center va-text-base va-rounded-full va-bg-notification va-font-bold va-text-color"
      aria-live="assertive"
      aria-atomic="true"
    >
      {{ notifications }}
      <span class="va-sr-only">
        {{ Number(notifications) > 1 ? $vat('btn_label_plu') : $vat('btn_label') }}
      </span>
    </span>
    <svg
      v-show="!popupShow"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      aria-hidden="true"
    >
      <path
        d="M17 0a17 17 0 1017 17A17 17 0 0017 0zm-.3 3.4a2.2 2.2 0 11-2.2 2.2 2.2 2.2 0 012.2-2.2zm9.6 7l-6.6.9v6.5L23 28.4A1.2 1.2 0 0122 30a1.2 1.2 0 01-1.5-.8l-3.2-9.7h-1l-3 9.9a1.2 1.2 0 01-1.6.6 1.3 1.3 0 01-.8-1.6L13.6 18v-6.7l-6-.8a1 1 0 01-1-1.2 1.1 1.1 0 011.3-1l7.3.6h3.2l7.8-.7a1.1 1.1 0 010 2.3z"
        fill="#414141"
      />
    </svg>
    <svg
      v-show="popupShow"
      xmlns="http://www.w3.org/2000/svg"
      width="26.2"
      height="26.2"
      aria-hidden="true"
    >
      <path
        d="M24.1 2.1l-22 22m0-22l22 22"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      />
    </svg>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'PopupButton',

  props: {
    popupShow: {
      type: Boolean,
      default: false
    },

    notifications: {
      type: Number,
      default: 0
    }
  },

  emits: ['togglePopup'],

  disableAxeAudit: true,

  setup (props) {
    const ariaLabelButton = computed(() => `${props.popupShow ? 'Close' : 'Open'} vue axe popup`)

    return {
      ariaLabelButton
    }
  }
}
</script>

<style>
.va-popup-btn {
  box-shadow: 2px 2px 3px 2px #dfdfdf;
  transition: box-shadow .1s;

  &:focus, &:hover {
    box-shadow: 0 0 0 3px var(--va-outline-color);
  }

  > span {
    left: -10px;
    top: -10px;
  }
}
</style>
