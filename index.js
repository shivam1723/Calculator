let string="";
let buttons=document.querySelectorAll('.button');
console.log(buttons);

main().catch(err => alert(err));

async function main(){
    try{
        Array.from(buttons).forEach(button => {
            button.addEventListener('click',(e)=>{
                if(e.target.innerHTML == "="){
                    string = eval(string);
                    document.querySelector('input').value=string;
                }
                else if(e.target.innerHTML=="AC"){
                    string="";
                    document.querySelector('input').value=string;
                }
                else if(e.target.innerHTML=="DEL"){
                    string=string.slice(0,-1);
                    document.querySelector('input').value=string;
                }
                else{
                    console.log(e.target)
                    string=string+e.target.innerHTML;
                    document.querySelector('input').value=string;
                }
                
            })
        })
    }
    catch(e){
        alert(e.message);
    }
}
