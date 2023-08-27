<script>
	import Frames from './Frames.svelte';
	import Cards from './Cards.svelte'
	import { onMount } from 'svelte';
	import { typewriter } from './transition.js';
	import { messages } from './loading-messages.js';

	let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Website Portfolio" />
</svelte:head>


<section  class="section-contents">
	<h2 class="big-header">Welcome</h2>
	<p  class="paragraph-contents">for future purposes siguro or mema na lang  
	</p>
	
	<article class="card-section1">
	  <header class="card-header">
		<div class="svg-element-header"></div>
	  </header>
	</article>
	
	<span>
		{#key i}
		    <p in:typewriter={{ speed: 10 }}>
				{messages[i] || ''}
		    </p>
		{/key}
	</span>

</section>


 	<section class="section-contents section-2" >
		<h2 class="big-header">i heckin' love programming</h2>
		<p class="paragraph-contents">i really hecking love programming and designing and i want work and money hehe</p>
		
  	</section>
  

<card class="featured-card-list">
<article class="featured-card" id="bigcard">
	  <header class="card-header">
		<p>future</p> 
		<h2>currently exploring some frameworks, tools and learning web hosting para muka na akong cool na nerd  </h2>
	  </header>

	  <div class="logos">
		  <div class="logos-slide">
				<img src="../github.svg" alt="Svelte logo" />

				<img src="../nextjs-icon.svg" alt="Svelte logo" />
  
				<img  src="../tailwind.svg" alt="Svelte logo" />
  
				<img  src="../reactjs-icon.svg" alt="Svelte logo" />
		  
				<img  src="../nodejs-icon.svg" alt="Svelte logo" />
  
				<img  src="../svelte-mono.svg" alt="Svelte logo" />

				<img  src="../firebase-icon.svg" alt="Svelte logo" />
		   </div>
		 <div class="logos-slide">
				<img src="../github.svg" alt="Svelte logo" />

				<img src="../nextjs-icon.svg" alt="Svelte logo" />

				<img  src="../tailwind.svg" alt="Svelte logo" />

				<img  src="../reactjs-icon.svg" alt="Svelte logo" />
	  
				<img  src="../nodejs-icon.svg" alt="Svelte logo" />

				<img  src="../svelte-mono.svg" alt="Svelte logo" />

				<img  src="../firebase-icon.svg" alt="Svelte logo" />
			
		 </div>
		   <div class="logos-slide">
				<img src="../github.svg" alt="Svelte logo" />

				<img src="../nextjs-icon.svg" alt="Svelte logo" />

				<img  src="../tailwind.svg" alt="Svelte logo" />

				<img  src="../reactjs-icon.svg" alt="Svelte logo" />
	  
				<img  src="../nodejs-icon.svg" alt="Svelte logo" />

				<img  src="../svelte-mono.svg" alt="Svelte logo" />

				<img  src="../firebase-icon.svg" alt="Svelte logo" />
		
			</div>
		 </div>

		
	</article>
</card>

<section class="section-contents">
	<h2 class="big-header">EXP</h2>
	<p class="paragraph-contents">working in this website, trying to apply art in web development maybe</p>

	<Cards />
</section>

	<Frames />
	
<section class="section-contents">
	<h2 class="big-header">END
	</h2>

	<p class="paragraph-contents">yes</p>
	
</section>


<style>

    :global(body) {
		background-color: var(--color-bg-1);
    	color: var(--color-text);
		background-size: 100vw 100vh;
		background-image: radial-gradient(
		50% 50% at 50% 50%,
		rgba(27, 104, 197, 0.121) 0%,
		rgba(68, 16, 239, 0.07) 100%
	),
		linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
	}


	section{
		justify-content: space-between;
    	margin-block: 10vh;
    	padding-block: 10vh;
    	display: block;
	}
	span{
		position: absolute;
	}
</style>
