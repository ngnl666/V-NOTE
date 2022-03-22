<template>
  <canvas id="myChart" class="w-full" v-show="mode === 'bright'"></canvas>
  <canvas id="myChart-dark" class="w-full" v-show="mode === 'dark'"></canvas>
</template>

<script>
import { computed, inject, onMounted, toRefs } from 'vue';
import Chart from 'chart.js/auto';

export default {
  name: 'ActiveChart',
  setup() {
    const store = inject('store');
    const { state, getTime } = store;

    const get7Date = (m, d) => {
      const arr = [`${m}/${d}`];

      for (let i = 1; i < 7; i++) {
        const yesterday = new Date(
          new Date().setDate(new Date().getDate() - i)
        );
        arr.unshift(`${yesterday.getMonth() + 1}/${yesterday.getDate()}`);
      }
      return arr;
    };

    onMounted(() => {
      const ctx = document.getElementById('myChart');
      const ctx_dark = document.getElementById('myChart-dark');
      const dateArr = get7Date(new Date().getMonth() + 1, new Date().getDate());
      const freq = [0, 0, 0, 0, 0, 0, 0];

      state.myNotes.forEach(note => {
        const noteDate = new Date(note.createdAt);
        const index = dateArr.indexOf(
          `${noteDate.getMonth() + 1}/${noteDate.getDate()}`
        );
        index > 0 ? freq[index]++ : false;
      });

      const chartInfo = {
        type: 'line',
        data: {
          labels: dateArr,
          datasets: [
            {
              label: '發文次數',
              data: freq,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              borderWidth: 2,
            },
          ],
        },
      };

      const myChart = new Chart(ctx, {
        ...chartInfo,
        options: {
          responsive: true,
          scales: {
            y: {
              grid: {
                color: 'gray',
                borderColor: 'black',
              },
              ticks: {
                precision: 0,
              },
            },
          },
        },
      });

      const myChart_dark = new Chart(ctx_dark, {
        ...chartInfo,
        options: {
          responsive: true,
          plugins: {
            legend: {
              labels: {
                color: 'rgb(255,255,255)',
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: 'gray',
                borderColor: 'white',
              },
              ticks: {
                color: 'rgb(255,255,255)',
              },
            },
            y: {
              grid: {
                color: 'white',
                borderColor: 'white',
              },
              ticks: {
                color: 'rgb(255,255,255)',
                precision: 0,
              },
            },
          },
        },
      });
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
