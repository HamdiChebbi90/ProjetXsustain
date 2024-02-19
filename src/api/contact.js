

export const addFeed = async (data) => {
    const response = await fetch('http://localhost:5000/apifeed/registerfeed', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
    }

