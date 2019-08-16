<script>
  import { page, prevPage, nextPage, initialPage } from "../main.store";
</script>

<div>
  <p>Page {$page}</p>
  <ul>
    <li on:click={prevPage}>Previous</li>
    <li on:click={initialPage}>Reset</li>
    <li on:click={nextPage}>Next</li>
  </ul>
</div>
