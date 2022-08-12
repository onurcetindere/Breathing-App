let timing=document.querySelectorAll('.card-button');

let back_button=document.querySelectorAll('.back');
let breathing_page=document.getElementById('breath-section');
let main_page=document.getElementById('main-section');
let congrat_page=document.getElementById('congrat-section');


let breath_command=document.querySelector('.breath-command');
var total_duration=5;
let time_var=document.querySelector('.time');
var duration=5;

for(i=0;i<timing.length;i++){
    console.log(timing[i])
    
    timing[i].onclick=function(e){
        let value=e.target.value;
        render_breath_page();
        setTimeout(render_congrats_page,value*1000);
    }

}
for(i=0;i<back_button.length;i++){
back_button[i].onclick=function(){
    render_main_page()
}
}

function render_main_page(){
    breathing_page.style.display='none';
    congrat_page.style.display='none';
    main_page.style.display='flex';
   
}
function render_breath_page(){
    breathing_page.style.display='flex';
    main_page.style.display='none';
    congrat_page.style.display='none';
    setInterval(render_breath_changes,duration*1000);
}

function render_breath_changes(){
    
    total_duration+=duration;
    if(breath_command.innerText=="nefes ver"){
        breath_command.innerText="nefes tut";
        
    }
    else if(breath_command.innerText=="nefes tut"){
        breath_command.innerText="nefes al";
        
    }
    else if(breath_command.innerText=="nefes al"){
        breath_command.innerText="nefes ver";
        
    }
   
    
}
function render_congrats_page(time){
    breathing_page.style.display='none';
    congrat_page.style.display='flex';
    main_page.style.display='none';
    time_var.innerText=`${total_duration} saniye `;
    

}