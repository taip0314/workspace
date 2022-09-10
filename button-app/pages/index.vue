<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{$store.state.message}}</p>
    <hr>
    <p>{{$store.state.subMessage}}</p>
    <div class="link" @click.exact="$store.commit({type:'count', message:'add 1!',add:1})"
      @click.shift="$store.commit({type:'reset', message:'Reset!'})">
      <button>
        clicked: {{$store.state.counter}}
      </button>
    </div>
    <pre>{{now}}</pre>
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
  created: function () {
    setInterval(() => {
      var d = new Date();
      this.now = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    }, 1000);
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
