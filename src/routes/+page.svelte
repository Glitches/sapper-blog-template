<script>
  import Header from "$lib/Header.svelte";
</script>

<Header />

<div class="flex flex-col justify-items-center justify-center gap-y-10">
  <div class="flex justify-items-center justify-center">
    <h1 class="flex-grow-0 p-4 text-3xl font-bold underline">Welcome Back!</h1>
  </div>
  <div class="flex justify-items-center justify-center">
    <a class="italic" href="/about"> About myself </a>
  </div>
</div>

<style>
  @reference "tailwindcss/theme";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
