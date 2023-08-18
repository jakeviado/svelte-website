<script>

</script>

<main>

    <card class="frame-list">
        <article class="frame-card" background>
            <header class="frame-header">
              
              <p>Test</p>
              <h2>TEST</h2>
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
    height: 260px;
    min-width: 280px;
    padding: 1.5rem;
    border-radius: 0px;
    background-color: var(--color-bg-1);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid;
    box-shadow: 5px 10px;
    }
    
    .frame-header {
    margin-bottom: auto;
    }

    .frame-header p {
    font-weight: 500;
    font-size: 13px;
    margin: 0 0 .5rem;
    color: #0e1011;
    font-family: 'Unbounded';
    }

    .frame-header h2 {
    font-size: 20px;
    font-family: 'Aoboshi One', serif;
    font-weight: 100;
    text-decoration: none;
    color: #0e1011;
    border: 0;
    display: inline-block;
    cursor: pointer;
    }

</style>