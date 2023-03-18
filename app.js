// ADDING ACTIVE CLASS TO NUMBERS
let selectElement =(btnNumber)=>{
    unselectElement();
    document.querySelector('#g'+btnNumber).classList.add('selected');
    document.querySelector('#selectedNumber').innerHTML= btnNumber;
};
let unselectElement =() =>{
    let selectedElement = document.querySelector('.selected');
    if(selectedElement) {
        selectedElement.classList.remove('selected');
    };
};
for(let i = 1; i < 6; i++) {
    let selectElementI = () =>{
        selectedElement = i;
        selectElement(i);
    };
    document.querySelector('#g'+i).addEventListener('click',selectElementI);
};
// DISPLAYING "THANKYOU" MESSAGE
let showThanks = () => {
    if(selectedElement){
    document.querySelector('#choicemenu').classList.remove('choicemenu');
    document.querySelector('#choicemenu').classList.add('hidden');
    document.querySelector('#thanks').classList.remove('hidden');
    document.querySelector('#thanks').classList.add('thanks');
    };
};
document.querySelector('#fourth-grid').addEventListener('click', showThanks);