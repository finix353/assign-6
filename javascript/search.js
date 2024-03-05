function searching(){
    const searchField = document.getElementById("search-field");
    const searchFieldText = searchField.value;
    const searchUrl = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchFieldText}`
    loadEntertainment(searchUrl);
}