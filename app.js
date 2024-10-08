const title = document.getElementById('songTitle');
const artist = document.getElementById('songArtist');
const addBtn = document.getElementById('addSongBtn');
const ul = document.getElementById('songList');

addBtn.addEventListener('click', ()=>{
    //Get value from input form
    const newTitle = title.value;
    const newArtist = artist.value;

    //create element
    const h4 = document.createElement('h4');
    const small = document.createElement('small');


    //set value to the element
    h4.innerHTML = newTitle;
    small.innerHTML = newArtist;

    //add class to the element
    h4.classList.add('mb-1')
    small.classList.add('text-muted')

    //create container
    const div = document.createElement('div');
    const div1 = document.createElement('div');
    div1.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    div.append(h4);
    div.append(small);

    div1.append(div)


    const li = document.createElement('li');
    li.append(div1);

    //append to list

    ul.append(li);

    console.log(li)
})


console.log(title,artist)
