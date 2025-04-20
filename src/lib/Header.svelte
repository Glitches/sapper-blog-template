<script>
  export let title = "";

  const links = [
    { href: "/", text: "Home" },
    // { href: "/blog", text: "Blog" },
    { href: "/about", text: "About" },
  ];
</script>

<header class="bg-gray-800 text-white p-4 sticky top-0 z-50">
  <nav class="flex justify-between items-center">
    {#each links as { href, text }}
      <a {href} class="text-xl font-bold">{text}</a>
    {/each}
  </nav>
</header>

<style>
  header {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
</style>
