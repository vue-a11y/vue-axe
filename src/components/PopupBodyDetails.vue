<template>
  <div class="va-details va-p-5">
    <div
      class="va-flex va-justify-between va-items-center va-sticky va-bg-main va--mt-5 va-py-3"
      style="top: 0;"
    >
      <button
        type="button"
        class="va-btn va-flex va-items-center va-px-2 va-py-3 va-relative"
        @click="$emit('hideDetails')"
      >
        <IconArrowNarrow />
        <span class="va-ml-2 va-text-base va-font-medium va-leading-3">{{ $vat('back', 'Back') }}</span>
      </button>
      <button
        type="button"
        class="va-btn va-flex va-items-center va-px-2 va-py-3 va-relative"
        @click="toggleHighlight(details.nodes)"
      >
        <svg
          class="va-w-4 va-h-4 va-text-color"
          fill="currentColor"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g v-if="highlights">
            <path
              fill-rule="evenodd"
              d="M3.7 2.3a1 1 0 00-1.4 1.4l14 14a1 1 0 001.4-1.4l-1.5-1.5a10 10 0 003.3-4.8c-1.2-4-5-7-9.5-7a10 10 0 00-4.5 1L3.7 2.4zM8 6.6L9.5 8a2 2 0 012.4 2.4l1.5 1.5A4 4 0 008 6.6z"
              clip-rule="evenodd"
            />
            <path d="M12.5 16.7L9.7 14A4 4 0 016 10.3L2.3 6.6A10 10 0 00.5 10a10 10 0 0012 6.7z" />
          </g>
          <g v-else>
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.5 10a10 10 0 0119 0 10 10 0 01-19 0zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </g>
        </svg>
        <span class="va-ml-2 va-text-base va-font-medium va-leading-3">
          {{ highlights ? $vat('no_highlight', 'Stop highlight') : $vat('highlight', 'Highlight') }}
        </span>
      </button>
    </div>
    <section :aria-labelledby="`issue-desc-${details.id}`">
      <h2
        :id="`issue-desc-${details.id}`"
        class="va-p-item__header va-bg-primary va-flex va-justify-between va-font-medium va-p-3 va-border va-border-solid va-border-gray-300 va-text-base"
      >
        {{ $vat('issue_desc', 'Issue description') }}
      </h2>
      <p class="va-p-3">
        {{ details.description }}
        <br>
        <ExternalLink
          :href="details.helpUrl"
          :aria-labelledby="`more-${details.id} issue-desc-${details.id}`"
          style="margin-left: -0.25rem;"
        >
          <span :id="`more-${details.id}`">{{ $vat('learn_more', 'Learn more') }}</span>
        </ExternalLink>
      </p>
    </section>
    <section
      v-for="(failure, index) in details.failureSummary"
      :key="`failure-section-${index}`"
      class="va-flex va-flex-wrap va-px-3 va-mb-8"
    >
      <div class="va-w-full va-flex va-items-center va-justify-between">
        <h2 class="va-font-medium va-text-base">
          {{ $vat('el_src', 'Element source') }}
        </h2>
        <div class="va-flex va-items-center">
          <span class="va-mx-1 va-font-medium va-text-sm">
            {{ index + 1 }} / {{ details.failureSummary.length }}
          </span>
        </div>
      </div>
      <div class="va-code-block va-w-full va-my-3 va-p-4 va-rounded-md va-bg-gray-900">
        <pre class="va-whitespace-pre-wrap"><code
          class="va-w-full va-bg-gray-900 va-text-gray-100"
          v-html="getCodeBlock(failure.source)"
        /></pre>
      </div>
      <div class="va-w-full va-mt-2">
        <h3 class="va-font-medium va-text-base">
          {{ failure.errors.length > 1 ? $vat('fixes') : $vat('fix') }}:
        </h3>
        <ul class="va-mt-2">
          <li
            v-for="error in failure.errors"
            :key="`error-item-${error.id}`"
            class="va-flex va-items-start va-mt-3"
          >
            <span :class="`va-text-2xl va-font-bold va-leading-4 va-mr-2 va-text-${error.impact}`">&#8226;</span>
            <p>{{ error.message }}</p>
          </li>
        </ul>
      </div>
    </section>
    <section
      v-show="references.length"
      :aria-labelledby="`references-${details.id}`"
    >
      <h2
        :id="`references-${details.id}`"
        class="va-p-item__header va-bg-primary va-flex va-justify-between va-font-medium va-p-3 va-border va-border-solid va-border-gray-300 va-text-base"
      >
        {{ $vat('more_links', 'More links') }}
      </h2>
      <ul class="va-p-3 va-pt-2">
        <li
          v-for="(reference, index) in references"
          :key="`reference-item-${index}`"
          class="va-flex"
        >
          <span class="va-text-blue-700 va-text-xl va-font-bold va-inline-block va-w-3 va-mt-1">&#8226;</span>
          <ExternalLink :href="reference.link">
            {{ reference.title }}
          </ExternalLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue'
import prismjs from 'prismjs'

import referencesLinks from '../utils/references'
import useHighlight from '../composables/useHighlight'

import ExternalLink from './ExternalLink.vue'
import IconArrowNarrow from './IconArrowNarrow.vue'


export default {
  name: 'PopupBodyDetails',

  components: {
    ExternalLink,
    IconArrowNarrow
  },

  props: {
    details: {
      type: Object,
      required: true
    }
  },

  emits: ['hideDetails'],

  disableAxeAudit: true,

  setup (props) {
    const { highlights, toggleHighlight } = useHighlight()
    const references = computed(() => referencesLinks[props.details.id])

    function getCodeBlock (source) {
      return prismjs.highlight(source, prismjs.languages.markup, 'markup')
    }

    return {
      references,
      highlights,
      getCodeBlock,
      toggleHighlight
    }
  }
}
</script>

<style>
.va-code-block {
  .token.property, .token.tag, .token.constant, .token.symbol, .token.deleted {
    color: #ffa07a;
  }

  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
    color: #abe338;
  }

  .token.atrule, .token.attr-value, .token.function {
    color: #ffd700;
  }
}
</style>
