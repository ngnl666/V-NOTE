<template>
  <div class="graph">
    <p class="text-gray-400">發文頻率</p>
    <ul class="months dark:text-white">
      <li>Jan</li>
      <li>Feb</li>
      <li>Mar</li>
      <li>Apr</li>
      <li>May</li>
      <li>Jun</li>
    </ul>
    <ul class="days dark:text-white">
      <li>Sun</li>
      <li>Mon</li>
      <li>Tue</li>
      <li>Wed</li>
      <li>Thu</li>
      <li>Fri</li>
      <li>Sat</li>
    </ul>
    <ul class="squares overflow-x-auto">
      <!-- <li v-for="item in activeLog" :class="{'light':item.level[0], 'medium':item.level[1], 'dark':item.level[2]}"></li> -->
    </ul>
  </div>
</template>

<script>
import { inject, toRefs, onMounted } from 'vue';

export default {
  name: 'ActiveChart',
  setup() {
    const store = inject('store');
    const { state } = store;

    onMounted(() => {
      const squares = document.querySelector('.squares');
      for (let i = 1; i < 182; i++) {
        const level = Math.floor(Math.random() * 3);
        squares.insertAdjacentHTML(
          'beforeend',
          `<li data-level="${level}"></li>`
        );
      }
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
:root {
  --square-size: 15px;
  --square-gap: 5px;
  --week-width: calc(var(--square-size) + var(--square-gap));
}

.months {
  grid-area: months;
}
.days {
  grid-area: days;
}
.squares {
  grid-area: squares;
}

.graph {
  display: inline-grid;
  grid-template-areas:
    'empty months'
    'days squares';
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
}

.months {
  display: grid;
  grid-template-columns:
    calc(var(--week-width) * 4) /* Jan */
    calc(var(--week-width) * 4) /* Feb */
    calc(var(--week-width) * 4) /* Mar */
    calc(var(--week-width) * 5) /* Apr */
    calc(var(--week-width) * 4) /* May */
    calc(var(--week-width) * 4); /* Jun */
}

.days,
.squares {
  display: grid;
  grid-gap: var(--square-gap);
  grid-template-rows: repeat(7, var(--square-size));
}

.squares {
  grid-auto-flow: column;
  grid-auto-columns: var(--square-size);
}

/* Other styling */
.graph {
  @apply border rounded-lg shadow-lg p-5 m-5;
}

.days li:nth-child(odd) {
  visibility: hidden;
}

.squares li {
  background-color: #ebedf0;
}

.squares li[data-level='1'] {
  background-color: #c6e48b;
}

.squares li[data-level='2'] {
  background-color: #7bc96f;
}

.squares li[data-level='3'] {
  background-color: #196127;
}
</style>
