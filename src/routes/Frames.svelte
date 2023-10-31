<script>
  let imagePath = "../some-shit.jpg";
</script>

<main>
  <div class="frame-list">
    <div class="frame-card" style="background-image: url({imagePath})">
      <header class="frame-header" />
    </div>
  </div>
</main>

<style>
  .frame-list {
    display: flex;
    position: static;
    overflow-x: scroll;
    overflow-y: hidden;
    cursor: default;
  }

  .frame-card {
    align-items: end;
    height: 260px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 1.5rem;
    border-radius: 0px;
    background-color: var(--color-bg-1);
    box-shadow: inset;
  }

  /* .frame-header h2 {
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
</style>
