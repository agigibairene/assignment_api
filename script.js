
const dictionary = async (word)=>{
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e2357a34dbmsh2ee1d3a3578a14ap1d0410jsn5ecfac4b47b3',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        heading.innerHTML = result.word;
        meaning.innerHTML = result.definition.replace("2", "<br>2.").replace("3", "<br>3.");
        
    } catch (error) {
        console.error(error);
}
}



search.addEventListener("click", async (e)=>{
  e.preventDefault();
  dictionary(input.value);
});
