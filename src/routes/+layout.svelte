<script>
	import Header from './Header.svelte';
	import './styles.css';

</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>More on: <a href="https://github.com/jakeviado">GitHub</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	:global(body.dark-mode) a{
        color: var(--color-theme-2);
    } 

	footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: 100;
		font-size: 1.2rem;
		text-decoration: none;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
