<script>
  import Social from "../components/Social.svelte";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <h1>Andrea Ceccarelli</h1>
  <figure>
    <img src="rsz_florian-klauer-489-unsplash.jpg" alt="vintage typewriter." />
    <figcaption>
      Photo by
      <a href="https://unsplash.com/@florianklauer" target="_blank"
        >Florian Klauer</a
      >
      on Unsplash
    </figcaption>
  </figure>
  <p>Benvenuto!</p>
  <p>
    Mi chiamo Andrea Ceccarelli e sono uno sviluppatore Front-end e talvolta
    Back-end, vivo e lavoro a Milano
  </p>
  <p>
    Fino a pochi anni fa la mia vita era completamente diversa ma intorno al
    2017 ho deciso di cambiare direzione e diventare sviluppatore. Questo mi ha
    portato a realizzare un progetto di vita e realizzare un sogno.
  </p>
  <p>
    Questo sito è basato sul template
    <a href="https://github.com/Charca/sapper-blog-template">
      Charca/sapper-blog-template
    </a>
    che uso per studiare Svelte e Sapper
  </p>
  <Social />
</div>

<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }
  figure img {
    border-radius: 8px;
  }
  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
    }
  }
</style>
