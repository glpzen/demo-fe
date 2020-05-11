<template>
    <div>
        <div class="row">
            <div class="col-4">
                <router-link to="/register">New Guardians</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <guardian-list></guardian-list>
            </div>
        </div>
    </div>
</template>


<script>
    import GuardianList from "./GuardianList";
    export default {
        name: 'Guardian',
        components: {
            GuardianList
        }
    }
</script>

<style scoped>

</style>
