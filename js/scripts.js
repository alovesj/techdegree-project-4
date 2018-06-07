
//get input
const input= document.getElementById('search');

//get parent element of items to be searched alt/title
const searchList= document.querySelector('.gallery');
console.log(searchList);

//get elements to be searched through
const imgLinks = searchList.querySelectorAll("img");
console.log(imgLinks);


input.addEventListener('keyup', () => {
  let searchResult = input.value.toLowerCase();

  for (let i=0; i < imgLinks.length; i++) {
    console.log[i];
        let caption = (imgLinks[i].getAttribute('title').toLowerCase);
        if(caption.includes(searchResult)){
          imgLinks[i].style.display = '';
        } else {
          imgLinks[i].style.display = 'none';
        }

      }

  });
