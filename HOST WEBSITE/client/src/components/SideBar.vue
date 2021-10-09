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
                    <!-- SIDEBAR BUTTON -->
                    <div class="sidebar-button"
                         v-else-if="obj.type==='button'"
                         @click="clickedButton(obj.text)"
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
        },
        clickedButton(name) {
            this.$emit('button-click', name)
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

aside {
    width: fit-content;
}

.sidebar-item, .sidebar-title {
    font-size: 1.2rem;
}

.sidebar-button {
    cursor: pointer;
    padding: 1rem;
    margin: 0.5rem;
    background-color: #71C7D3;
    color: #3F3D56;
    font-weight: bold;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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

.sidebar-item {
    text-align: left;
    margin: 0 1rem;
    padding: 1rem 0.2rem;
    word-wrap: break-word;
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