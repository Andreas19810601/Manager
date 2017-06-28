



export const requestJsonPost = (path, params) => {
    return fetch('/api/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }).then((res) => {
        return res.json();
    });
    // .then((res) => {
    //     dispatch(res.user)
    // })
}