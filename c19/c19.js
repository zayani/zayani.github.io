import Bahraincases from './bahrain.js';
import Worldcases from './world.js';
import $ from './c19helper.js';

let cases = window.cases = {
    " Bahrain_": Bahraincases,

};



Object.entries(cases).forEach(([k, v]) => {

    let info = v.info || {}

    cases[k] = v.map((parms, i) => [$.date(v.day0, i), ...parms]);

    cases[k].label = k;
    cases[k].info = info;

    $.addCasesFunctions(cases[k]);

})



let ID = 1;

let info = (v, i) => ({
    v, f: ((v == "" || isNaN(v) || Number.isInteger(v)) ? v : (v).toFixed(2)) +
        (c[i] ? `\nDay ${i + 1} Σ${c.sum(i)}` +
            `\n🤒${c[i][1]} 💚${c[i][2]} 💀${c[i][3]}` : ``)
});


let drawChart = (cols, rows, style = "", opt = {}) => {

    let id = `chart${ID++}`;

    document.getElementById(opt.hostid || "charts").innerHTML += `<div class="chart card" id=${id} style="${style}"></div>`;

    var data = new google.visualization.DataTable();

    let colors = [];

    opt.series = {};

    cols.forEach(([type, label, seriesOpt = {}], i) => {
        data.addColumn(type, label);
        opt.series[i - 1] = seriesOpt;
    });

    data.addRows(rows);

    var options = {
        legend: { position: 'in' },
        chartArea: { width: "85%", height: "90%" },
        ...$.epandKeys(opt),

    };

    //console.log(options);

    setTimeout(() => {
        var chart = new google.visualization.ComboChart(document.getElementById(id));
        chart.draw(data, options);
    }, 0);

}



let pred = (i) =>
    Math.round((c.R0(c.l) ** (i / 5)) * c.new(c.l, 3) / 3);



let addStat = (c) => {

    let dd = c.dratediff();

    let wa = c.map((v, i) => c.new(i, 7) / 7);

    let max_i = c.max_i =
        wa.reduce((iMax, x, i, arr) => x >= arr[iMax] ? i : iMax, 0);




    let max_d = c[max_i][0];

    let max_diff_d = (c[c.l][0] - max_d) / 864e5;

    let wdi = c.map((v, i) => ((c[i][3] - (c[i - 7] ? c[i - 7][3] : 0)) / 7));

    let max_di = c.max_di = wdi.reduce((iMax, x, i, arr) => x >= arr[iMax] ? i : iMax, 0);

    let max_diff_di = (c[c.l][0] - c[max_di][0]) / 864e5;

    document.getElementById("charts").innerHTML += `<div  id="stat" class="stat card" >
    <div id="selectholder"></div>
    ${c.label} 
    ${($.date(c[c.l][0], 0) + "").split(" ").slice(0, 4).join(" ")}
    <br>Σ<b>${c.sum(c.l).toLocaleString()}</b> | 🤒${c[c.l][1].toLocaleString()} 
    (${(c[c.l][1] / c.sum(c.l) * 100).toFixed(1)}%)
    <br>
    💚${c[c.l][2].toLocaleString()} 
    (${(c[c.l][2] / c.sum(c.l) * 100).toFixed(1)}%)
    | 💀${c[c.l][3].toLocaleString()}
     (${(c[c.l][3] / c.sum(c.l) * 100).toFixed(2)}%)<br>
    day ${c.l + 1} <b>+${c.df(c.new(c.l))}</b> (${c.drate(1)}%) | daily avg: <br>
    1w=${c.drate(7)}%  2w=${c.drate(7 * 2)}%  3w=${c.drate(7 * 3)}%<hr>
    2double= ${c.days2double}d | c.lag=${c.lag}d <br/> 
    <hr>
    <sub>R0<sup>*</sup><1:
    ${c.R0B(6, 1, 7)} ${c.R0B(5, 2, 7)} ${c.R0B(4, 3, 7)} ${c.R0B(3, 4, 7)} ${c.R0B(2, 5, 7)} ${c.R0B(1, 6, 7)} ${c.R0B(0, 7, 7)}</sub>
    <hr>
    <sub>R0<sup>**</sup><1:
    ${c.R0B(13, 1, 14)} ${c.R0B(12, 2, 14)} ${c.R0B(11, 3, 14)} ${c.R0B(10, 4, 14)} ${c.R0B(9, 5, 14)} ${c.R0B(8, 6, 14)} ${c.R0B(7, 7, 14)}</sub>
    <hr>
    Peak death<sup>*</sup>:<br>${JSON.stringify(c[max_di][0]).split("T")[0].substr(1)}<sup>${max_diff_di}d ago</sup> @${wdi[max_di].toFixed(1)}<br/>
    ${ max_diff_d >= 1 ? `Peak day<sup>*</sup>:<br/>${JSON.stringify(c[max_i][0]).split("T")[0].substr(1)}<sup>${max_diff_d}d ago</sup> @${Math.round(wa[max_i])}<br>since ${(-1 * (100 - (wa[wa.length - 1] / wa[max_i] * 100))).toFixed(2)}%` : ``}
    <hr>
    *=7  **=14 (days rolling average)
    </div>`;

    // days<: ${c.la.join(' ')}
    /*
     Accel.<sup>*</sup>: ${(((c.new(c.l, 7) / 7) - (c.new(c.l - 7, 7) / 7)) / 7).toFixed(1)} cases/day²<br/>
    */
}

