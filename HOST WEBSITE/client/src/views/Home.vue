<template>
    <div class="container">
        <div class="center margin1">
            <div class="breadcrumb-nav"
                 ref="breadcrumbNav"
            >
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
// import UserLogin from "@/components/UserLogin.vue";
import RequestFiles from "@/js/reqfiles";

export default {
    name: "Home",
    components: {
        Files,

        // UserLogin,
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
        // console.log(reqFiles);
        // console.log(this.nav);
        // for (const file in reqFiles) {
        //     console.log(file);
        // }
        this.$refs.breadcrumbNav.append(this.breadcrumbNavItem("root"))
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
            const filesAndFoldersRequest = await RequestFiles.getFilesandFolders(this.navigationPath);
            const reqFiles = filesAndFoldersRequest.data.files;
            const reqFolders = filesAndFoldersRequest.data.folders;
            this.files = reqFiles;
            this.folders = reqFolders;
            this.$refs.breadcrumbNav.append(this.breadcrumbNavItem(`/${folderPath}`));
            console.log(reqFiles);
            console.log(reqFolders);
        },
        breadcrumbNavItem(path){
            const span =  Object.assign(
                document.createElement("span"),
                {
                    className: "breadcrumb-item",
                    textContent: path
                }
            )
            const currNavId = this.navId;
            span.setAttribute("data-nav-id", currNavId)
            span.onclick = ()=>this.breadcrumbClick(currNavId)
            console.log(span)
            this.navId++;
            return span
        },
        breadcrumbClick(navid){
            console.log(navid)
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
    word-break:break-all;
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
.breadcrumb-item{
    cursor: pointer;
}
.breadcrumb-item:hover{
    color: blue;
}
</style>