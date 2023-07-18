import axios from 'axios'

export const GetToken = () => {
    const base_url = import.meta.env.URL_TOKEN
    const user = import.meta.env.USUARIO
    const pass = import.meta.env.PASS


    try {
        const response = await axios({
            url: base_url ,
            params: { email: user, 
                      password: pass }
            
       })
        console.log(response)
    } catch (error) {
       console.log(error) 
    }

}

export const GetRegion = () => {

}

export const GetComuna = () => {

}

export const GetEstaciones = () => {

}