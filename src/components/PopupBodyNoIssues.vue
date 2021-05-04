<template>
  <div class="va-p-5">
    <h2
      id="congratulation-title"
      class="va-text-xl va-uppercase va-text-green-800 va-text-center va-mt-3"
    >
      {{ $vat('congrats', 'Congratulation') }}
    </h2>
    <p class="va-text-center va-mt-4">
      (0) {{ $vat('no_issues') }}
    </p>
    <div class="va-flex va-flex-wrap va-items-center va-justify-center va-my-4 va-pt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="143.5"
        height="179.7"
      >
        <g transform="translate(0 -3)">
          <circle
            cx="15.3"
            cy="15.3"
            r="15.3"
            transform="translate(53.7 3)"
          />
          <path d="M69 141.1a35.3 35.3 0 01-18.4-65.4v-7a41.4 41.4 0 1057.8 50.2l-5-5a35.4 35.4 0 01-34.3 27.2z" />
          <path d="M53.7 90.5a15.3 15.3 0 0015.4 15.3h30.7l30.7 30.7a7.7 7.7 0 0010.8-10.8L110.6 95a15.3 15.3 0 00-10.8-4.5H84.4v-42a33.7 33.7 0 008.6-6.3l26-26a7.7 7.7 0 00-10.8-10.9l-26 26a18.4 18.4 0 01-26.1 0l-26-26a7.7 7.7 0 00-11 10.9l26.1 26a33.7 33.7 0 008.5 6.2z" />
          <text
            transform="translate(0 172.7)"
            font-size="7"
            font-family="Arial-BoldMT, Arial"
            font-weight="700"
          >
            <tspan
              x="0"
              y="0"
            >Created by Egon Låstad</tspan>
          </text>
          <text
            transform="translate(0 180.7)"
            font-size="7"
            font-family="Arial-BoldMT, Arial"
            font-weight="700"
          >
            <tspan
              x="0"
              y="0"
            >from the Noun Project</tspan>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupBodyNoIssues',

  disableAxeAudit: true
}
</script>
