export const salvarLivro = async (title, description) => {
    const token = localStorage.getItem('token'); 
    const response = await fetch(`${process.env.REACT_APP_URL_API}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, description })
    });



    return response;
}