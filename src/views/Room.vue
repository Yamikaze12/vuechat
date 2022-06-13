<template>
  <Navbar />
  <main class="content mt-2 shadow-mt p-0">
    <div class="cg text-white">
        <h3 class="p-3">Chat Group</h3>
    </div>
    <div class="chat-wrapper">
        <Chatbox />
        <ChatForm />
    </div>
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Chatbox from '../components/chat/Chatbox.vue'
import ChatForm from '../components/chat/Form.vue'
export default {
    components:{
        Navbar,Chatbox,ChatForm,
    },
}
</script>

<style>

</style>