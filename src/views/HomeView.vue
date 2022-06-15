<template>
  <div class="form-auth">
    <div v-if="showLogin">
        <Mylogin @login="accessRoom" />
        <p>
          gak punya akun? yak 
          <a href="#" @click="showLogin = false">Bikin Akunlah</a>
        </p>
    </div>
    <div v-else>
        <Myregister @register="accessRoom"/>
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
import { useRouter } from 'vue-router'
export default {
    name: "HomeView",
    components: { Mylogin, Myregister },
    setup(){
      const showLogin = ref(true)
      const router = useRouter()

      const accessRoom = () => {
        router.push({ name: 'Room' })
      }


      return { showLogin, accessRoom }
    },
}
</script>
