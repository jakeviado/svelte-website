<script>
  import "./styles.css";
  import { page } from "$app/stores";
  import Button from "./Button.svelte";
</script>

<header>
  <Button>
    <p>PARANOIA</p>
  </Button>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="/">Home</a>
      </li>
      <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    margin-inline: 1vh;
    justify-content: space-between;
    height: 4rem;
  }

  :global(body.dark-mode) {
    background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgb(21, 23, 25) -0%,
        rgb(31, 33, 39) 100%
      ),
      linear-gradient(
        -45deg,
        var(--color-bg-0) 0%,
        var(--color-bg-1) 15%,
        var(--color-bg-2) 50%
      );
    color: var(--color-text-2);
  }

  :global(body.dark-mode) a {
    color: var(--color-text-2);
  }

  nav {
    display: flex;
    justify-content: center;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
    font-family: "Unbounded";
  }

  li {
    position: relative;
    height: 100%;
  }

  li[aria-current="page"]::before {
    --size: 10px;
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    border-top: solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1.5rem;
    font-weight: 100;
    font-size: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
    color: var(--color-text);
  }

  a:hover {
    color: var(--color-theme-1);
  }

  p {
    font-size: 1rem;
  }
</style>
