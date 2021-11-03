<template>
  <div style="width: 200px; height: 200px">
    <canvas id="canvasPie"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

export default {
  name: 'PieChart',

  setup() {
    const chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        onClick: e => {
          const canvasPosition = getRelativePosition(e, chart);

          // Substitute the appropriate scale IDs
          const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
          const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        },
      },
    });
  },
};
</script>

<style lang="scss"></style>
