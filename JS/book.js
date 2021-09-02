// Search Book 

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value= ''
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    
    .then(res => res.json())
    .then (data => displaySearchResult(data.docs))
}

// Display searchBook section

const displaySearchResult = books =>{
    console.log(books.title);
    // Display searchBook Counting
    document.getElementById('search-count').innerHTML= `<p >Total items found: ${books.length}  </p>`;
     
    // if (books.numFound === 0) {
    //     document.getElementById('numFound').innerHTML = `<h4>No Result Found</h4>`;
    // }
    // else {
    //     document.getElementById('numFound').innerHTML = `<h4>Found 
    //     ${books.numFound} Results</h4>`;
    // }

    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML= '';
    // Book List
    books.forEach(book => {
        console.log(book);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div  class="card m-4">
                
                <div class="card-body  text-center">
                    <h4>Book Details</h4>
                    
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg">
                    
                    <h5 class="card-title">Book Name: ${book.title}</h5>
                    <h6 class="card-text">Author Name: ${book.author_name?.shift()}</h6>
                    <h6 class="card-text">Publisher: ${book.publisher?.shift()}</h6>
                    <h6 class="card-text">Published Year: ${book.first_publish_year}</h6>
                    
                </div>
        </div>
        `
        searchResult.appendChild(div);
        
        
    });
    
}

