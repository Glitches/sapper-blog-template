<script>
  import Menu from "$lib/Menu.svelte";
  import { Markdown } from "svelte-exmarkdown";

  // Import all markdown files
  const modules = import.meta.glob("../lib/assets/blog/*.md", { query: "raw" });

  /**
  * @type { {slug: string; content: string; date: Date;}[] }
  */
  let posts = [];

  // Load and process markdown files
  Promise.all(
    Object.entries(modules).map(async ([path, module]) => {
      const content = await module();
      const fileName = (path.split("/").pop() ?? 'post').replace(".md", "");
      return {
        slug: fileName,
        content,
        date: new Date(fileName.split("-").slice(0, 3).join("-")),
      };
    }),
  ).then((results) => {
    posts = results.sort((a, b) => b.date.getTime() - a.date.getTime());
  });
</script>

<Menu />

<div class="flex flex-col justify-items-center justify-center gap-y-10 p-4">
  <div class="flex justify-items-center justify-center">
    <h1 class="flex-grow-0 p-4 text-3xl font-bold underline">Welcome Back!</h1>
  </div>

  <div class="max-w-3xl mx-auto w-full">
    {#if posts.length === 0}
      <p class="text-gray-600">Loading posts...</p>
    {:else}
      {#each posts as post}
        <article class="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">
            {post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/-/g, " ")}
          </h3>
          <div class="text-sm text-gray-500 mb-4">
            {post.date.toLocaleDateString()}
          </div>
          <div class="prose">
            <Markdown md={post.content} />
          </div>
        </article>
      {/each}
    {/if}
  </div>
</div>

<style>
  @reference "tailwindcss/theme";
  :global(html) {
    background-color: theme(--color-gray-100);
  }

  :global(.prose) {
    max-width: none;
  }
</style>
