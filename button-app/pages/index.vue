<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{$store.state.message}}</p>
    <hr>
    <div class="link" @click="$store.commit('doit')" @click.shift="$store.commit('reset')">
      <button>
        clicked:{{$store.state.counter}}
      </button>

    </div>
    <router-link to="/other">goto</router-link>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Hello',
      now: '..wait'
    };
  },

  methods: {
    doAction: function () {
      this.$store.state.counter++;
    }
  }

};
</script>

<style>
a {
  font-size: 16px;
}

.link {
  background-color: #def;
  padding: 10px;
}

.container {
  padding: 5px 10px
}

h1 {
  font-size: 60px;
  color: aqua;
}

p {
  padding-top: 5px;
  font-size: 30px;
}

pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
}

hr {
  margin: 10px 0px;
}
</style>
