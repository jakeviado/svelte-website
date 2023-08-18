<script>
	
</script>

<card class="card-list">

	<article class="card" id="csharp-card">
	  <header class="card-header">
		
		<p >Game Development</p>
		<h2 >cool</h2>
		
	  </header>

	  <div class="card-author">
		<div class="avatar">
			<img src="../csharp.svg" alt="svelte-icon">
		</div>

		<div class="author-name">
		  <div class="author-name-prefix">C#</div>
		</div>
	  </div>
	</article>
	

	
	<article class="card" id="js-card">
	  <header class="card-header">
		
		<p>Web Development</p>
		<h2 >wala akong masabi</h2>

	  </header>

	  <div class="card-author">
		<div class="avatar">
			<img src="../javascript-icon.svg" alt="svelte-icon">
		</div>

		<div class="author-name">
		  <div  class="author-name-prefix">JavaScript</div>
		</div>
	  </div>
	</article>
	
	

	<article class="card" id="html-card">
	  <header class="card-header">
		<p>Web Development</p>
		<h2>niced</h2>
	  </header>

		  <div class="card-author">
			<div class="avatar">
				<img src="../html-icon.svg" alt="svelte-icon">
			</div>

			<div class="author-name">
			  <div class="author-name-prefix">HTML</div>
			</div>
		  </div>
	</article>

	<article class="card">
	  <header class="card-header">
		<p>Web Development</p>
		<h2>pain and suffering</h2>
	  </header>
	  
	  <div class="card-author">
		<div class="avatar">
			<img src="../css-icon.svg" alt="svelte-icon">
		</div>

		<div class="author-name">
		  <div class="author-name-prefix">CSS</div>
		</div>
	  
	</article>

	<article class="card">
	  <header class="card-header">
		<p>Web Development</p>
		<h2>svelte is fun</h2>
	  </header>
	  
	  <div class="card-author">
		<div class="avatar">
			<img src="../svelte-icon.svg" alt="svelte-icon">
		</div>

		<div class="author-name">
		  <div class="author-name-prefix">Svelte Kit</div>
		</div>

	</article>

</card>

<style>
    /*CARDS*/
.card-list {
    display: flex;
    margin-block: 2rem;
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
    height: 230px;
    min-width: 280px;
    padding: 1.5rem;
    border-radius: 8px;
    background-color: var(--color-bg-1);
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
    margin: 0 0 .5rem;
    color: #0e1011;
    font-family: 'Unbounded';
    }

.card-header h2 {
    font-size: 20px;
    font-family: 'Aoboshi One', serif;
    font-weight: 100;
    margin: .30rem .10rem 1rem;
    text-decoration: none;
    color: #0e1011;
    border: 0;
    display: inline-block;
    cursor: pointer;
}

.card-author {
    margin: 4rem 0 0;
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    position: relative;
    font-family: 'Aoboshi One', serif;
    align-self: flex-end;
}

.avatar {
    grid-area: auto;
    align-self: start;
    position: relative;
    box-sizing: border-box;
}

.avatar img {
    width: 50px;
    height: 50px;
    display: block;
    overflow: hidden;
    margin: 16px 0;
}

.author-name {
    font-style: normal;
    font-weight: 100;
    color: #0e1011;
    margin: .5rem;
    grid-area: auto;
    box-sizing: border-box;
}
</style>