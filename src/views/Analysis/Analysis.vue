<template>
  <div>
    分析页
    <E-charts></E-charts>
  </div>
</template>
<script>
import { User } from '../../api/User';
export default {
  async mounted() {
    let res = await User.login({
      userName: 'cyc',
      userPassword: 'Asd12345!',
    });
    console.log(res);
  },
  components: {
    ECharts: resolve => {
      require(['../../components/Charts/Charts'], resolve);
    },
  },
};
</script>
