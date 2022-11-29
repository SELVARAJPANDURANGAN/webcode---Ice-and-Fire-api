var divi=document.createElement('div')
divi.innerHTML=`<div class="container"> 
<div class="search-wrapper">
    <input type="text" id="book-number"
    placeholder="Enter a Text - example : books/1 (1 to 12 Numbers only)"/>
    <button type="button" id="search-btn" onclick="foo()">Search</button> </div>
    <div id="result"></div>
    <div id="characters">
</div>
</div>`
    document.body.append(divi)
    async function foo(){
        try{
        let bookInput = document.getElementById("book-number").value
        let result = await fetch(`https://www.anapioficeandfire.com/api/${bookInput}`)
        let data= await result.json();
        console.log(data)
       document.getElementById("result").innerHTML=`<h3>Details of : ${bookInput}</h3><div class="data-wrapper">
                       <p><h4>Books Name : </h4>${data.name}</p><p><h4>Books isbn : </h4>${data.isbn}</p><p><h4>Number of pages in the Book: </h4>${data.numberOfPages}</p><p><h4>Books Author: </h4>${data.authors}</p>
                       <p><h4>Books Publisher Name : </h4>${data.publisher}</p><p><h4>Books Released Date: </h4>${data.released}</p><h4>Books Characters: </h4><br><br>
                       ${data.characters[0]}
                       ${data.characters[1]}   ${data.characters[2]}  ${data.characters[3]}  ${data.characters[4]}</div>`}
catch (err){
 result.innerHTML=`<h2>Please Enter a Valid Text ex: books/1 <br> <span>Number enter 1 to 12 only </span></h2> `
}}
foo();
