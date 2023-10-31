<script>
  let images = ["../a.jpg", "../b.jpg", "../c.jpg", "../d.jpg", "../e.jpg"];
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
    <!-- <h2>placeholder</h2> -->
  </div>

  <div class="btn-container">
    <button class="btn" on:click={prev}>PREV</button>
    <button class="btn" on:click={next}>NEXT</button>
  </div>
</div>

<style>
  .slider {
    margin: 30px auto;
    width: 100%;
    justify-content: center;
  }
  .slider-img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    /* background: linear-gradient(0deg, #00000088 30%, #ffffff44 100%); */
  }
  .img-box {
    height: 360px;
    width: 100%;
    display: flex;
  }
  .img-box img {
    background-repeat: no-repeat;
    align-items: end;
    height: 360px;
    width: 100%;
    background-size: contain;
    background-position: center;
    display: flex;
    position: static;
  }

  /* h2 {
    font-size: 24px;
    font-weight: bold;
    font-family: "Unbounded";
    background-color: rgb(0, 0, 0);
    height: max-content;
    width: max-content;
    font-weight: 100;
    margin: 1px;
    text-decoration: none;
    color: var(--color-text-2);
    border: 0;
    display: inline-block;
    cursor: pointer;
    padding: 5px;
  } */
  .btn-container {
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    .btn {
      font-size: 8px;
      padding: 5px 12px;
    }
  }
  .btn {
    font-family: "Unbounded";
    border: none;
    outline: none;
    background: #88888800;
    padding: 10px 20px;
    font-size: 10px;
    color: #000000;
    cursor: pointer;
    margin: 10px auto;
  }

  .btn:hover {
    background: #111;
    color: #ffffff;
  }
</style>
