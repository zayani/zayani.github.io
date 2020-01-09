
let pre_yy;

let cells = data.map((d, i) => {

    let info = [];
    let version = "";
    let pre = "";
    let yy = d.date.split(", ")[1];


    if (!i || (i > 6 && pre_yy != yy))
        pre = `<div class="year">20${i ? yy : "10-2013"}</div>`;

    pre_yy = yy;
    if (~d.F9Version.search("Heavy")) version = "heavy";

    info.push(`<div class="date d${yy}" ${i > 6 ? `` : `style="font-size: 75%"`} >${i > 6 ? d.date.split(",")[0] : d.date}</div>`);

    return `${pre}<div class="event ${version}">${info.join("")}</div>`;
});

document.querySelector("#table").innerHTML = cells.join("");

