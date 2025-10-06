async function fetchLore() {
    //fetch lore-AR.txt as text
    const text = await fetch('./lore-AR.txt').then(res => res.text());

    const events = text.split('===').map(event => {
        const eventObject = {
            text: "",
        };
        const lines = event.split('\n');

        lines.forEach(line => {
            let marker = line[0];

            if (marker === '$') {
                eventObject.id = line.slice(1).trim();
            }
            else if (marker === '#') {
                eventObject.title = line.slice(1).trim();
            }
            else if (marker === '@') {
                eventObject.tag = line.slice(1).trim();
            }
            else if (line.trim().length > 0) {
                eventObject.text += line.trim() + "\n";
            }
        });

        return eventObject;

    })

    return events;
}

async function main() {
    const lore = await fetchLore();
    console.log(lore);

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
        text.innerText = event.text;
        eventDiv.appendChild(text);


        loreEventsDiv.appendChild(eventDiv);


    });
}

main();


