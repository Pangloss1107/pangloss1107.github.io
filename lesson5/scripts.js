const input = document.querySelector('input')

const button = document.querySelector('button')

const list = document.querySelector('ul')

button.addEventListener('click', function() {
    if (input.value.length === 0){
        alert("Please add a chapter of the Book of Mormon")
    } else {
        const items = input.value;
    

    const listofItems = document.createElement("li");
    const listofText = document.createElement("span")
    const listofButtons = document.createElement("button")


    listofItems.appendChild(listofText);
    listofText.textContent = items;
    listofItems.appendChild(listofButtons);
    listofButtons.textContent = "❌"; 

    list.appendChild(listofItems)

    listofButtons.addEventListener("click", function () {
        list.removeChild(listofItems)
    });
    input.focus();
}
})