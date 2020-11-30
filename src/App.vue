<template>
  <div>
    <navbar></navbar>
    <div class="container mt-5">
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
