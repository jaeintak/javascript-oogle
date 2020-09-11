function render(data){
	let str ='';
	data.forEach(function(d){
		str += '<li id="result">'+d+'</li>';
	})
	document.querySelector('#results').innerHTML = str;
	
}

async function getRecommendation(){
	const keywordElement = document.querySelector('#search-field');
	const keyword = keywordElement.value;

	try{
		const res = await axios.get(`http://localhost:3000/autocomplete?keyword=${keyword}`);
		render(res.data);
	}catch(error){
		console.log("getRecommendation error", error);
		return null;
	}
}

function bindSearchEvent(){
	const search = document.querySelector('#search-field');
	search.addEventListener('input', getRecommendation);
}

function selectKeyword(){
	console.log('hello');
}

function main(){
	bindSearchEvent();
	//클릭하면 인풋 값이 키워드로 변경
}
document.addEventListener('DOMContentLoaded', main);