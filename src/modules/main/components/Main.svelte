<script lang="typescript">
  import axios from "axios";
  import UserCard from "../../users/components/UserCard.svelte";
  import Navigation from "../components/Navigation.svelte";

  import { UsersService } from "../../users/user.service";
  import { page } from "../main.store";

  let users = UsersService.fetchUsers();

  // Store reactivities
  $: if ($page < 1) page.set(1);
  $: if ($page) users = UsersService.fetchUsers($page);
</script>

<Navigation />

{#if users}
  {#await users}
    <p>Loading users</p>
  {:then users}
    {#each users.results as user}
      <UserCard
        name={`${user.name.first} ${user.name.last}`}
        avatar={user.picture.medium}
        email={user.email} />
    {/each}
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{/if}
