document.getElementById("ste").addEventListener('click',()=>{
    choix=document.getElementById("ste")
    if(choix.checked){
        document.getElementById('steName').style.display='inline';
        document.getElementById('steName').previousElementSibling.style.display='inline';
    }else{
        document.getElementById('steName').style.display='none';
        document.getElementById('steName').previousElementSibling.style.display='none';

    }
})

document.getElementById("add").addEventListener('click',()=>{
    comp=document.getElementById("comp").value;
    nv=document.getElementById('niv').value;
    lst=document.getElementById("lstComp");
    lst.value+=comp+" - "+nv+"\n"
    
})

document.getElementById('valider').addEventListener('click',()=>{
    test=document.getElementById('test');
    
})

