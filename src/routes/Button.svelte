<script>
    import './styles.css';
    
    function toggle() {
        window.document.body.classList.toggle('dark-mode')
    }
    </script>
    <button on:click={toggle}>
        <slot/>
    </button>
    <style>
        button {
            display: flex;
            font-family: 'Jost';
            padding: 0 1.5rem;
            background-color: #00000000;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
        :global(body.dark-mode) button {
            background-color: #00000000;
            color: var(--color-text-2);
        }
</style>