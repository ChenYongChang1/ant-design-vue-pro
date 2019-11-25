<template>
  <div style="width: 256px">
    <!-- <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button> -->
    <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['2']"
      mode="inline"
      :theme="theme"
    >
      <!-- :openKeys="openKeys"
      @openChange="onOpenChange" -->
      <!-- :inlineCollapsed="collapsed" -->
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="$router.push({ path: item.path, query: $route.query })"
        >
          <a-icon
            v-if="item.meta && item.meta.icon"
            :type="item.meta && item.meta.icon"
          />
          <span>{{ item }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </div>
</template>

<script>
/*
 * recommend SubMenu.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu.vue
 * SubMenu1.vue https://github.com/vueComponent/ant-design-vue/blob/master/components/menu/demo/SubMenu1.vue
 * */
import SubMenu from './SubMenu';
export default {
  components: {
    'sub-menu': SubMenu,
  },
  props: {
    theme: {
      type: String,
      default: 'dark',
    },
  },
  data() {
    const menuData = this.getMenuData(this.$router.options.routes);
    return {
      collapsed: false,
      openKeys: [],
      menuData,
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    getMenuData(routes) {
      const menuData = [];
      routes.forEach(item => {
        if (item.name && !item.hideInMenu) {
          const newItem = { ...item };
          delete newItem.children;
          if (item.children && !item.hideChildInMune) {
            newItem.children = this.getMenuData(item.children);
          }
          menuData.push(newItem);
        } else if (!item.hideInMenu && !item.hideChildInMune && item.children) {
          menuData.push(...this.getMenuData(item.children));
        }
      });
      return menuData;
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1,
      );
      if (latestOpenKey) {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>
