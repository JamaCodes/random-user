export const getUser = () => {

    return fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        console.log("get user", parsedResponse)
    })
}
