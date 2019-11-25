<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      width="300px"
    >
      <template #handle>
        <div class="setting" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <div class="settingItem">
          <h3>整体风格定制</h3>
          <a-radio-group
            :value="$route.query.navTheme || 'dark'"
            @change="e => handleSettingChange('navTheme', e.target.value)"
          >
            <a-radio value="dark">黑色</a-radio>
            <a-radio value="light">白色</a-radio>
          </a-radio-group>
        </div>
        <div class="settingItem">
          <h3>导航模式</h3>
          <a-radio-group
            :value="$route.query.navLayout || 'left'"
            @change="e => handleSettingChange('navLayout', e.target.value)"
          >
            <a-radio value="left">左侧</a-radio>
            <a-radio value="top">顶部</a-radio>
          </a-radio-group>
        </div>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      navTheme: 'dark',
      navLayout: 'left',
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    },
  },
};
</script>
<style lang="less" scoped>
.setting {
  position: absolute;
  top: 240px;
  right: 300px;
  background: #1890ff;
  width: 48px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  color: white;
  font-size: 20px;
  border-radius: 3px 0 0 3px;
  cursor: pointer;
}
.settingItem {
  width: 100%;
  margin-bottom: 10px;
}
</style>
