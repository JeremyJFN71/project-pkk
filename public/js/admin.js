const imgBtn = document.querySelector('#image-buttons')
const imgLen = document.querySelector('#image-length')
const imgMod = document.querySelector('#image-modal')
const nameMod = document.querySelector('#name-modal')

const btnReset = document.querySelector('button[type="reset"]');
const inputs = document.querySelectorAll('.form-control');
const categories = document.querySelectorAll('.form-select option');

const textarea = document.querySelector('textarea')

// Preview Image
function imagePreview(e){
    const fileInput = e.target.files;

    if (!fileInput.length){
        imgLen.innerText = 'No file choosen'
    } else{
        imgLen.innerText = `${fileInput.length} files`;
    }

    let btn = '';
    let images = [];
    let count = 0;

    // Image preview button
    for (let i of fileInput) {
        btn += `<button type="button" data-index="${count}" class="image-btn p-2 mt-2" style="border-radius: 30px;" data-bs-toggle="modal" data-bs-target="#previewModal">${i.name}</button>`

        images.push({
            name: i.name,
            url: URL.createObjectURL(i)
        })
        count++
    }
    imgBtn.innerHTML = btn

    // Modal
    const buttons = imgBtn.querySelectorAll('.image-btn')
    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            const image = images[e.target.dataset.index];
            nameMod.innerText = image.name;
            imgMod.src = image.url;
        })
    })
}

// Reset Form
btnReset.addEventListener('click', function(e){
    imgLen.innerText = 'No file choosen'
    imgBtn.innerHTML = '';
    textarea.style.height = 0;

    inputs.forEach((input)=>{
        input.setAttribute('value', '');
        input.innerText = '';
    });

    categories.forEach((category)=>{
        if(category.getAttribute('value')===''){
            category.setAttribute('selected', 'selected');
        } else{
            category.removeAttribute('selected');
        }
    });
})

// Auto resize textarea
textarea.setAttribute("style", "height:" + (textarea.scrollHeight) + "px;overflow-y:hidden;");
textarea.addEventListener('input', function (e) {
    e.target.style.height = 0;
    e.target.style.height = (e.target.scrollHeight) + "px";
});