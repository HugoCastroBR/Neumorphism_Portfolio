function ChangePageTitle(new_title){

    document.title = `${new_title} | HugoCastro`
}


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
            ChangePageTitle(document.querySelector(`#${Selected}`).innerHTML)

        })
    })
}

function ChangeButton_Active(){
    const A_selected_class = "Neop__Header__a_selected"
    document.querySelectorAll(".NeoP__Main_Page__Section_Button_pattern").forEach(element=>{
        element.addEventListener("click",element => {
            try{ 
                let Selected = ((element.path[0].id.split("-")[1]).toLowerCase())
                RefreshButton()
                document.querySelector(`#a_link_${Selected}`).classList.add(A_selected_class)
                ChangePageTitle(document.querySelector(`#a_link_${Selected}`).innerHTML)
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
    
    let time = 350
    let time_add = time
    let total_time = 600 + (time* text.length)
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
        time += time_add
        
    })
}


function ChangeInner(target,string){
    target.innerHTML = string
}

function languageSet(){
    let userLang = navigator.language || navigator.userLanguage
    // const buttons_text_header = {
    //     'home':document.querySelector("#a_link_home"),
    //     'works':document.querySelector("#a_link_works"),
    //     'about':document.querySelector("#a_link_about"),
    //     'contact':document.querySelector("#a_link_contact")
    // }
    // const buttons_text_section = {
    //     'home':document.querySelector("#Linked_at_-Home"),
    //     'works':document.querySelector("#Linked_at_-Works"),
    //     'about':document.querySelector("#Linked_at_-About"),
    //     'contact':document.querySelector("#Linked_at_-Contact")
    // }
    // const text = document.querySelector("")

    // if(userLang.toLowerCase() == 'pt-br' || userLang.toLowerCase() == 'pt-pt'){
    //     const button_translate = [buttons_text_header,buttons_text_section]
    //     button_translate.forEach(element=>{
    //         ChangeInner(element['home'],"Inicio")
    //         ChangeInner(element['works'],"Trabalhos")
    //         ChangeInner(element['about'],"Sobre")
    //         ChangeInner(element['contact'],"Contato")
    //     })
    // }


    if(userLang.toLowerCase() == 'pt-br' || userLang.toLowerCase() == 'pt-pt'){

    }else{
        const html_en = `
        
        <header class="NeoP__Header_container">
        <div class="NeoP__Header_item01">
            <a onclick="window.location.href='#home'" class="TextBasic Neop__Header__a Neop__Header__a_selected" id="a_link_home"> Home</a>
        </div>
        <div class="NeoP__Header_item02">
            <a onclick="window.location.href='#works'" class="TextBasic Neop__Header__a" id="a_link_works">Works</a>
            <a onclick="window.location.href='#about'"class="TextBasic Neop__Header__a" id="a_link_about">About</a>
            <a onclick="window.location.href='#contact'" class="TextBasic Neop__Header__a" id="a_link_contact">Contact</a>
        </div>
        
    </header>
    <main class="Main_Page">
        <section class="NeoP__Main_Page__Home_container" id="home">
            <div class="NeoP__Main_Page__Section_body">
                <span class="NeoP__Main_Page__Home__MyName TextBasic">Hugo Castro</span>
                <div class="NeoP__Main_Page__Home__Title_container">
                    <span class="NeoP__Main_Page__Home__Title_01 TextBasic">Web</span>
                    <span class="NeoP__Main_Page__Home__Title_02 TextBasic">Developer</span>
                </div>
            </div>
            <div class="NeoP__Main_Page__Section_footer">
                <button onclick="window.location.href='#works'" class="TextBasic NeoP__Main_Page__Section_Button_pattern" id="Linked_at_-Works" >Works</button>
            </div>
        </section>

        <section class="NeoP__Main_Page__Works_container NeoP__Main_Page__Section_pattern" id="works">
            <div class="NeoP__Main_Page__Section_body">
                <div class="NeoP__Main_Page__Works__card__container">

                    <div class="NeoP__Main_Page__Works__card">
                        <div class="NeoP__Main_Page__Works__card__image_container">
                            <img  class="NeoP__Main_Page__Works__card__image" src="../../static/img/Works/UfoNight.png">
                        </div>
                        <div class="NeoP__Main_Page__Works__card_Desc_container">
                            <h2 class="NeoP__Main_Page__Works__card_Desc__title TextBasic">Ufonight</h2>
                            <span class="NeoP__Main_Page__Works__card_Desc__span TextBasic">Criação de Site, ainda em progresso, site com foco em divulgação ufologica e relacionados. Usando diversas tecnologias tais como: JavaScript, Html5, Css3, Sass, Python, Flask, PostgreSQL.</span>
                        </div>
                        <div class="NeoP__Main_Page__Works__card_Button_container">
                            <button class="TextBasic NeoP__Main_Page__Section_Button_pattern">Acess</button>
                        </div>
                    </div>

                    <div class="NeoP__Main_Page__Works__card">
                        <div class="NeoP__Main_Page__Works__card__image_container">
                            <img  class="NeoP__Main_Page__Works__card__image" src="../../static/img/Works/Badge-generator.png">
                        </div>
                        <div class="NeoP__Main_Page__Works__card_Desc_container">
                            <h2 class="NeoP__Main_Page__Works__card_Desc__title TextBasic">Badge Generator</h2>
                            <span class="NeoP__Main_Page__Works__card_Desc__span TextBasic">Badge Generator é meu primeiro projeto publicado no pip, utilizando apenas python, ele cria Badges pela plataforma shilds.io, podendo ser utilizado de diversas formas, seja em integração a scripts complexos ou direto no terminal. </span>
                        </div>
                        <div class="NeoP__Main_Page__Works__card_Button_container">
                            <button class="TextBasic NeoP__Main_Page__Section_Button_pattern">Acess</button>
                        </div>
                    </div>

                    

                    

                </div>
            </div>
            <div class="NeoP__Main_Page__Section_footer">
                <button onclick="window.location.href='#about'" class="TextBasic NeoP__Main_Page__Section_Button_pattern" id="Linked_at_-About">About</button>
            </div>
        </section>
        <section class="NeoP__Main_Page__Home_container" id="about">
            <div class="NeoP__Main_Page__Section_body">
                <div class="NeoP__Main_Page__about__container">

                    <div class="NeoP__Main_Page__about__Image_container">
                        <img class="NeoP__Main_Page__about__Image_img" src="../../static/img/Me.jpg" alt="">
                        <span class="NeoP__Main_Page__about__Image_span TextBasic" >Hugo Castro</span>
                        <span class="NeoP__Main_Page__about__Image_span TextBasic" >21/03/2003</span>
                    </div>
                    <div class="NeoP__Main_Page__about__desc_container">
                        <span class="NeoP__Main_Page__about__desc_span_desc TextBasic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis delectus repellendus earum consectetur placeat quis. Optio odit laudantium voluptatum alias praesentium earum, eaque commodi ipsam corrupti veritatis aut quis.
                        </span>
                    </div>
                    
                </div>
            </div>
            <div class="NeoP__Main_Page__Section_footer">
                <button onclick="window.location.href='#contact'" class="TextBasic NeoP__Main_Page__Section_Button_pattern" id="Linked_at_-Contact">Contact</button>
            </div>
        </section>
        <section class="NeoP__Main_Page__Home_container" id="contact">
            <div class="NeoP__Main_Page__Section_body">
                    <div class="NeoP__Main_Page__contact__container"> 
                        <span class="TextBasic">You can find-me on: </span>

                        <div class="NeoP__Main_Page__contact__types_container">

                            <!-- <img src="../../static/img/linkedin.svg" class="NeoP__Main_Page__contact__types_image" alt="">
                            <img src="../../static/img/github-sign.svg" class="NeoP__Main_Page__contact__types_image" alt="">
                            <img src="../../static/img/whatsapp.svg" class="NeoP__Main_Page__contact__types_image" alt=""> -->

                            <a target="_blank" class="NeoP__Main_Page__contact__types_image__btn_c" href='https://www.linkedin.com/in/hugo-castro-ba2b04188/'><img src="../../static/img/linkedin.svg" class="NeoP__Main_Page__contact__types_image" alt=""></a>
                            <a target="_blank" class="NeoP__Main_Page__contact__types_image__btn_c" href='https://github.com/HugoCastroBR'><img src="../../static/img/github-sign.svg" class="NeoP__Main_Page__contact__types_image" alt=""></a>
                            <a target="_blank" class="NeoP__Main_Page__contact__types_image__btn_c" href='https://wa.me/5532988940411' ><img src="../../static/img/whatsapp.svg" class="NeoP__Main_Page__contact__types_image" alt=""></a>
                            
                        </div>

                        <span class="TextBasic">or mail me:</span>
                        <a href="mailto:hugocastrohc@outlook.com" class="TextBasic">hugocastrohc@outlook.com</a>
                        <button onclick='window.location.href="mailto:hugocastrohc@outlook.com?subject=Oferta de trabalho" ' class="TextBasic NeoP__Main_Page__Section_Button_pattern">Hire me</button>

                    </div>
            </div>
            </div>
            <div class="NeoP__Main_Page__Section_footer">
                <button onclick="window.location.href='#home'" class="TextBasic NeoP__Main_Page__Section_Button_pattern" id="Linked_at_-Home">Home</button>
            </div>
        </section>

    </main>
        
        
        
        
        `

        document.querySelector('body').innerHTML = html_en
        document.querySelector("html").lang = "en"
    }
}


languageSet()


HomeAnimation()
ChangeButton_Active()
ChangeA_Active()
