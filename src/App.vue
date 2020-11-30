<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-center flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">TeeXee</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Add User</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/list">View User</router-link>
          </li>
        </ul>
      </div>
      
    </nav>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
