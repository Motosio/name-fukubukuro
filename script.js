const nameDisplay = document.getElementById("name");
const button = document.getElementById("drawButton");
const count = document.getElementById("count");

count.textContent = `現在 ${names.length} 個`;

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];

    nameDisplay.classList.remove("show");

    // アニメーションを再発火
    void nameDisplay.offsetWidth;

    nameDisplay.textContent = selectedName;
    nameDisplay.classList.add("show");
});
