const downloadFolder = async (repoUrl) => {
    const url = new URL(repoUrl)
    const pathname = url.pathname
    const pathParts = pathname.split('/')
    const repo = pathParts[2]
    const folderPath = pathParts.slice(5).join('/')
    const apiUrl = `https://api.github.com/repos/PaulleDemon/${repo}/contents/${folderPath}`

    const fetchFolderContents = async (folderUrl, zipFolder, basePath = '') => {
        const response = await fetch(folderUrl)
        const data = await response.json()

        const files = []
        for (const item of data) {
            if (item.type === 'file') {
                const fileUrl = item.download_url
                const fileResponse = await fetch(fileUrl)
                const fileData = await fileResponse.blob()
                const fileName = `${basePath}${item.name}`
                files.push({ fileName, fileData })
            } else if (item.type === 'dir') {
                await fetchFolderContents(item.url, zipFolder, `${basePath}${item.name}/`)
            }
        }
        
        for (const file of files) {
            zipFolder.file(file.fileName, file.fileData)
        }
    }

    const zip = new JSZip()

    await fetchFolderContents(apiUrl, zip)

    // add package.json to every folder
    const packageFile = await fetch("https://raw.githubusercontent.com/PaulleDemon/landing-pages/main/.package.json")
    const packageFileData = await packageFile.blob()
    zip.file('package.json', packageFileData)
    

    const content = await zip.generateAsync({ type: 'blob' })
    const blobUrl = URL.createObjectURL(content)
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = `${folderPath.split('/').pop()}.zip`
    link.click()
    link.remove()
    URL.revokeObjectURL(blobUrl)
}