let addcasesTable = (c) => {

    document.getElementById("charts").innerHTML += `<div class="table card" id="casestable"></div>`;

    var data = new google.visualization.DataTable();

    let wd = [0, 0, 0, 0, 0, 0, 0, 0];




    for (let i = 0, l = c.length - (c.length % 7); i < l; i++) {
        wd[7] += c.new(i); wd[i % 7] += c.new(i);
    }

    for (let avg, i = 0; i < 7; i++) {
        avg = wd[i] / wd[7] * 7;
        data.addColumn('string', ("" + c[i][0]).split(" ")[0]
            + `<br><span>${avg.toFixed(2)}/7<span>`
        );
    }


    data.addColumn('string', 'Σ');


    let cases = [];
    let max = c.map((_, i) => i && c.new(i)).sort((a, b) => parseInt(b) - parseInt(a))[2];


    let psum;

    let colors = ["#FF0000", "#FF3333", "#FF6666", "#FF9999", "#FFCCCC", "#FFFFFF"];

    for (let i = 0, w = 1; i < c.length; i += 7, w++) {



        let row = Array(7).fill(null).map((_, j) =>
            [i + j, c.new(i + j), c.daysmaller(i + j, 5),
            c.df((c[i + j] || [, , 0])[2] - (c[i + j - 1] || [, , 0])[2]),
            c.df((c[i + j] || [, , 0])[3] - (c[i + j - 1] || [, , 0])[3]),
            ]);
        //console.log(row);
        let wsum = row.reduce((a, b) => a + b[1], 0);

        if (c.length - (11 * 7) > i) { psum = wsum; continue; }

        let bi = i + 6 < c.l ? i + 6 : c.l;

        //rgb(${v(n)})
        //v(n)[1] > 128 ? '#000' : '#fff'

        cases.push([...row.map(([n, x, C, r, d]) =>
            `<div title="${
            ($.date(c[0][0], n) + "").split(" ").slice(0, 4).join(" ")
            + info("", n).f}"
            
            style='background: ${x == null ? "#fff" : colors[C]}; 
            color: ${C < 3 ? "#fff" : "#000"}'
            
            >${x == null ? '' : c.df(x) +
                /*' ' +
                (c[n - 1] && c[n] && c[n + 1] ?
                    ~~((c.new(n - 1) + c.new(n) + c.new(n + 1)) / 3)
                    : x)
                +*/
                `<div>
            ✓${r}<br>-${d}
            ${
                ""//JSON.stringify($.date(c[0][0], n)).split("T")[0].split("2020-")[1]
                }</div>`}</div>`
        ),
        `W${w} ${psum ? (i + 6 > c.l ? (wsum * 7 / (c.length % 7)) / psum : wsum / psum).toFixed(2) : ''}<br/><b>${c.df(wsum)} 
        
        ${c.df(Math.round(i + 6 > c.l ? wsum / (c.length % 7) : wsum / 7))}</b><br/><sub>
        ✓${
        c.df(c[bi][2] - (c[i - 1] || [, , 0])[2])
        } 
        -${
        c.df(c[bi][3] - (c[i - 1] || [, , 0])[3])
        }</sub>`]);

        psum = wsum;
    }

    data.addRows(cases);

    setTimeout(() => {
        var table = new google.visualization.Table(document.getElementById('casestable'));
        table.draw(data, { showRowNumber: false, width: '100%', height: '100%', allowHtml: true, alternatingRowStyle: false });
    }, 0);

    //addcasesTable2(c);

}

