import {getUser} from "./DataManager.js"
// import { Results } from "./user.js"
import { resultslist } from "./userlist.js";


// getUser().then(resultapi =>{
// console.log("stuff", resultapi.results[0].cell)
// showResults(resultapi.results[0])
// }) 

// const showResults = (userobject) => {
// 	//Get a reference to the location on the DOM where the list will display
// 	const navElement = document.querySelector("nav");
// 		navElement.innerHTML = Results(userobject);
// 	}
const showresultsList = () => {
	//Get a reference to the location on the DOM where the list will display
	const resultsElement = document.querySelector(".resultsList");
	getUser().then(allResults => {
		resultsElement.innerHTML = resultslist(allResults.results);
	})
}

const startUser = () => {
	showresultsList();
}
startUser();



