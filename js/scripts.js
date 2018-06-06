
//get input
const input= document.getElementById('search');

//get parent element of items to be searched alt/title
const searchList= document.querySelector('.gallery');
console.log(searchList);

//get elements to be searched through
const imgLinks = searchList.querySelectorAll("a");
console.log(imgLinks[0]);


input.addEventListener('keyup', () => {
  let searchResult = input.value.toLowerCase();

  for ( let i=0; i < imgLinks.length; i++) {
        let caption = (imgLinks[i].getAttribute('title');
        if  (caption.includes(searchResult)){
          imgLinks.style.display = '';
        } else {
          imgLinks.style.display = 'none';
        }
      }

  });
