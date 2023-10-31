<script>
  let images = ["../a.jpg", "../b.jpg", "../c.jpg", "../d.jpg"];
  let i = 0;

  function setImg() {
    currentImage = images[i];
  }

  function prev() {
    i = i <= 0 ? images.length - 1 : i - 1;
    setImg();
  }

  function next() {
    i = i >= images.length - 1 ? 0 : i + 1;
    setImg();
  }

  let currentImage = images[i];
  setImg();
</script>

<div class="slider">
  <div class="img-box">
    <img src={currentImage} class="slider-img" alt="images" />
  </div>

  <button class="btn" on:click={prev}>Prev</button>
  <button class="btn" on:click={next}>Next</button>
</div>

<style>
  .slider {
    margin: 50px auto;
    width: 50%;
  }

  .img-box img {
    width: 100%;
  }

  .btn {
    font-family: "Jost";
    border: none;
    outline: none;
    background: #888;
    padding: 10px 30px;
    font-size: 20px;
    color: #ddd;
    cursor: pointer;
    margin: 10px auto;
  }

  .btn:hover {
    background: #111;
  }
</style>