let drawChart2 = _ => { };

let drawpage = window.drawpage = (c, width = 380) => {


    let inc = 5 //$.incubation;

    document.getElementById("charts").innerHTML = "";
    window.c = c;

    loadlive();
    addStat(c);
    addcasesTable(c);




    drawChart(
        [
            ['number', 'Days'],
            ['number', 'n-days/perv n-days', { color: 'gray', type: 'bars' }],
            ['number', 'safe', { color: '#afa', type: 'area', visibleInLegend: false }],
            ['number', 'near safe', { color: '#ffa', type: 'area', visibleInLegend: false }],
            ['number', 'near safe', { color: '#faa', type: 'area', visibleInLegend: false }],


        ],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map(n => [
            n,
            c.R0(c.l, n, n),
            1,
            0.25,
            1e6,

        ])
        ,
        `width: ${width}px;height: 500px;`,
        {
            lineWidth: 0,
            'vAxis.viewWindow.max': 2.0,
            'vAxis.viewWindow.min': 0,
            isStacked: true,
            'hAxis.gridlines.count': 5,
            'hAxis.direction': -1,


        }
    );



    drawChart(
        [
            ['date', 'date'],
            ['number', 'safe', { color: '#afa', type: 'area', visibleInLegend: false }],
            ['number', 'near safe', { color: '#ffa', type: 'area', visibleInLegend: false }],
            ['number', 'not safe', { color: '#faa', type: 'area', visibleInLegend: false }],
            ['number', 'extremely dangerous', { color: '#800', type: 'area', visibleInLegend: false }],
            //['number', 'R0 Accum', { color: 'orange' }],
            // ...Array(17).fill().map((v, i) => i + 5)
            //     .map(n =>
            //         ['number', `R0(${n}d)`, { color: `#eee`, visibleInLegend: false }]),

            // ['number', 'R0(7d death)', { color: 'pink' }],
            ['number', '(5d)', { color: '#eee', visibleInLegend: false }],
            ['number', 'R0(28d)', { color: '#000' }],
            ['number', '(21d)', { color: 'blue' }],
            ['number', '(14d)', { color: 'green' }],

            ['number', '(7d)', { color: 'orange' }],



        ],
        c.map(([date, act, rcv, dth], i) =>
            i <= c.l - (7 * 4) ? null : [
                date,
                1,
                0.25,
                0.75,
                1e6,
                // ...Array(17).fill().map((v, i) => i + 5)
                //     .map(n => c.R0(i, n, n)),
                // c.newDeath(i, 7) / c.newDeath(i - 7, 7),
                info(c.R0(i, 5, 5), i),
                info(c.R0(i, 28, 28), i),
                info(c.R0(i, 21, 21), i),
                //c.R0(i, 21, 21),
                info(c.R0(i, 14, 14), i),
                info(c.R0(i, 7, 7), i),



            ]
        )
        ,
        `width: ${width}px;height: 500px;`,
        {
            'hAxis.format': 'MMM d',
            'vAxis.viewWindow.max': 2,
            'vAxis.viewWindow.min': 0.5,

            isStacked: true,
        }
    );





    let n = c.new(0);




    drawChart(
        [
            ['date', 'date'],
            ['number', 'too fast', { color: '#faa', type: 'area', visibleInLegend: false }],
            ['number', 'fast', { color: '#ffa', type: 'area', visibleInLegend: false }],
            // ['number', ' (death)', { color: 'red' }],
            ['number', 'days to double (7d RA trend)', { color: '#aaa' }],
            ['number', '(total)', { color: '#444' }],



        ],
        c.map(([date, act, rcv, dth], i) =>
            i < c.l - 70 ? null : [
                date,
                14,
                28,
                // c.days2doubleDeath(i),
                c.dratedouble(7, i),
                c.days2doubleC(i),



            ]
        )
        ,
        `width: ${width}px;height: 500px;`,
        {
            'hAxis.format': 'MMM d',
            'vAxis.viewWindow.max': 70,
            isStacked: true,

            //'vAxis.logScale': true,
            //'vAxis.direction': -1
        }
    );

    let ca = c.map((v, i) => (c.new(i) - c.new(i - 1)));

    let max = (_ => Math.max(...c.map((v, i) => c.new(i, 7) / 7),
        ...c.map((v, i) => c.new(i, 5) / 5)))();



    let mapv = x => (
        x > 0.1 ? 1 :
            x > 0.05 ? 10 :
                x > 0.01 ? 20 : 50
    )

    let _1_3 = 1 / 3;

    let max_up = 0;

    let newchart = (cond, max, log) => drawChart(
        [
            ['date', 'date'],

            ['number', 'new', { color: 'gold', type: 'bars' }],

            ['number', '14d/14', { color: 'green' }],
            ['number', '7d/7', { color: '#000' }],


            //['number', '14d', { color: 'green' }],
            //['number', 'new28/28', { color: '#FF00FF' }],
            ['number', 'pred min',
                { color: '#fff', type: 'area', lineWidth: 0, visibleInLegend: false }],
            ['number', 'pred max',
                { color: '#8ff', type: 'area', lineWidth: 0, visibleInLegend: false }],
            ['number', 'Week Aim',
                { color: 'brown', lineWidth: 1, visibleInLegend: false }],
            ['number', '💀7d', { color: 'red', lineWidth: 1, targetAxisIndex: 0 }],
            ['number', 'Critical', { color: 'darkred', lineWidth: 1, visibleInLegend: false }],


        ],
        c.map(([date, act, rcv, dth], i) =>
            cond(i) ? [
                date,
                info(c.new(i), i),

                info(c.new(i, 14) / 14, i),
                (c.new(i, 7) / 7),
                //c.new(i, 7) / 7 >= max_up ?  info(max_up = c.new(i, 7) / 7, i) : null,

                //  (c.new(i, 5) / 5) < (c.new(i, 14) / 14) &&    (c.new(i, 7) / 7) < (c.new(i, 14) / 14) ? info(c.new(i, 14) / 14, i) : null,
                //info(c.new(i, 28) / 28, i),
                c.info && c.info.pred_min,
                c.info && { v: c.info.pred_max - c.info.pred_min, f: c.info.pred_max + '' },
                c.info && c.info.weekAim,
                (c[i][3] - (c[i - 7] || [])[3]),
                c[i][4]

            ] : null
        )
        ,
        `width: ${width}px;height:500px;`,
        {
            'hAxis.format': 'MMM d',
            'vAxis.format': 'short',
            'vAxis.viewWindow.min': 0,
            'vAxis.logScale': 0,
            'vAxis.viewWindow.max': max,
            isStacked: true,
            'vAxes.1.gridlines.count': 0,

            interpolateNulls: true
        }
    );


    newchart(i => i >= c.l - 28);

    drawChart2(
        [
            ['date', 'date'],
            ['number', 'Accel. cases/day² (5d avg)', { color: '#eee' }],
            ['number', '(7d avg)', { color: 'gold' }],
            ['number', '(14d avg)', { color: 'green' }],


        ],
        c.map(([date, act, rcv, dth], i) => c.sum(i) < 100 ? null : [
            date,
            ((c.new(i, 5) / 5) - (c.new(i - 5, 5) / 5)) / 5,
            ((c.new(i, 7) / 7) - (c.new(i - 7, 7) / 7)) / 7,
            ((c.new(i, 14) / 14) - (c.new(i - 14, 14) / 14)) / 14,


        ]),
        `width: ${width}px;height: 500px;`,
        {
            'hAxis.format': 'MMM d',
            'vAxis.format': 'short',


        }
    );


    newchart(i => c.sum(i) > 100, max);


    drawChart(
        [

            // ['number', 'New7', { color: '#666' }],

            ['number', '', { color: 'blue', visibleInLegend: false }],
            ['number', '', { color: 'blue', visibleInLegend: false }],




        ],
        c.map(([date, act, rcv, dth], i) => i < 1 ? null : [
            c.new(i, 7) / 7,
            act,





        ]),
        `width:450px;height: 500px;`,
        {
            //'hAxis.format': 'MMM d',
            'vAxis.format': 'short',
            isStacked: true,
            lineWidth: 1,

            'vAxes.1.format': 'percent',
            'vAxes.1.gridlines.count': 10,

            'vAxes.1.gridlines.color': '#fff'

        }
    );




    drawChart(
        [
            ['date', 'date'],
            // ['number', 'New7', { color: '#666' }],
            ['number', 'Active', { color: 'gold', type: 'area' }],
            ['number', 'Recoverd', { color: 'green', type: 'area' }],
            ['number', 'Death', { color: 'red', type: 'area' }],
            ['number', 'Peak active', { color: 'brown', lineWidth: 1, visibleInLegend: false }],
            //['number', 'Total', { color: '#000', lineWidth: 0.1, visibleInLegend: false }],
            ['number', 'cap', { color: '#4A235A', lineWidth: 1, visibleInLegend: false }],
            ['number', '50%', { color: 'blue', lineWidth: 1, targetAxisIndex: 1, visibleInLegend: false }],

        ],
        c.map(([date, act, rcv, dth], i) => c.sum(i) < c.sum(c.l) / 200 ? null : [
            date,
            info(act, i),
            info(rcv, i),
            info(dth, i),
            Math.max(...c.map(x => x[1])),
            //c.sum(i),
            c.info && c.info.acticap,
            0.5
        ]),
        `width:450px;height: 500px;`,
        {
            'hAxis.format': 'MMM d',
            'vAxis.format': 'short',
            isStacked: true,
            lineWidth: 0,
            'vAxes.0.viewWindow.max': c.sum(c.l) * 1.05,

            'vAxes.1.viewWindow.max': 1.05,
            'vAxes.1.format': 'percent',
            'vAxes.1.gridlines.count': 10,

            'vAxes.1.gridlines.color': '#fff'

        }
    );










}

