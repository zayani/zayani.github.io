
let events = timeline.split("\n").filter(x => x);


events = events.map(x => {

    let parts = x.split(":");
    let type = parts[0][0];
    let text = parts[1].trim();

    let trans = parts[0][2] ? (parts[0][0] + parts[0][2]) : "";

    return `
    <div class="event ${type}" trans=${trans} >
        <div class="BahrainEvent">${type == "ب" ? text : ""}</div>
        <div class="MudadEvent">${type == "م" ? text : ""}</div>
        <div class="GhurabaEvent">${type == "غ" ? text : ""}</div>
    </div>
    `

});


document.getElementById("events").innerHTML =
    `
    <div class="eventHead">
        <div class="BahrainEvent">البحرين</div>
        <div class="MudadEvent">مدد</div>
        <div class="GhurabaEvent">الغرباء</div>
    </div>
    ` +
    events.join("\n");