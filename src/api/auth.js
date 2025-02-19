export const login = async (cpf, password) => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cpf, password })
    });

    

    return response;
    console.log(response)
}

export const register = async (name, cpf, password) => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, cpf, password })
    });

   return response;
}