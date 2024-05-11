function setup() {
  // Define o tamanho da tela.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Define o background.
  background = new Image();
  background.src = "background.png";

  // Cria o personagem do jogador.
  player = new Image();
  player.src = "player.png";

  // Define a posição do personagem do jogador.
  player.x = canvas.width / 2;
  player.y = canvas.height / 2;

  // Cria as moedas.
  coins = [];
  for (var i = 0; i < 100; i++) {
    var coin = new Image();
    coin.src = "coin.png";

    // Define uma posição aleatória para a moeda.
    coin.x = Math.random() * canvas.width;
    coin.y = Math.random() * canvas.height;

    coins.push(coin);
  }
}

function update() {
  // Verifica se o jogador pressionou alguma tecla.
  if (keyDown(LEFT)) {
    player.x -= 5;
  } else if (keyDown(RIGHT)) {
    player.x += 5;
  } else if (keyDown(UP)) {
    player.y -= 5;
  } else if (keyDown(DOWN)) {
    player.y += 5;
  }

  // Verifica se o jogador colidiu com alguma moeda.
  for (var i = 0; i < coins.length; i++) {
    if (player.x == coins[i].x && player.y == coins[i].y) {
      // Remove a moeda da lista.
      coins.splice(i, 1);

      // Aumenta o score.
      score++;
    }
  }
}

function draw() {
  // Desenha o background.
  canvas.drawImage(background, 0, 0);

  // Desenha o personagem do jogador.
  canvas.drawImage(player, player.x, player.y);

  // Desenha as moedas.
  for (var i = 0; i < coins.length; i++) {
    canvas.drawImage(coins[i], coins[i].x, coins[i].y);
  }

  // Desenha o score.
  context.font = "16px Arial";
  context.fillStyle = "white";
  context.fillText(score, 10, 20);
}

window.addEventListener("load", function() {
  // Cria o canvas.
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  // Inicializa o jogo.
  setup();

  // Define o intervalo de atualização.
  setInterval(update, 1000 / 60);

  // Define o callback para o desenho.
  draw();
});
