document.getElementById("assign-teams-btn").addEventListener("click", assignTeams);

function assignTeams() {
    const players = [];
    for (let i = 1; i <= 10; i++) {
        const playerName = document.getElementById(`player${i}`).value;
        if (playerName) {
            players.push(playerName);
        }
    }

    if (players.length !== 10) {
        alert("10人のプレイヤーを入力してください。");
        return;
    }

    shuffle(players);

    // 各チームの役職を割り当てる
    document.getElementById("blue-top").textContent = players[0];
    document.getElementById("blue-jg").textContent = players[1];
    document.getElementById("blue-mid").textContent = players[2];
    document.getElementById("blue-bot").textContent = players[3];
    document.getElementById("blue-sp").textContent = players[4];

    document.getElementById("red-top").textContent = players[5];
    document.getElementById("red-jg").textContent = players[6];
    document.getElementById("red-mid").textContent = players[7];
    document.getElementById("red-bot").textContent = players[8];
    document.getElementById("red-sp").textContent = players[9];
}

// 配列をシャッフルする関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
