export const getUser = () => {

    return fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;    })
};

 