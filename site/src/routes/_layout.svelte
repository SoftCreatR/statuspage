<script>
  import Nav from "../components/Nav.svelte";
  import config from "../data/config.json";
  import snarkdown from "snarkdown";
  export let segment;
</script>

<style>
  footer {
    text-align: center;
    opacity: 0.75;
    margin-top: 3rem;
  }
</style>

<Nav {segment} />

<main class="container">
  <slot />
</main>

<footer>
  <p><!-- --></p>
</footer>
