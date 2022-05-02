const headerComponent = function(title){
    return `
    <header>${title}</header>
    `
}

const sectionComponent = function(id, buttonText, h2Text){
    return `
    <section id="${id}">
        <h2>${h2Text} <span>Hello</span></h2>
        <button>${buttonText}</button>
    </section>
    `
    //nagyon fontos, hogy a zárójelek, idézőjelek megfelelő helyen legyenek
    //én hibám: id=""-t egy idézőjelbe tettem először
}

const footerComponent = function(){
    return `
    <footer></footer>
    `
}

const loadEvent = function(){
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforebegin", headerComponent("Responsivity practice"))
    //a ()-rel le is futtatjuk a headerComponent-et
    
    let sections = ""
    for (let index = 1; index < 5; index++) { //4x szeretnénk kirenderelni a komponenst
        sections += sectionComponent(`id-${index}`, `Button ${index}`, `Subtitle ${index}`)     
    }

    rootElement.insertAdjacentHTML("beforeend", sections) 
    //ez a 28. sorból az üres string - utána a már kész összeállt stringet rakja majd ide (a 30. sorból)
    //ez ráadásul kevesebb memóriát igényel
    
    rootElement.insertAdjacentHTML("afterend", footerComponent()) 
    //ide nem kell a () közé írni semmit, mert nem vár semmit a függvény - nincsenek létrehozott ID-k, title-k, stb.
    //ezen kívül figyelni kell arra, hogy a div utánra tennénk a footerComponent-t, ezért afterend
}


window.addEventListener("load", loadEvent)