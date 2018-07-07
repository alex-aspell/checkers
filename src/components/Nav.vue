<template>
  <ul>
    <li v-for="link in links" :key="link.path">
      <router-link :to="link.path">{{link.title}}</router-link> 
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Home', path: '/' },
        { title: 'Alex', path: '/alex' },
      ]
    }
  }
}
</script>

<style scoped>

ul {
  list-style: none;
}

li {
  display: inline;
  margin: 10px 20px;
}

a:link {
  color :deeppink !important;
  font-size: 20px;
  text-decoration: none; 
}

a:active {
  color :rgb(111, 221, 255);
  text-shadow: 2px 4px black;
  font-size: 20px;
  text-decoration: none; 
}


</style>
