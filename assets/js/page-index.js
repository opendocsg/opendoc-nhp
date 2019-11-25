(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "README.md",
                title: "How to create a new Opendoc",
                url: "/opendoc-nhp/readme",
                escapedPath: "README.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["OpenDoc NHP",null,["PreSurgeryInstructionGA.md","PreSurgeryInstructionLA.md"]]
            },
            
        {
                name: "index.md",
                title: "Pre-operation Checklist",
                url: "/opendoc-nhp/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["OpenDoc NHP",null,["PreSurgeryInstructionGA.md","PreSurgeryInstructionLA.md"]]
            },
            
        {
                name: "sample.md",
                title: "Sample page",
                url: "/opendoc-nhp/sample.html",
                escapedPath: "sample.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["OpenDoc NHP",null,["PreSurgeryInstructionGA.md","PreSurgeryInstructionLA.md"]]
            },
            
        
        
        {
                name: "PreSurgeryInstructionGA.md",
                title: "Regarding your upcoming surgery",
                url: "/opendoc-nhp/PreSurgeryInstructionGA.html",
                escapedPath: "PreSurgeryInstructionGA.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["OpenDoc NHP",null,["PreSurgeryInstructionGA.md","PreSurgeryInstructionLA.md"]]
            },
            
        {
                name: "PreSurgeryInstructionLA.md",
                title: "Regarding your upcoming surgery",
                url: "/opendoc-nhp/PreSurgeryInstructionLA.html",
                escapedPath: "PreSurgeryInstructionLA.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["OpenDoc NHP",null,["PreSurgeryInstructionGA.md","PreSurgeryInstructionLA.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()