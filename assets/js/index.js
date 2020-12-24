window.onload = () => {
    const game = new Game("battle-city-canvas");

    const play = document.querySelector("#play")

    play.addEventListener("click", () => {
        const intro = document.querySelector("#intro")
        const gameBoard = document.querySelector("#game")
        gameBoard.style.display = "block"
        intro.style.display = "none"
        game.start()

    })

    document.addEventListener("keydown", (event) => {
        game.onKeyEvent(event);
    });

    document.addEventListener("keyup", (event) => {
        game.onKeyEvent(event);
    });


}