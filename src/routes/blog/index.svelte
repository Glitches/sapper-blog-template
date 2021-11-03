<script context="module">
import  fetch from "node-fetch"
import Api from "@beyonk/sapper-httpclient";

const { PORT } = process.env;
Api.configure({ baseUrl: "https://localhost:" + PORT });
export const preload = async () => {

const api = Api.create()
const json = await api
  .context({ fetch }) // pass node fetch in here.
  .endpoint('blog.json')
  .get()
    return { posts: json };
  };
</script>

<script>
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h1>Blog</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>
