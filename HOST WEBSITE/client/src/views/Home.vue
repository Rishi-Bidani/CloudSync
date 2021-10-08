<template>
    <div class="container">
        <div class="center margin1">
            <div class="breadcrumb-nav"
                 ref="breadcrumbNav"
            >
                <span class="breadcrumb-item"
                      :key="`root-0`"
                      @click="navClicked(0)"
                >
                    root>&nbsp;
                </span>
                <span class="breadcrumb-item"
                      v-for="(item, index) in navigationPath.split(`/`).slice(1)"
                      :key="`item-${index}`"
                      @click="navClicked(index+1)"
                >
                    {{ item }}>&nbsp;
                </span>
            </div>
        </div>
        <Files
            :key="`DisplayFiles-${filesKey}`"
            :files="files"
            :folders="folders"
            v-on:folderClicked="receiveFolderClick"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Files from "@/components/Files.vue";
import RequestFiles from "@/js/reqfiles";

export default {
    name: "Home",
    components: {
        Files
    },
    data() {
        return {
            files: [],
            folders: [],
            navigationPath: ".",
            filesKey: 0,
            testNum: 0,
            navId: 0
        };
    },
    async created() {
        const filesAndFoldersRequest = await RequestFiles.getFilesandFolders(this.navigationPath);
        const reqFiles = filesAndFoldersRequest.data.files;
        const reqFolders = filesAndFoldersRequest.data.folders;
        try {
            this.files = reqFiles;
            this.folders = reqFolders;
            console.log(this.files, this.folders);
        } catch (error) {
            console.log(error);
        }

    },
    methods: {
        async receiveFolderClick(folderPath) {
            this.navigationPath += `/${folderPath}`;
            await this.displayFolders()
        },

        async displayFolders() {
            const filesAndFoldersRequest = await RequestFiles.getFilesandFolders(this.navigationPath);
            const reqFiles = filesAndFoldersRequest.data.files;
            const reqFolders = filesAndFoldersRequest.data.folders;
            this.files = reqFiles;
            this.folders = reqFolders;
        },
        async navClicked(navid) {
            console.log(navid)
            this.navigationPath = this.navigationPath.split("/").slice(0, navid+1).join("/")
            await this.displayFolders()
        }
    },
};
</script>
<style scoped>
.container {
    width: 100%;
}

.center {
    display: flex;
    justify-content: center;
}

.margin1 {
    margin: 1rem;
}

.breadcrumb-nav {
    width: 70vw;
    min-height: 3rem;
    height: fit-content;
    background-color: white;
    word-break: break-all;
    text-align: left;
    border-radius: 0.5rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.2rem;
}

.breadcrumb-nav::-webkit-scrollbar-track {
    width: 10px;
    color: blue;
}
</style>
<!--Unscoped-->
<style>
.breadcrumb-item {
    cursor: pointer;
}

.breadcrumb-item:hover {
    color: blue;
}
</style>