google.charts.load('current', { 'packages': ['corechart', 'table'] });
google.charts.setOnLoadCallback(_ => {
    drawpage(cases[" Bahrain_"]);
    //drawpage(cases.World);
});

let doneloadlive;

let loadlive = window.loadlive = async _ => {

    //return loadlive2();


    if (doneloadlive) return addSelectBox();

    let url = `https://covid.ourworldindata.org/data/ecdc/total_cases.csv`;

    let data = await (await fetch(url).then(r => r.text()));

    data = data.split("\n").map(x => x.split(","));

    if (data && data.length) doneloadlive = true;

    let countryMap = data[0].slice(1).map(x => " _" + x.split(" ").join("_"));

    data.slice(1).forEach(row => {
        let date = new Date(row[0]);
        row.slice(1).forEach((v, i) => {
            let c = countryMap[i];

            if (c != " _World" && c != " _China") return;

            if (!cases[c]) cases[c] = [];

            let a = cases[c];

            if (v == "" && a[a.length - 1]) v = a[a.length - 1][1];

            if (v < 1) return;

            a.push([date, parseInt(v), 0, 0]);
        })
    });

    Object.entries(cases).forEach(([k, v]) => {
        cases[k].label = k;
        $.addCasesFunctions(cases[k]);
    })

    addSelectBox();

    await loadlive2();

    addSelectBox();
}

