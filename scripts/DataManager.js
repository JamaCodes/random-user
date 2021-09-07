export const getUsers = () => {

    return fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}