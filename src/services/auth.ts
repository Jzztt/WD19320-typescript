import { RegisterType } from "../components/auth/Register"
import instanceAxios from "../ultis/configAxios"

const login = () => {

}

const register = async (user: RegisterType) => {
    try {
        const { data } = await instanceAxios.post('/register', user);
        return data
    } catch (error) {
        console.log(error);
    }
}

export const authServices = {
    login,
    register
}