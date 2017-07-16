let spritesPipeline = { }

let Sprite = function (url) {
  let image = new Image();
  image.src = url;

  this.sprite = image;
  this.name = name;
}

module.exports = {
  Sprite: Sprite,
}