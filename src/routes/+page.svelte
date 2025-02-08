<script>
  import github from "$lib/assets/github.svg";
</script>

<div class="flex flex-col justify-items-center justify-center">
  <div class="flex justify-items-center justify-center">
    <h1 class="flex-grow-0 p-4 text-3xl font-bold underline">Welcome Back!</h1>
  </div>
  <div class="flex justify-items-center justify-center">
    <a class="h-24" href="https://github.com/Glitches" target="_blank">
      <img alt="GitHub profile" src={github} />
    </a>
  </div>
</div>

<style>
  @reference "tailwindcss/theme";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
