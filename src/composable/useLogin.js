import { ref } from 'vue'
import { projectAuth } from '../config/firebase';

const error = ref(null)

const login = async (email, password) => {
    error.value = null

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        console.log(res)
        return res
    } catch (err) {
        console.error(err.value)
        error.value = 'intinya mah salah mass'
    }

}

const useLogin = () => {
    return { error, login}
}

export default useLogin