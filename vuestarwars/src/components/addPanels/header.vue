<template>
  <header id="header">
    <nav>
      <ul class="nav nav-tabs nav-justified">
        <li>
          <router-link to="/">StarWars</router-link>
        </li>
        <li>
          <router-link to="/Admin">Admin</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
  $yellow: #ffe300;
  $darkBlue: #1c1e22;
  #header{
    background-color:$darkBlue;
    color:$yellow;
    font-size: 20px;
    .nav{
      :hover, :active{
        color:$darkBlue;
        font-weight: bold;
      }
      a{
        color: $yellow;
        :hover, :active{
          color:$darkBlue;
        }
      }
    }

  }
</style>
