<template>
    <aside>
        <div class="sidebar-body" :style="sidebarStyles">
            <div class="sidebar-header">{{ header }}</div>
            <main class="sidebar-content" ref="sidebarContent">

                <div class="sidebar-content-container"
                     v-for="(obj, index) in menu"
                     :key="`content-${index}`"
                >
                    <!-- SIDEBAR ITEM -->
                    <div class="sidebar-item"
                         v-if="obj.type === 'item'"
                    >
                        {{ obj.text }}
                    </div>
                    <!-- SIDEBAR TITLE -->
                    <div class="sidebar-title"
                         v-else-if="obj.type === 'title'"
                    >
                        {{ obj.text }}
                    </div>

                </div>
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
    created() {
        console.log(this.menu)
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
                this.$refs.sidebarContent.style.display = "block"
                this.header = this.sbheader;
            } else {
                console.log("close");
                this.header = "CS";
                this.openclose = ">";
                this.$refs.sidebarContent.style.display = "none";
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

.sidebar-item, .sidebar-title {
    font-size: 1.2rem;
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

.sidebar-item{
    text-align: left;
    margin: 0 1rem;
    padding: 1rem 0.2rem;
}

.sidebar-title {
    text-transform: uppercase;
    font-weight: bolder;
    padding: 1rem;
    color: #71C7D3;
}

.siderbar-footer {
    margin-top: auto;
    padding: 1rem;
    cursor: pointer;
    border-top: solid 1px #D8D9EC;
    border-bottom: solid 1px #D8D9EC;
}
</style>