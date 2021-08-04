const onClickAdd = () => {
    const inputText = document.getElementById("input__text").value;
    document.getElementById("input__text").value = ""

    createIncomleteList(inputText);

};


document.getElementById("add__button").addEventListener("click" , () => {
    onClickAdd() 
});

const deleteFromTodo = (target) => {
    document.getElementById("todo__list").removeChild(target);
}

const createIncomleteList = (text) => {
    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = "contents";
    div.innerText = text;

    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click" , () => {
        deleteFromTodo(div.parentNode);
        const addTarget = div.parentNode;
        const slicedText = div.innerText;
        const text = slicedText.slice(0 , -4);
        
        addTarget.textContent = null;

        const divComplete = document.createElement("div");
        divComplete.className = "contents";
        divComplete.innerText = text;  
        div.className = "contents";

        const backButton = document.createElement("button")
        backButton.innerText ="戻す"
        backButton.addEventListener("click" , () => {
            document.getElementById("finish__list").removeChild(backButton.parentNode);
            const backTarget = div.parentNode;
            const backSlicedText = div.innerText;
            const backText = backSlicedText.slice(0 , -4);

            createIncomleteList(backText);
        })

        addTarget.appendChild(divComplete);
        addTarget.appendChild(backButton);

        document.getElementById("finish__list").appendChild(addTarget);

        window.confirm("よくできました！");
        let img = document.getElementById("img");
        img.style.display = "none"
    })

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click" , () => {
        deleteFromTodo(div.parentNode);
    })

    li.appendChild(div);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    document.getElementById("todo__list").appendChild(li);

}