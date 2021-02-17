function RefreshButton(){
    const A_selected_class = "Neop__Header__a_selected"
    const Buttons = document.querySelectorAll(".Neop__Header__a")

    Buttons.forEach(element => {
        element.classList.remove(A_selected_class)
    })
}


function ChangeA_Active(){
    const A_selected_class = "Neop__Header__a_selected"
    const Buttons = document.querySelectorAll(".Neop__Header__a")
    let Selected = ""
    Buttons.forEach((element) =>{
        element.addEventListener("click",function(element){
            element.preventDefault()
            Selected = element.path[0].id
            RefreshButton()
            document.querySelector(`#${Selected}`).classList.add(A_selected_class)
        })
    })
}

function ChangeButton_Active(){
    const A_selected_class = "Neop__Header__a_selected"
    document.querySelectorAll(".NeoP__Main_Page__Section_Button_pattern").forEach(element=>{
        element.addEventListener("click",element => {
            try{ 
                let Selected = ((element.path[0].id.split("$")[1]).toLowerCase())
                RefreshButton()
                document.querySelector(`#a_link_${Selected}`).classList.add(A_selected_class)
            }
            catch{
                // ignore
            }
        })
    })
    
}
function HomeAnimation(){
    let text = "Developer"
    let Original_text = text
    const Change = document.querySelector(".NeoP__Main_Page__Home__Title_02")
    let time = 200
    let total_time = 600 + (200 * text.length)
    text = text.split("")
    Change.innerHTML = ""

    setTimeout(()=>{
        Change.innerHTML = Original_text
    },total_time)

    text.forEach(element => {
        setTimeout(()=>{
            Change.innerHTML = Change.innerHTML.replace('_',"")
            Change.innerHTML += `${element}_`
        },time)
        time += 200
        
    })
}



HomeAnimation()
ChangeButton_Active()
ChangeA_Active()