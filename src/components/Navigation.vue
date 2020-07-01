<template>
  <div>
    <header>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/rombus-global.8ca25977.svg" alt />
        </router-link>
      </div>
      <nav>
        <ul>
          <li class="navBtns">
            <router-link to="/soluciones">soluciones</router-link>
          </li>
          <li class="navBtns">
            <router-link to="/staff">staff</router-link>
          </li>
          <li class="navBtns">
            <router-link to="/blog">blog</router-link>
          </li>
          <li class="navBtns">
            <router-link to="/wizard">publicar proyecto</router-link>
          </li>
        </ul>
      </nav>
      <div class="profilePic">
        <img src="@/assets/profileImg.png" alt />
      </div>
    </header>
  </div>
</template>
