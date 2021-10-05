<template>
    <aside>
        <div class="sidebar-body" :style="sidebarStyles">
            <div class="sidebar-header">{{ header }}</div>
            <main class="sidebar-content">
                <div class="sidebar-item"></div>
            </main>
            <div class="siderbar-footer" @click="closeClicked">{{ openclose }}</div>
        </div>
    </aside>
</template>

<script>

export default {
    name: "SideBar",
    props: {
        sbwidth: String,
        sbheader: String,
        menu: Array,
    },
    computed: {
        sidebarStyles() {
            return {
                "width": this.width
            }
        }
    },
    data() {
        return {
            width: this.sbwidth,
            header: this.sbheader,
            clickCounter: 1,
            openclose: "X"
        }
    },
    methods: {
        closeClicked() {
            if (this.clickCounter % 2 === 0) {
                console.log("open");
                this.width = this.sbwidth;
                this.openclose = "X";
                this.header = this.sbheader;
            } else {
                console.log("close");
                this.header = "CS";
                this.openclose = ">";
                this.width = "50px";
            }
            this.clickCounter++;
        }
    }
}
</script>

<style scoped>
:root {
    --bg-color: #3F3D56;
    --font-color: #D8D9EC;
}

* {
    font-size: 1.5rem;
    color: #D8D9EC;
}

.sidebar-body {
    height: 100vh;
    background-color: #3F3D56;
    display: flex;
    flex-direction: column;
}

.sidebar-header {
    display: flex;
    font-weight: bold;
    justify-content: center;
    padding: 1rem;
    border-top: solid 1px #D8D9EC;
    border-bottom: solid 1px #D8D9EC;
}

.siderbar-footer {
    margin-top: auto;
    padding: 1rem;
    cursor: pointer;
    border-top: solid 1px #D8D9EC;
    border-bottom: solid 1px #D8D9EC;
}
</style>