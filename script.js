const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// Modal Function

//open function
const openModal = ()=>{
    console.log('Modal is opened...');

    //class add kro
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
}

//close function

const closeModal = ()=>{
    console.log('Modal is closed');
    //class remove kro
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}