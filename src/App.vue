<template>
  <div>
    <navbar></navbar>
    <div>
      <router-view></router-view>
    </div>
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
