<template>
  <div></div>
</template>

<script>
import { checkAuth } from '../router/auth';
export default {
  mounted() {
    console.log(checkAuth);
  },
};
</script>

<style lang="less" scoped></style>
