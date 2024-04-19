const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */



const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
const alts = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Rock that looks like a wave',
    'pic3.jpg': 'Purple and white pansies',
    'pic4.jpg': 'Section of wall from a pharoah\'s head',
    'pic5.jpg': 'Large moth on a leaf',

}


for(const image of images){
    const img = document.createElement('img');
    img.setAttribute('src', `images/${image}`);
    img.setAttribute('alt', alts[image]);
    thumbBar.appendChild(img);
    img.addEventListener('click', (e) =>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
    
}
    


/* Wiring up the Darken/Lighten button */
