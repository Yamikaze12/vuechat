<template>
  <div class="form-auth">
    <div v-if="showLogin">
        <Mylogin />
        <p>
          gak punya akun? yak 
          <a href="#" @click="showLogin = false">Bikin Akunlah</a>
        </p>
    </div>
    <div v-else>
        <Myregister />
        <p>
          punya akun? yak 
          <a href="#" @click="showLogin = true">Login cok</a>
        </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Mylogin from '../components/auth/login'
import Myregister from '../components/auth/register'
import { ref } from 'vue'
export default {
    name: "HomeView",
    components: { Mylogin, Myregister },
    setup(){
      const showLogin = ref(true)

      return { showLogin }
    }
}
</script>
