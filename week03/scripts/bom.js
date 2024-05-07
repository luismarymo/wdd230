const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


let chaptersArray = getChapterList() || [] //if the function returns null or undefined, it will asign an empty array instead

button.addEventListener("click", () => {
    if (input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
    }

    input.focus();
})

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const li = document.createElement("li");
    const delButton = document.createElement("button");

    li.textContent = item;
    delButton.textContent = 'X';

    li.append(delButton);
    list.append(li);

    delButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('BOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("BOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);

    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    setChapterList();
}