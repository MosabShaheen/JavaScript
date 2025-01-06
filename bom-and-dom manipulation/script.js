// Example 1
document.getElementById("changeButton").addEventListener("click",
    function(){
        // let para = document.getElementById("changePara")
        // para.textContent = "This is the changed paragraph"
        document.getElementById("changePara").innerText = "This is the changed Paragraph"
    }
)

// Example 2
document.getElementById("addHighligh").addEventListener("click",
    function(){
        let para = document.getElementById("highlighPara")
        para.classList.add("highligh")
        document.getElementById("addHighligh").innerText = "UnHighlight"
    }

)

// Example 3
document.getElementById("changeStyle").addEventListener("click",
    function (){
        let test = document.getElementById("changeStyle")
        test.textContent = "Brown Tea"
        test.style.backgroundColor = "brown"
    }
)

// Example 4
document.getElementById("addNewItem").addEventListener("click",function(){
    let newitem = document.getElementById("newListItem")
    let item = document.createElement("li")
    newitem.appendChild(item)
    newitem.lastChild.textContent= "Brown Tea"
})

// Example 5
document.getElementById("mainform").addEventListener("submit",function(event){
    event.preventDefault()
    let inputValue = document.getElementById("nameinput")
    let changepara = document.getElementById("addValue")
    changepara.textContent= `Name: ${inputValue.value}`
})