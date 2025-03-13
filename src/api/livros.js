export const salvarLivro = async (title, author, genre, pages) => {
    const token = localStorage.getItem('token'); 
    pages = parseInt(pages, 10)
    const body = { title, author, genre, pages }
    const response = await fetch(`${process.env.REACT_APP_URL_API}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    });

    return response;
}