<script lang="typescript">
  export let avatar: string;
  export let name: string;
  export let email: string;
</script>

<style>
  .container {
    margin-bottom: 2px;
    display: flex;
    width: 500px;
    height: 100px;
    border: 1px solid black;
    justify-items: center;
    align-items: center;
  }

  img.avatar {
    margin-left: 10px;
    width: 75px;
    height: 75px;
    border: 1px solid #cdcdcd;
    border-radius: 10px;
  }

  div.userContainer {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  h1 {
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: purple;
  }

  h2 {
    font-size: 10px;
  }
</style>

<div class="container">
  <img class="avatar" src={avatar} alt="User image" />
  <div class="userContainer">
    <h1>{name}</h1>
    <h2>{email}</h2>
  </div>
</div>
