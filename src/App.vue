<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
      <router-view></router-view>
  </div>
</template>

<script >
  import navbar from "./components/Navbar";
  export default {
    components: {
      navbar
    }
  };
</script>
