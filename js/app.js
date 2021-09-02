const searchBook =  () => {
    const searchField = document.getElementById('search-area');
    const searchText = searchField.value;

    // clear data 
    searchField.value = '';

    if(searchText === ''){
        const error = document.getElementById('error');
        error.innerText = 'please write something';
    }
    else{
       // load data 
     const url = `https://openlibrary.org/search.json?q=${searchText}`;
     //  console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data));
    }
     
}
const displaySearchResult =  books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // console.log(books.docs);

    const bookes = books.docs;
    // console.log(bookes);

    for(const book in bookes){
        console.log(bookes[book].title);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div style="padding: 10px; background-color: #f6f6f6;" class="card h-100">
                <img width="100%" src="https://covers.openlibrary.org/b/id/${bookes[book].cover_i}.jpg" />
                <div class="card-body">
                    
                    <h5 style="margin-top: 10px" class="card-title">${bookes[book].title}</h5>
                    <h6>Author Name: ${bookes[book].author_name}</h6>
                    <p>${bookes[book].publish_date}
                    </p>
                    <p>Frist published year: ${bookes[book].first_publish_year}</p>
                    <p>Publisher: ${bookes[book].publisher}</p>
            </div>
    </div>
        `;
        searchResult.appendChild(div);
    }
}
