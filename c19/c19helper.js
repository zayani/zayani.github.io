let $ = {

    incubation: 5,

    epandKeys(obj) {
        let obj2 = {};

        Object.keys(obj).forEach(k => {
            let keys = k.split("."), o = obj2, l = keys.length - 1;

            for (let i = 0; i < l; i++) o = o[keys[i]] = { ...(o[keys[i]] || {}) };


            o[keys[l]] = obj[k];
        });

        return obj2;
    },

    date: (date, addDays = 0) =>
        new Date((new Date(date)).setDate(date.getDate() + addDays)),

    wColor: ([r0, g0, b0], [r1, g1, b1], w0, w1 = 1 - w0) =>
        [Math.round(r0 * w0 + r1 * w1),
        Math.round(g0 * w0 + g1 * w1),
        Math.round(b0 * w0 + b1 * w1)],

    addCasesFunctions(c) {

        c.sum =
            i => c[i] ?
                (c[i][1] + c[i][2] + c[i][3]) : null;

        c.closed = i => c[i] && c[i][2] ?
            (c[i][2] + c[i][3]) : null;

        c.sumN = (i, start = 0, end = 0) => {
            if (!c.sum(i)) return;
            let s = 0;
            for (let j = i + start; j < i + end; j++) s += c.sum(i + j);
            return s / n;
        }

        c.drate = (x, i = c.l) => ((c.sum(i) / c.sum(i - x)) ** (1 / x) * 100 - 100).toFixed(2);

        c.dratedouble = (x, i = c.l) => Math.log(2) / Math.log(
            (c.sum(i) / c.sum(i - x)) ** (1 / x)
        );

        c.dratediff = (i = c.l, x = 7, d = 1) =>
            (c.dratedouble(x, i) / c.dratedouble(x, i - d));

        c.new = (i, days = 1) => (c.sum(i) ? c.sum(i) - c.sum(i - days) : null);

        c.newclosed = (i, days = 1) => (c.closed(i) ? c.closed(i) - c.closed(i - days) : null);

        c.newDeath = (i, days = 1) => (c[i][3] ? (c[i][3] - (c[i - days] || [, , , 0])[3]) : null);

        c.newRatio = (i, days = 1) => (c.sum(i) ?
            ((c.sum(i) / c.sum(i - days)) ** (1 / days)) - 1
            : null);

        c.newofnew = (i, days = 1) => (c.sum(i) ? c.new(i) - c.new(i - days) : null);

        c.l = c.length - 1;

        c.df = n => (n >= 1e6 ? (n / 1e6).toFixed(2) + "M" : n >= 1e4 ? (n / 1e3).toFixed(n > 1e5 ? 0 : 1) + "K" : n);

        c.R0B = (i, d = 1, l = 5) => c.df(Math.floor((c.new(c.l - i, l) - c.new(c.l, i) - 1) / d));


        c.last = c[c.l];

        c.fnew = (l = c.l, r = 0.9) => {

            let sum = 0, sumR = 0;

            for (let i = l; i >= 0; i--) {
                let w = r ** (l - i)
                sum += c.new(i) * w;
                sumR += w;
            };

            return sum / sumR;

        }

        c.days2doubleC = (l) => {
            let d;
            for (let i = l; i >= 0; i--) {
                if (c.sum(l) / 2 == c.sum(i)) { d = l - i; }
                if (c.sum(l) / 2 < c.sum(i)) { d = l - i + 1; }
            }
            return d;
        }


        c.days2double = c.days2doubleC(c.l);

        c.days2doubleDeath = (l = c.l) => {
            let d;
            for (let i = l; i >= 0; i--) {
                if (c[l][3] / 2 == c[i][3]) { d = l - i; }
                if (c[l][3] / 2 < c[i][3]) { d = l - i + 1; }
            }
            return d;
        }

        c.days2doubleRec = (l = c.l) => {
            let d;
            for (let i = l; i >= 0; i--) {
                if (c[l][2] / 2 == c[i][2]) { d = l - i; }
                if (c[l][2] / 2 < c[i][2]) { d = l - i + 1; }
            }
            return d;
        }

        c.lagC = (l) => {
            let lag;
            for (let i = l; i > 0; i--) {
                if (c.sum(i) == c.closed(l)) lag = l - i;
                if (c.sum(i) > c.closed(l)) lag = l - i + 1;
            }
            return lag;
        }

        c.lag = c.lagC(c.l);

        c.la = [];

        for (let i = 0; i < c.l; i++) {
            if (c.new(c.l, i) < c.new(c.l - i, i)) c.la.push(i);
        }

        c.R0 = (i, l = $.incubation, inc = $.incubation) =>
            ((c.new(i, l) / c.new(i - l, l)) ** (1 / l)) ** inc;

        c.RA = (arr, i, l = 5) => {
            let sum = 0;
            for (let j = 0; j < l; j++) sum += (arr[i - j] || 0);
            return sum / l;
        };

        c.daysmaller = (i, n = 14) => {
            let ds = 0;
            for (let j = i - 1; j >= (i - n); j--) {
                if (c.new(i) <= c.new(j)) ds++;
            }
            return ds;
        }

        // c.nday_arr = [];

        // for (let i = 1, j = c.max_nday_len = 0; i <= 28; i++) {
        //     for (j = c.l; j > 0 && c.R0(j, i, i) < 1; j--);

        //     c.nday_arr[i] = c.l - j;

        //     if (c.l - j >= c.max_nday_len) [c.max_nday, c.max_nday_len] = [i, c.l - j];
        // }


        c.get_nday_arr = (l = c.l) => {
            let arr = [0];
            for (let i = 1, j = 0; i <= 28; i++) {
                for (j = l; j > 0 && c.R0(j, i, i) < 1; j--);
                arr[i] = l - j;
            }
            return arr;
        }

        c.nday_arr = c.get_nday_arr();

        c.max_nday_len = Math.max(...c.nday_arr);

        c.max_nday = c.nday_arr.lastIndexOf(c.max_nday_len)

        return c;

    }




}


window.$ = $;

export default $;