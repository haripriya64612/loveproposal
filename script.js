function openLove(){
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:linear-gradient(135deg,#ff758c,#ff7eb3);
            color:white;
            font-family:Segoe UI;
            text-align:center;
        ">
            <h1>Yayyyy ❤️🥰</h1>
            <p>You made me the happiest person alive 💖</p>
        </div>
    `;
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
