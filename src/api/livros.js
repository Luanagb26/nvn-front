export const salvarLivro = async (tittle, description) => {
    const response = await fetch(`${process.env.REACT_APP_URL_API}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tittle, description })
    });

    return response;
}