let loadlive3 = window.loadlive3 = async _ => {
    let data, cc = {};
    if (Date.now() - localStorage.getItem('corona.lmao.ninja_last') > (60 * 60 * 1000)) {
        let url = `https://corona.lmao.ninja/v2/historical?lastdays=all`;
        let data = await (await fetch(url).then(r => r.json()));

        data.forEach(x => {
            let k = x.country;
            let t = cc[k] = [];
            Object.entries(x.timeline.cases).forEach(([k, v]) => {
                let d = x.timeline.deaths[k],
                    r = x.timeline.recovered[k],
                    a = v - d - r;
                if (v <= 0) return;
                t.push([k, a, r, d]);
            });
        })

        localStorage.setItem('corona.lmao.ninja_data', JSON.stringify(cc));
        localStorage.setItem('corona.lmao.ninja_last', Date.now());
    }
    else cc = JSON.parse(localStorage.getItem('corona.lmao.ninja_data'));

    Object.entries(cc).forEach(([k, v]) => {

        if (~["Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "UAE", "Oman"]
            .indexOf(k)) k = " _" + k;

        v = cases[k] = v.map(([d, ...r]) => [new Date(d), ...r]);

        v.label = k;

        $.addCasesFunctions(v);
    });

    combineCases(' GCC',
        [" _Bahrain", " _Kuwait", " _Oman", " _Qatar", " _Saudi Arabia", " _UAE"]
    );

    addSelectBox();

}



let loadlive2 = window.loadlive2 = async _ => {

    return loadlive3();

    let data, cc = {};
    if (Date.now() - localStorage.getItem('covid19api_last') > (60 * 60 * 1000)) {
        let url = `https://api.covid19api.com/all`;

        let data = await (await fetch(url).then(r => r.json()));



        data.forEach(x => {
            let k = x.Country;

            if (~["Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "United Arab Emirates", "Oman"]
                .indexOf(k)) k = " " + k;

            if (x.City || x.Province || x.State) return;
            if (x.Active > 0 || x.Recovered > 0 || x.Deaths > 0) {



                if (!cc[k]) cc[k] = [x.Date.split("T")[0]];

                cc[k].push([
                    parseInt(x.Active), parseInt(x.Recovered), parseInt(x.Deaths)]);
            }
        })





        localStorage.setItem('covid19api_data', JSON.stringify(cc));
        localStorage.setItem('covid19api_last', ~~(Date.now() / 36e5) * 36e5);


        await loadlive();

    }
    else cc = JSON.parse(localStorage.getItem('covid19api_data'));




    Object.keys(cc).forEach(k => {

        let [day0, ...caseK] = cc[k];

        cases[k] = caseK.map((parms, i) => [$.date(new Date(day0), i), ...parms]);

        cases[k].label = k;
        $.addCasesFunctions(cases[k]);

    });



    let all = Object.keys(cases);

    all.shift();

    combineCases(' GCC',
        [" Bahrain", " Kuwait", " Oman", " Qatar", " Saudi Arabia", " United Arab Emirates"]
    );

    addSelectBox();
}

let addSelectBox = _ => {



    setTimeout(_ => {

        let select = `<select id="list"><option value="" selected disabled hidden>...</option>
        ${ Object.keys(cases).sort().map(x => `<option value="${x}">${x}</option>`).join("\n")}
        </select>`

        document.getElementById('selectholder').innerHTML = select;

        document.getElementById("list").onchange = e => {
            drawpage(cases[e.target.value]);
            addSelectBox();
        }
    }, 0);
}

let combineCases = (name, keys) => {
    let comb = {};
    keys.forEach(k => {
        let c = cases[k];

        c.forEach(x => {
            let t = x[0] - 0;

            let X = comb[t] = comb[t] || [x[0], 0, 0, 0];

            X[1] += x[1]; X[2] += x[2]; X[3] += x[3];
        });

    });

    cases[name] = Object.keys(comb).map(x => parseInt(x)).sort().map(t => comb[t]);


    cases[name].label = name;

    $.addCasesFunctions(cases[name]);

    //console.log('GCC', cases[name]);

}


