<script>
  import Header from '../components/Header.svelte';
  import { getHours } from 'date-fns';

  const hours = getHours(new Date());

  export const isNight = hours <= 8 || hours >= 17;
  export let segment;
</script>

<style>
  .theme-light {
    --main-bg-color: #ffffff;
    --text-color: #36393b;
  }

  .theme-dark {
    --main-bg-color: #2b3542;
    --text-color: #fdfdfd;
  }

  .layout {
    background-color: var(--main-bg-color);
    color: var(--text-color);
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #aaa;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
</style>

<div class={`layout ${isNight ? 'theme-dark' : 'theme-light'}`}>
  <Header {segment} />

  <main>
    <slot />
  </main>

  <footer>
    <span>
      &copy;
      {new Date().getFullYear()}
      Andrea Ceccarelli. Powered by
      <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>. Template
      by
      <a href="https://www.twitter.com/Charca" target="_blank">Maxi Ferreira</a>.
    </span>
  </footer>
</div>
