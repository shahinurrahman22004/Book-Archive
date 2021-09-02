// search what you want and batton input 
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

      error.innerText = '';
    }
     
}

// dispaly book details --------
const displaySearchResult =  books => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // console.log(books.docs);

    const bookes = books.docs;
    // console.log(bookes.length);

    // dispaly total result ------------------------
    const totalResult = document.getElementById('total-result');
    totalResult.innerText = `Total Result Found: ${bookes.length}`;

    if (bookes.length === 0){
        const error2 = document.getElementById('error2');
        error2.innerText = 'No result found';
    }
    else{
        // creating a div and dispaly the value --------------
        for(const book in bookes){
            // console.log(bookes[book]);
    
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div style="padding: 10px; background-color: #f6f6f6; border-radius: 10px" class="card h-100">
                    <img style="border-radius: 10px;" width="100%" src="https://covers.openlibrary.org/b/id/${bookes[book].cover_i}.jpg" />
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

            error2.innerText ='';
        }
        
    }
    
    
}
