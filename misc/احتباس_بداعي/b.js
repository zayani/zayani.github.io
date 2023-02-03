const Budget = [
    { cat: "Pre Production", item: "Story Rights", $: 0 },
    { cat: "Pre Production", item: "Development", $: 0 },
    { cat: "Pre Production", item: "Producer/Director", $: 0 },
    { cat: "Pre Production", item: "Casting", $: 0 },

    { cat: "Production", item: "Cast - Principal #1", $: 1500 },
    { cat: "Production", item: "Cast - Actor #1", $: 100 },
    { cat: "Production", item: "Cast - Actor #2", $: 100 },

    { cat: "Production", item: "Crew - Director", $: 0 },
    { cat: "Production", item: "Crew - Producer", $: 0 },
    { cat: "Production", item: "Crew - Cinematographer", $: 2000 },

    { cat: "Production", item: "Animation - Part 1 (3 Minute)", $: 900 },
    { cat: "Production", item: "Animation - Part 2 (3 Minute)", $: 900 },
    { cat: "Production", item: "Animation - Part 3 (1 Minute)", $: 300 },

    { cat: "Production", item: "Props", $: 300, },
    { cat: "Production", item: "Locations", $: 300, },
    { cat: "Production", item: "Art Design", $: 0, },
    { cat: "Production", item: "Wardrobe", $: 0, },
    { cat: "Production", item: "Hair/Makeup", $: 0, },

    { cat: "Post Production", item: "Editing/Color grading", $: 1000 },
    { cat: "Post Production", item: "Sound mixing", $: 500 },
    { cat: "Post Production", item: "Music licensing", $: 500 },
    { cat: "Post Production", item: "Subtitling/CC", $: 500 },


    { cat: "Other", item: "Marketing", $: 1000 },
    { cat: "Other", item: "Webstie/social accounts", $: 500 },
    {
        cat: "Other", item: "Contingency (10%)", $: totalArr => totalArr.reduce((acc, item) => acc + item, 0) * 0.1
    }

]

let table = ``;

let id = 1000;

getCatInfo = (cat, IDpre = "X", totalArr = []) => {




    //get budget for category cat
    const budget = Budget.filter(item => item.cat === cat)



    //check if there is a function in $
    budget.forEach((item, i) => {
        item.id = id;
        id += 100;
        if (typeof item.$ === "function") {
            item.$ = item.$(totalArr)
        }
    })


    //add total
    const total =
        cat == "Grand Total" ?
            totalArr.reduce((acc, item) => acc + item, 0) :
            budget.reduce((acc, item) => acc + item.$, 0);

    budget.push({ item: "Total", $: total })

    //convert to html table
    const budgetHtml = budget.map(item => {
        //        <div td id>${item.id || ""}</div>
        return `<div row="${item.item}">
        <div td id>${item.id || ""}</div>
        <div td item="${item.item}">${item.item}</div>
        <div td price="${item.$}">${item.$}</div>
        </div>`
    }).join("");

    return {
        table: `<div table="${cat}">
          <div th="${cat}">${cat}</div>
        ${budgetHtml}
        </div>`,
        total
    }
}

let tables = [];

//add pre production
tables.push(getCatInfo("Pre Production", 100));

//add production
tables.push(getCatInfo("Production", 200, tables.map(x => x.total)));

//add post production
tables.push(getCatInfo("Post Production", 300, tables.map(x => x.total)));

//add other
tables.push(getCatInfo("Other", 400, tables.map(x => x.total)));

tables.push(getCatInfo("Grand Total", 500, tables.map(x => x.total)));


//add all tables
let html = tables.map(x => x.table).join("");



//display
document.body.innerHTML = html;





