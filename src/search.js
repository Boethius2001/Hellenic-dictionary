
function GetSearch(){

    let FirstChar;
    let LowerText;
    let FullName;

    const SearchInput = document.getElementById("SearchElement").value;
    
    FirstChar = SearchInput.charAt(0);
    FirstChar = FirstChar.toUpperCase();
    LowerText = SearchInput.slice(1,);
    LowerText = LowerText.toLowerCase();
    
    FullName = (FirstChar+LowerText).trim();
    
    DisplayResult(FullName);
}

function DisplayResult(title){
    let TitleArea = document.getElementById("TitleID");
    let ExpArea = document.getElementById("ExpID");
    let Found = false;

    for(i=0; i< Titles.length; i++){

        if(title === Titles[i].Title || title === Titles[i].TitleAlt){
            TitleArea.innerHTML = `<u>${Titles[i].Title}</u>`;
            ExpArea.innerHTML = Titles[i].Explanation;
            Found = true;
            break;
        }
    }

    if(!Found){
        TitleArea.innerHTML = title;
        if(title.length == 0){
            ExpArea.innerHTML = "Nothing found about 'Blank'";
        }
        else{
            ExpArea.innerHTML = "Nothing found about "+ title;
        }
    }

}

let GetGodList = document.getElementById("GodsList");
for(e=0; e < Titles.length; e++){
    GetGodList.innerHTML += `<li>${Titles[e].Title}</li>`;
}
console.log("Hellooo");
