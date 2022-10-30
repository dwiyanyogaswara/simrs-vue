<template>
    <div>
        <div class="header">
            <button @click="toggleSidebar" @mouseenter="toggleSidebar">Sidebar</button>
            Header
            {{ activeMenuId }}
        </div>
        <div class="sidebar" v-if="visibleSidebar">
            <!-- <ul id="menu">
                <li v-for="item in menu" :key="item.id" @click="setActiveMenu(item.id)" :class="{activeMenu : activeMenuId == item.id}"> {{ item.text }}</li>
            </ul> -->
            <div id="menu">
                <div id="menulist" v-for="item in menu" :key="item.id" @click="setActiveMenu(item.id)" @mouseenter="showChild=true" :class="{activeMenu : activeMenuId == item.id}"> {{ item.text }}
                    <div v-if="showChild">
                        <div id="childlist" v-for="child in item.child" :key="child.id" @mouseleave="showChild=false" >{{ child.text }}</div>
                    </div>
                </div>
            </div>
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
            showChild: false,
            menu: [{id: 1, text:'aaaa', child: []},{'id': 2, text:'bbbb', child: [{id: 1, text:'xxxx', child: []},{id: 2, text:'zzzz', child: []}]},{'id': 3, text:'cccc', child: []}]
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
    background-color: hsl(113, 100%, 41%);
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
    background-color: #3a9a00;
    height: 100%;
    width: 15%;
    color: #ffffff;
    transition: width 2s;
}
#content{
    position: absolute;
    width: 100%;
    background-color: rgb(131, 131, 131);
    top: 60px;
    height: 100%;
    z-index: -1;
}
ul {
    list-style-type: none;
}
#menulist:hover{
    background-color: rgb(75, 75, 75);
}
#menulist{
    border-bottom: solid 1px;
    border-bottom-color: #636363;
    padding: 2% 5% 2% 5%;
}
#childlist{
    background-color: #3a9a00;
    border-top: solid 1px;
    position: absolute;
    left: 100%;
    margin-top: -15%;
}
#childlist:hover{
    background-color: rgb(75, 75, 75);
}
.activeMenu{
    background-color: rgb(75, 75, 75);
}

</style>