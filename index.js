function createList() {
    let inputTitle = document.getElementById('title-list');
    let inputDescription = document.getElementById('description-list');
    let btnList = document.getElementById('btn-list');
    let ulAddList = document.getElementById('add-list');
    let arrayList = []
    btnList.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(arrayList)
        arrayList.push(
            `<li>
                <a class="delete">
                    <img src="./bin.png" alt="" height="20" width="20">
                </a>
                <h2>${inputTitle.value}</h2>
                <p>${inputDescription.value}</p>
            </li>`
            );
        ulAddList.innerHTML = arrayList.join(' ');
        deleteList();
    });
}


function deleteList() {
    document.querySelectorAll('li').forEach(item => {
        item.children[0].addEventListener('click', () => {
            item.classList.add('display');
        })
    })    
}
createList();