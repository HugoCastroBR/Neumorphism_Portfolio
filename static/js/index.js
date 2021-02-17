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

ChangeButton_Active()
ChangeA_Active()