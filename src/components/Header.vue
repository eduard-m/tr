<template>
    <header class="header">
        <h2 class="logo" @click="$router.push('/home')">
            <span class="font-weight-light">Trollo</span>
        </h2>

        <nav>
            <router-link tag="a" to="/home">
                <i class="fas fa-home"></i>
                Главная
            </router-link>

            <router-link tag="a" to="/board">
                <i class="fas fa-clipboard-list"></i>
                Доска
            </router-link>

            <router-link tag="a" to="/">
                <i class="fas fa-sign-in-alt"></i>
                Login
            </router-link>

            <router-link tag="a" to="">
                Sign up
            </router-link>

        </nav>
    </header>
</template>

<script>
export default {
   
  }
</script>