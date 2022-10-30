<template>
    <div>
        <div class="footer">Footer</div>
    </div>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style>
.footer {
    background-color: hsl(113, 100%, 41%);;
    padding: 5px;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;
}
</style>