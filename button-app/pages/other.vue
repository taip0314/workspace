<template>
    <section class="container">
        <h1>{{title}}</h1>
        <p>{{message}}</p>
        <hr>
        <router-link to="/">goto</router-link>
    </section>
</template>

<script>
export default {
    data: function () {
        return {
            title: 'Other',
            message: 'これは別のページです。'
        };
    },
}
</script>

<style>
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


hr {
    margin: 10px 0px;
}
</style>