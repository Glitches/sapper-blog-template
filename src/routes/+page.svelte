<script lang="ts">
  import Menu from "$lib/Menu.svelte";
  import Markdown from "svelte-exmarkdown";

  // Import all markdown files
  const modules = import.meta.glob("../lib/assets/blog/*.md", { query: "raw" });

  /**
   * @type { {slug: string; content: {default: string}; date: Date;}[] }
   */
  let posts: { slug: string; content: string; date: Date }[] = [];

  // Load and process markdown files
  Promise.all(
    Object.entries(modules).map(async ([path, module]) => {
      const content: { default: string } = (await module()) as {
        default: string;
      };

      const fileName = (path.split("/").pop() ?? "post").replace(".md", "");
      return {
        slug: fileName,
        content: content.default,
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
    <h1 class="flex-grow-0 p-4 text-3xl heading-h1">Adventures in coding land</h1>
  </div>

  <div class="max-w-3xl mx-auto w-full">
    {#if posts.length === 0}
      <p class="text-gray-600">Loading posts...</p>
    {:else}
      {#each posts as post}
        <article class="mb-8 p-6 bg-white rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2 heading-h1">
            {post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/-/g, " ")}
          </h3>
          <div class="text-sm text-gray-500 mb-4">
            {post.date.toLocaleDateString()}
          </div>
          <div class="prose">
            <Markdown md={post.content}>
              {#snippet h1(props)}
                {@const { children, style, class: className, ...rest } = props}
                <h1
                  style="{style}"
                  class="{className} heading-h1"
                  {...rest}
                >
                  {@render children?.()}
                </h1>
              {/snippet}
              {#snippet h2(props)}
              {@const { children, style, class: className, ...rest } = props}
              <h2
                style="{style}"
                class="{className} heading-h2"
                {...rest}
              >
                {@render children?.()}
              </h2>
            {/snippet}
            </Markdown>
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
  
  .heading-h1 {
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #999;
    font-family: 'Planet N', sans-serif;
    font-size: xx-large;
  }
  .heading-h2 {
    margin: 0;
    padding: 0;
    font-family: 'Planet N', sans-serif;
    font-size: x-large;
	}
</style>
