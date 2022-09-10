<template>
    <section class="container">
        <h1>{{title}}</h1>
        <p v-html="message"></p>
        <hr>
        <div class="right">
            <router-link to="/">goto Top</router-link>
        </div>
    </section>
</template>

<script>
export default {
    validate({ params }) {
        if (params.id == undefined || params.pass == undefined) {
            return false;
        } else {
            return true;
        }
    },
    data: function () {
        return {
            title: 'Login',
        };
    },
    computed: {
        message: function () {
            let id = this.$route.params.id != undefined ? this.$route.params.id : '*** no id ***';
            let pass = this.$route.params.pass != undefined ? this.$route.params.pass : '*** no pass ***';
            return 'ID:' + id + '<br>PASS: ' + pass;
        }
    }
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

.right {
    text-align: right;
}

hr {
    margin: 10px 0px;
}
</style>
    