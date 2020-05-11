<template>
    <div>
        <div class="row">
            <div class="col-4">
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <student-list></student-list>
            </div>
        </div>
    </div>
</template>


<script>
    import StudentList from "./StudentList";
    export default {
        name: 'Student',
        components: {
            StudentList
        }
    }
</script>

<style scoped>

</style>
