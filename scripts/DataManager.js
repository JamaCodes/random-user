export const getUser = () => {

    return fetch("https://randomuser.me/api/?results=50&exc=login")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;    })
};

 