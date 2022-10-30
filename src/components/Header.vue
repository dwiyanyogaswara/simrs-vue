<template>
    <div>
        <div class="header">
            <button @click="toggleSidebar" @mouseenter="toggleSidebar">Sidebar</button>
            Header
            {{ activeMenuId }}
        </div>
        <div class="sidebar" v-if="visibleSidebar">
            <ul id="menu">
                <li v-for="item in menu" :key="item.id" @click="setActiveMenu(item.id)" :class="{activeMenu : activeMenuId == item.id}"> {{ item.text }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    data(){
        return {
            visibleSidebar: true,
            activeMenuId: null,
            menu: [{id: 1, text:'aaaa'},{'id': 2, text:'bbbb'},{'id': 3, text:'cccc'}]
        }
    },
    methods: {
        toggleSidebar(){
            this.visibleSidebar = !this.visibleSidebar
            if(this.visibleSidebar){
                document.getElementById("content").style.marginLeft = '15%'
                document.getElementById("content").style.width = '85%'
            } else {
                document.getElementById("content").style.marginLeft = '0%'
                document.getElementById("content").style.width = '100%'
            }
        },
        setActiveMenu(id){
            this.activeMenuId = id
        }
    }
}
</script>

<style>
.header {
    background-color: #075eff;
    padding: 15px;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
}
.sidebar {
    top: 60px;
    position: fixed;
    background-color: red;
    height: 100%;
    width: 15%;
}
#content{
    position: absolute;
    width: 100%;
    background-color: green;
    top: 60px;
    height: 100%;
}
#menu li:hover{
    background-color: rgb(255, 238, 0);
}
.activeMenu{
    background-color: rgb(0, 199, 23);
}
</style>