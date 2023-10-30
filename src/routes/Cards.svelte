<script>
</script>

<card class="card-list">
  <article class="card">
    <header class="card-header">
      <p>Web Development</p>
      <h2>Svelte</h2>
    </header>

    <div class="card-author">
      <div class="avatar">
        <img src="../svelte-icon.svg" alt="svelte-icon" />
      </div>

      <div class="author-name">
        <div class="author-name-prefix" />
      </div>
    </div>
  </article>

  <article class="card" id="csharp-card">
    <header class="card-header">
      <p>Game Development</p>
      <h2>C#</h2>
    </header>

    <div class="card-author">
      <div class="avatar">
        <img src="../csharp.svg" alt="svelte-icon" />
      </div>

      <div class="author-name">
        <div class="author-name-prefix" />
      </div>
    </div>
  </article>

  <article class="card">
    <header class="card-header">
      <p>Software Development</p>
      <h2>Java</h2>
    </header>

    <div class="card-author">
      <div class="avatar">
        <img src="../java.svg" alt="svelte-icon" />
      </div>

      <div class="author-name">
        <div class="author-name-prefix" />
      </div>
    </div>
  </article>

  <article class="card" id="js-card">
    <header class="card-header">
      <p>Web Development</p>
      <h2>JavaScript</h2>
    </header>

    <div class="card-author">
      <div class="avatar">
        <img src="../javascript-icon.svg" alt="svelte-icon" />
      </div>

      <div class="author-name">
        <div class="author-name-prefix" />
      </div>
    </div>
  </article>

  <article class="card" id="html-card">
    <header class="card-header">
      <p>Web Development</p>
      <h2>HTML</h2>
    </header>

    <div class="card-author">
      <div class="avatar">
        <img src="../html-icon.svg" alt="svelte-icon" />
      </div>

      <div class="author-name">
        <div class="author-name-prefix" />
      </div>
    </div>
  </article>

  <article class="card">
    <header class="card-header">
      <p>Web Development</p>
      <h2>CSS</h2>
    </header>

    <div class="card-author">
      <div class="avatar">
        <img src="../css-icon.svg" alt="svelte-icon" />
      </div>

      <div class="author-name">
        <div class="author-name-prefix" />
      </div>
    </div>
  </article>
</card>

<style>
  /*CARDS*/
  .card-list {
    display: flex;
    margin-block: 0rem;
    padding-block: 1rem;
    padding-inline-end: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    cursor: default;
  }

  .card-list::-webkit-scrollbar {
    width: 5px;
    height: 0px;
  }

  .card-list::-webkit-scrollbar-thumb {
    background: (--color-text);
    border-radius: 1px;
  }

  .card {
    height: 240px;
    min-width: 250px;
    padding: 1.5rem;
    border-radius: 0px;
    overflow: hidden;
    background-color: var(--color-theme-2);
  }

  .card:not(:first-child) {
    margin-left: 13px;
  }

  .card-header {
    margin-bottom: auto;
  }

  .card-header p {
    font-weight: 500;
    font-size: 13px;
    margin: 0 0 0.5rem;
    color: #0e1011;
    font-family: "Unbounded";
  }

  .card-header h2 {
    font-size: 20px;
    font-family: "Sometype Mono", monospace;
    font-weight: 100;
    margin: 1rem 0.1rem 1rem;
    text-decoration: none;
    color: #0e1011;
    border: 0;
    display: inline-block;
    cursor: pointer;
  }

  .card-author {
    margin: 0 0 0;
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    position: relative;
    font-family: "Sometype Mono", monospace;
    align-self: flex-end;
  }

  .avatar {
    grid-area: auto;
    align-self: start;
    position: relative;
    box-sizing: border-box;
  }

  .avatar img {
    width: 200px;
    height: 200px;
    position: relative;
    margin: 0 0 0 6.6rem;
    position: absolute;
    overflow: hidden;
  }

  .author-name {
    font-style: normal;
    font-weight: 100;
    color: #0e1011;
    margin: 0.5rem;
    grid-area: auto;
    box-sizing: border-box;
  }
</style>
