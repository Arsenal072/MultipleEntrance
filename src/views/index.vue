<!--  -->
<template>
    <div>
        这是{{page}}页面
    </div>
</template>
<script>
export default {
    name: 'index',
    data: function () {
        return {
            page: 'index'
        }
    }
}
</script>
<style lang="scss">
body {
    color: blue;
}
</style>