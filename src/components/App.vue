<template>
    <v-app>
        <header>
            <navbar></navbar>
        </header>
        <!-- Begin page content -->
        <main role="main" class="container mt-10">
            <router-view></router-view>
        </main>

        <footer class="footer">
            <div class="container">
            </div>
        </footer>
    </v-app>
</template>

<script>
    import Navbar from "./Navbar";

    export default {
        name: 'App',
        components: {
            Navbar
        },

        data: function () {
            return {
                count: 0
            }
        },
    };
</script>
