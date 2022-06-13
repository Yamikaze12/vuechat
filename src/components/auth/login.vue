<template>
    <form action="form-auth">
        <div class="alert alert-danger" v-if="error">
        {{ error }}
        </div>
        <h3 class="h3 mb-3 fw-normal" id="loreg">Login</h3>
        
        <div class="form-floating">
            <input type="email" class="form-control">
            <label for="">Email Address</label>
        </div>

        <div class="form-floating">
            <input type="password" class="form-control">
            <label for="">Password</label>
        </div>
        <button class="w-100 btn btn-lg animated-button victoria-two" type="submit">
            Login
        </button>
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>