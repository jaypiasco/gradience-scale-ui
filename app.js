const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = [] //for creation and deletion


//Listens to the button when inserting a file image

input.addEventListener("change", () => {
    const file = input.files
    imagesArray.push(file[0]) //pushes the image into array [0]
    displayImages()
    console.log(imagesArray)
})

//test for deleting the array[1] if length is >= 2

if (imagesArray.length >= 2) {
    imagesArray.splice(0, 1);
    console.log(imagesArray);
}

//displays the image and puts a forEach group in the array []

function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
        images += `<div class="image">
            <img src="${URL.createObjectURL(image)}" alt="image">
            <span onclick="deleteImage(${index})">&times;</span>
            </div>`
    })
    output.innerHTML = images
    console.log(imagesArray)

}

// splices the array at forEach group array index[]

function deleteImage(index) { //deletes the image
    imagesArray.splice(index, 1)
    displayImages()
    console.log(imagesArray)
}