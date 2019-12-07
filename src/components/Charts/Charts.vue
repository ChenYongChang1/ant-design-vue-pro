<template>
  <div>
    <div class="chartDom" ref="chartDom"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.chartDom);
    // 绘制图表
    myChart.setOption({
      title: {
        text: '分析',
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
};
</script>
<style lang="less" scoped>
.chartDom {
  height: 400px;
}
</style>
