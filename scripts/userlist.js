import { Results } from "./user.js";

export const resultslist = (allResults) => {
    
    let userHTML = "";
    for (const resultsObject of allResults) {
        userHTML += Results(resultsObject)
    }
    return userHTML;
}