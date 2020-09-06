function render(data){
	const resultsElement = document.querySelector('#results');
	resultsElement.innerHTML = `<li>${data}</li>`;
	console.log(data);
}

async function getRecommendation(event){
	const keywordElement = document.querySelector('#search-field');
	const keyword = keywordElement.value;

	try{
		const res = await axios.get(`http://localhost:3000/autocomplete?keyword=${keyword}`);
		render(res.data);
		return;
	}catch(error){
		console.log("getRecommendation error", error);
		return null;
	}
}

function bindSearchEvent(){
	const search = document.querySelector('#search-field');
	search.addEventListener('input', getRecommendation);
}

function main(){
//search event
bindSearchEvent();

}
document.addEventListener('DOMContentLoaded', main);