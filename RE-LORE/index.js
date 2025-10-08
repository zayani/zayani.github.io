async function fetchLore(filePath) {
    //fetch lore-AR.txt as text
    const text = await fetch(filePath).then(res => res.text());

    const list = text.split('===').map(event => {
        const item = {
            text: "",
        };
        const lines = event.split('\n');

        lines.forEach(line => {
            let marker = line[0];

            if (marker === '$') {
                item.id = line.slice(1).trim();
            }
            else if (marker === '#') {
                item.title = line.slice(1).trim();
            }
            else if (marker === '@') {
                item.tag = line.slice(1).trim();
            }
            else if (line.trim().length > 0) {
                item.text += line.trim() + "\n";
            }
        });

        item.text = item.text.trim();

        return item;

    })

    return list;
}

const dialog = document.getElementById('character-dialog');
//close dialog when clicking outside of it
dialog.addEventListener('click', function (event) {
    var rect = dialog.getBoundingClientRect();
    var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
    if (!isInDialog) {
        dialog.close();
    }
});

function displayCard(character) {
    const char = window.characters.find(c => c.id === character);
    console.log(`Display card for ${character}`, char);
    //update character-dialog with character info
    const dialog = document.getElementById('character-dialog');
    dialog.className = 'character-card';
    dialog.innerHTML = `
        <img src="images/characters/${char.id}.jpg" alt="${char.name}" class="character-card-image"/>
        <div class="character-card-info">
        <div class="character-card-title">${char.title}</div>
        <div class="character-card-text">${textToHTML(char.text)}</div>
        </div>
        <button id="close-dialog" onclick="document.getElementById('character-dialog').close()">✖</button>
    `;
    dialog.showModal();
}


function textToHTML(text) {

    //make text html safe using textContent
    const div = document.createElement('div');
    div.textContent = text;
    text = div.innerHTML;


    return text.replace(/\[\[(.*?)\|(.*?)\]\]/g, (match, p1, p2) => {
        return `<a  onclick="displayCard('${p1.trim()}')">${p2.trim()}</a>`;
    });


}

async function main() {

    const [lore, characters] = await Promise.all([
        fetchLore('./lore-AR.txt'),
        fetchLore('./characters-AR.txt')
    ]);

    window.characters = characters;

    console.log(lore, characters);

    const loreEventsDiv = document.getElementById('lore-events');

    lore.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('lore-event');

        eventDiv.id = event.id || '';


        if (event.tag) {
            //add tag class to eventDiv
            eventDiv.classList.add(`tag`);
            eventDiv.classList.add(`tag-${event.tag}`);

            eventDiv.innerText = event.tag;

            loreEventsDiv.appendChild(eventDiv);
            return;
        }

        //add image using id as filename
        const img = document.createElement('img');
        img.src = `./images/${event.id}.jpg`;
        img.alt = event.id || '';
        img.classList.add('lore-event-image');
        eventDiv.appendChild(img);

        //add title 
        const title = document.createElement('div');
        title.classList.add('lore-event-title');
        title.innerText = event.title;
        eventDiv.appendChild(title);

        //add text
        const text = document.createElement('div');
        text.classList.add('lore-event-text');
        text.innerHTML = textToHTML(event.text);
        eventDiv.appendChild(text);


        loreEventsDiv.appendChild(eventDiv);


    });


    //add class inView using IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inView');
            } else {
                entry.target.classList.remove('inView');
            }
        });
    }, { threshold: 0.25 });

    // Observe each lore event
    document.querySelectorAll('.lore-event').forEach(event => {
        observer.observe(event);
    });
}

main();


