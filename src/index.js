// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")

const urlParams = new URLSearchParams(window.location.search)

const toastAlert = document.querySelector("#toast-alert")
let toastAlertTimeout = null

let dbCache = []

/**
 * Fetches the json db
 * @returns JS object
 */
async function fetchDB(){

    try{
        const response = await fetch(`./db/data.json`)

        return await response.json()
    }catch(e){
        showAlert("Failed to fetch DB, please reload or try again later")
        return 
    }
}

fetchDB().then((data) => {
    dbCache = data
    loadTemplates(data)

    const searchParam = urlParams.get('search')

    if (searchParam?.length > 0){
        const search = document.querySelector("#search-input")
        search.value = searchParam
        onSearch()
    }

})


function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // collapseHeaderItems.classList.remove("max-md:tw-opacity-0")
        collapseHeaderItems.classList.add("opacity-100",)
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)

    } else {
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)

    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)


const collapsibleBtns = document.querySelectorAll('.collapsible')

collapsibleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        this.classList.toggle('active')

        // Toggle 'rotate' class to rotate the arrow
        this.classList.toggle('tw-rotate-[0deg]')
        let content = this.nextElementSibling

        if (content.style.height === 'fit-content') {
            content.style.height = '0px'
        } else {
            content.style.height = 'fit-content'
        }
    })
})


function showAlert(message="", timeout=3000){
    toastAlert.classList.remove("tw-hidden")

    toastAlert.querySelector("#alert-message").textContent = message

    clearTimeout(toastAlertTimeout)

    toastAlertTimeout = setTimeout(hideAlert, timeout)
}

function hideAlert(){
    toastAlert.classList.add("tw-hidden")
    clearTimeout(toastAlertTimeout)
}


function getObjectsByTagNameOrName(searchValue) {
    searchValue = searchValue.toLowerCase()
    return dbCache.filter(item => {
        const tagMatch = item.tags.some(tag => tag.toLowerCase().startsWith(searchValue))
        const nameMatch = item.name.toLowerCase().startsWith(searchValue)
        return tagMatch || nameMatch
    })
}


const modal = document.querySelector("#preview-modal")

function hidePreviewModal(){

    modal.classList.remove("tw-scale-[1]")
    modal.classList.add("tw-scale-0")

}

/**
 * Gets value from DB by primary key
 */
function getObjectByKey(searchValue, primaryKey) {
    return dbCache.find(item => item[primaryKey] === searchValue)
}

function showPreviewModal(githubUrl){

    const data = getObjectByKey(githubUrl, "githubUrl")

    modal.querySelector("#preview-img").setAttribute("src", data.previewImg)
    modal.querySelector("#template-name").textContent = data.name
    modal.querySelector("#modal-source-code").setAttribute("href", data.githubUrl)
    modal.querySelector("#preview-url").setAttribute("href", data.previewUrl)
    modal.querySelector("#download-folder").onclick = () => {
        showAlert("creating a zip please wait few seconds...", 5000)
        
        try {
            downloadFolder(data.githubUrl)
            
        } catch (error) {
            showAlert("download failed, check dev console for more.")
        }
    
    }

    modal.classList.remove("tw-scale-0", "tw-hidden")
    modal.classList.add("tw-scale-[1]")

}


const templateDataContainer = document.querySelector("#template-data-container")
/**
 * Adds templates to the page
 */
function loadTemplates(data){

    templateDataContainer.innerHTML = ""

    data.forEach((x) => {
        let template = `
                <div class="template-card" onclick="showPreviewModal('${x.githubUrl}')">

                    <div  class="template-preview">
                        <img src="${x.previewImg}" 
                            alt="" class="tw-w-full tw-h-full tw-object-contain" 
                            >
                    </div>
                    <div class="template-footer tw-w-full" >

                        <div class="tw-flex tw-w-full">
                            <h2 class="tw-text-xl tw-font-medium">${x.name}</h2>
                            <p class="tw-text-sm tw-ml-auto tw-p-1 tw-px-2 tw-border-primary 
                                        tw-text-primary
                                        tw-rounded-full tw-border-[1px]">
                                ${x.category}
                            </p>
                        </div>
                        <div class="tw-flex tw-mt-5 tw-justify-between">
                            <a href="${x.githubUrl}" target="_blank" rel="noopener noreferrer" class="tw-text-2xl">
                                <i class="bi bi-github"></i>
                            </a>
                            <a href="${x.previewUrl}" target="_blank" rel="noopener noreferrer" 
                                                class="tw-rounded-full tw-flex tw-border-black tw-border-[1px] 
                                                        tw-w-[30px] tw-h-[30px] tw-place-content-center
                                                        tw-text-lg 
                                                        ">
                                <i class="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            ` 

        templateDataContainer.innerHTML += template

    })

}



function onSearch(){

    const search = document.querySelector("#search-input").value
    const searchNotFound = document.querySelector("#search-404")
    searchNotFound.classList.add("tw-hidden")

    if (search.trim().length > 0){
        let searchResults = getObjectsByTagNameOrName(search)
        loadTemplates(searchResults)
        
        if (searchResults.length === 0){
            searchNotFound.classList.remove("tw-hidden")
        }

    }else{
        loadTemplates(dbCache)
    }
}

function updateSearchTerm(searchTerm){
    const search = document.querySelector("#search-input")
    search.value = searchTerm

    const url = new URL(location.href)
    url.searchParams.set("search", searchTerm)
    history.pushState(null, '', url)
    onSearch()
}

const templateModalContainer = document.querySelector("#template-modal-container")
const templateRequestModal = document.querySelector("#template-request-modal")

function checkClickInsideModal(event){
    if (!templateRequestModal.contains(event.target)){
        event.preventDefault()
        closeTemplateRequestModal()
    }
}

function openTemplateRequestModal(){

    // templateModalContainer.classList.remove("tw-hidden")
    templateModalContainer.classList.remove("tw-scale-0")
    templateModalContainer.classList.add("tw-scale-1")

    setTimeout(() => 
        window.addEventListener("click", checkClickInsideModal),
        100
    )

    document.body.classList.add("modal-open")

}

function closeTemplateRequestModal(){

    templateModalContainer.classList.add("tw-scale-0")
    templateModalContainer.classList.remove("tw-scale-1")

    window.removeEventListener("click", checkClickInsideModal)

    document.body.classList.remove("modal-open")

}