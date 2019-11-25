<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider
        :theme="navTheme"
        :trigger="null"
        v-if="navLayout === 'left'"
        collapsible
        v-model="collapsed"
      >
        <div class="logo">
          Ant Design Pro
        </div>
        <Sidbar />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-icon
            v-if="navLayout === 'left'"
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          ></a-icon>
          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <settingDarwer></settingDarwer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || 'dark';
    },
    navLayout() {
      return this.$route.query.navLayout || 'left';
    },
  },
  components: {
    Sidbar: resolve => require(['./Public/Sidbar.vue'], resolve),
    Header: resolve => require(['./Public/Header.vue'], resolve),
    Footer: resolve => require(['./Public/Footer.vue'], resolve),
    settingDarwer: resolve =>
      require(['../SettingDarwer/SettingDarwer.vue'], resolve),
  },
};
</script>

<style lang="less" scoped>
.logo {
  height: 64px;
  line-height: 64px;
  // background: rgba(255, 255, 255, 0.2);
  // margin: 16px;
}
.trigger {
  padding: 0 20px;
  box-sizing: border-box;
  line-height: 64px;
  font-size: 20px;
  &:hover {
    background: #eeeeee;
  }
}
.anticon {
  vertical-align: 0;
}
.nav-theme-dark .logo {
  color: #eeeeee;
}
</style>
