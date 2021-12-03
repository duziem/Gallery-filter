window.addEventListener('load', ()=>{
    let isFirsthidden= false;
    let isSecondhidden= false;
    let btns= document.querySelectorAll('.btns');
    for(btn of btns){
        btn.addEventListener('click', (event)=>{
            event.preventDefault();
            const filter= event.target.getAttribute('data-filter');
            if(filter == 'all'){
                //call the show function
                let dataItems= document.querySelectorAll('.items');
                show(dataItems);
            }else{
                if (filter == "first") {
                    let hiddenItems= document.querySelectorAll('#data-items .items:not([data-attr=' + filter + '])');
                    let displayedItems= document.querySelectorAll('#data-items .items[data-attr=' + filter + ']');
                    
                    hide(hiddenItems, 400);
                    isSecondhidden= true;
                    if (isFirsthidden){
                        show(displayedItems);
                    }
                   
                }
                if (filter == "second") {
                    let hiddenItems= document.querySelectorAll('#data-items .items:not([data-attr=' + filter + '])');
                    let displayedItems= document.querySelectorAll('#data-items .items[data-attr=' + filter + ']');
                    hide(hiddenItems, 400);
                    isFirsthidden= true;
                    if (isSecondhidden) {
                        show(displayedItems);
                    }
                }
            }

        })
    }

    function hide(elements, timeOut){
        for(elem of elements){
           elem.classList.remove('seek');
            elem.classList.add('hide');
        }
        setTimeout(()=>{
            for(elem of elements){
                elem.style.display="none";
            }
            
        }, timeOut)
    }

    function show(elements){
        for(elem of elements){
            elem.classList.remove('hide');
            elem.style.display="block";
            elem.classList.add('seek');
        }
    }
})