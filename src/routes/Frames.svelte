<script>
    
</script>

<main>

    <card class="frame-list">
        <article class="frame-card" background>
            <header class="frame-header">
              
              <h2>hell yeah</h2>
              <p>lul</p>
              
            </header>
          </article>
    </card>

</main>

<style>
    .frame-list {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    cursor: default;
    }

    card {
    position: relative;
    align-items: end;
    height: 260px;
    min-width: 280px;
    padding: 1.5rem;
    border-radius: 0px;
    background-color: var(--color-bg-1);
    background-position: center;
    background-image: url('../some-shit.png');
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: inset;
    }

    .frame-header p {
    position: absolute;
    background-color: rgb(0, 0, 0);
    height: max-content;
    width: max-content;
    padding: 5px;
    font-weight: 500;
    font-size: 10px;
    margin: 1px;
    color: var(--color-bg-1);
    font-family: 'Unbounded';
    }

    .frame-header h2 {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Unbounded';
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
    }

</style>