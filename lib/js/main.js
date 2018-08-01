const title =  document.querySelector('#title_input').onChange; 
console.log(title); 

const submit_button = document.querySelector('#submit_button'); 
submit_button.addEventListener('click', onClick); 

function onClick(event){
    event.preventDefault(); 
    let text1 = document.querySelector('#title_input');
    let text_t = text1.value; 
    let new_ad_lib = document.querySelector('#title_input').placeholder; 
    let text2 = document.querySelector('#noun');
    text_n = text2.value; 
    let text3 = document.querySelector('#verb'); 
    text_v = text3.value; 
    let text4 = document.querySelector('#adjective'); 
    text_a = text4.value;
    let form_container = document.querySelector('.form_container');

        if( text_t=== "" || text_n=== "" || text_v=== "" || text_a=== ""){
            alert("Please fill out all of the fields"); 
        }
        else{
            new_ad_lib = " Last night, I ate a " + text_n + " and today I just had to " + text_v + ". What a" + text_a + " day!"; 
            form_container.style.display = "none"; 
        }
    console.log(new_ad_lib); 
    let story_result = document.querySelector(".story_result"); 
    story_result = new_ad_lib; 
    story_result.style.display = "block"; 
}
    