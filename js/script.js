const btn =document.getElementById("switch")
const body=document.querySelector('body')

btn.addEventListener('click',()=>{

    if(body.classList.contains('dark')){
        body.classList.remove('dark');
        btn.classList.remove('active')
        
    }else{
        body.classList.add('dark');
        btn.classList.add('active')
    }
}
)
