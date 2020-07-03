
let cases = [
    //Feb 24-28
    [2, 0, 0], [23, 0, 0], [33, 0, 0], [33, 0, 0], [38, 0, 0],
    //Feb 29-Mar 04
    [41, 0, 0], [47, 0, 0], [49, 0, 0], [49, 0, 0], [51, 1, 0],
    //Mar 05-09
    [48, 4, 0], [38, 14, 0], [71, 14, 0], [71, 14, 0], [87, 22, 0],
    //Mar 10-15
    [159, 30, 0], [154, 35, 0], [162, 35, 0], [166, 44, 0], [154, 60, 0],
    //Mar 16-20
    [137, 77, 0], [147, 81, 1], [153, 88, 1], [160, 95, 1], [168, 110, 1],
    //Mar 20-24
    [172, 125, 1], [184, 125, 1], [183, 149, 2], [211, 164, 2], [212, 177, 3],
    //Mar 25-29
    [225, 190, 4], [244, 210, 4], [227, 235, 4], [207, 265, 4], [224, 272, 4],
    //Mar 30-Apr 3 
    [216, 295, 4], [247, 316, 4], [228, 337, 4], [258, 381, 4], [281, 388, 4],
    //Apr 4-8
    [261, 423, 4], [265, 431, 4], [294, 458, 4], [341, 465, 5], [341, 477, 5],
    //Apr 9-13
    [363, 519, 5], [380, 539, 6], [479, 555, 6], [572, 558, 6], [764, 591, 6],
    //Apr 14-18
    [873, 648, 7], [1003, 663, 7], [990, 703, 7], [1011, 726, 7], [1011, 755, 7],
    //Apr 19-23
    [1112, 762, 7], [1127, 773, 7], [1182, 784, 7], [994, 1026, 7], [1127, 1082, 8],
    //Apr 24-28
    [1397, 1113, 8], [1421, 1160, 8], [1450, 1189, 8], [1497, 1218, 8], [1493, 1310, 8],
    //Apr 29-May 3
    [1458, 1455, 8], [1532, 1500, 8], [1607, 1555, 8], [1708, 1568, 8], [1657, 1718, 8],
    //May 4-8
    [1781, 1744, 8], [1950, 1762, 8], [2066, 1860, 8], [2191, 2000, 8], [2408, 2028, 8],
    //May 9-13
    [2711, 2055, 8], [2863, 2070, 8], [3076, 2152, 8], [3330, 2192, 9], [3601, 2205, 10],
    //May 14-18
    [3835, 2353, 10], [3932, 2640, 11], [3973, 2762, 12], [4034, 2910, 12], [4241, 2931, 12],
    //May 19-23
    [4556, 2964, 12], [4308, 3568, 12], [4289, 3873, 12], [4306, 4096, 12], [4324, 4465, 13],
    //May 24-28
    [4538, 4587, 13], [4404, 4753, 14], [4414, 4938, 14], [4525, 5152, 15], [4618, 5419, 15],
    //May 29-JUN 2
    [4734, 5700, 15], [4950, 5826, 17], [4696, 6683, 19], [4776, 7076, 19], [4885, 7407, 19],
    //JUN 3-6
    [5385, 7410, 20], [5547, 7728, 21], [5228, 8585, 22], [5303, 9056, 24],
    //JUN 7-9
    /*[5269, 9468, 26],[5064, 10326, 27], [5096, 10606, 29],*/
    //Corrected JUN 7-8
    [5269 + 218, 9468, 26], [5064 + 314, 10326, 27],
    //JUN 9-13
    [5062, 11109, 29], [5148, 11487, 32], [5330, 11903, 36], [5486, 12191, 36], [5370, 12818, 39],
    //JUN 14
    [5304, 13197, 43, 18, 140, 425192],
    //JUN 15
    [5700, 13267, 46, 20, 135, 432409],
    //JUN 16
    [5640, 13866, 47, 27, 133, 438080],
    //JUN 17
    [5727, 14185, 49, 27, 131, 445669],
    //JUN 18
    [5679, 14696, 55, 29, 173, 454368],
    //JUN 19
    [5572, 15287, 57, 36, 174, 462627],
    //JUN 20
    [5481, 15790, 60, 33, 181, 470409],
    //JUN 21
    [5282, 16419, 63, 32, 169, 477788],
    //JUN 22
    [5480, 16862, 65, 37, 148, 485715],
    //JUN 23
    [5545, 17450, 67, 36, 117, 494028],
    //JUN 24
    [5525, 17977, 68, 38, 162, 502763],
    //JUN 25
    [5509, 18501, 71, 38, 136, 511458],
    //JUN 26
    [5595, 19137, 73, 48, 94, 521101],
    //JUN 27
    [5408, 19781, 78, 42, 78, 529242],
    //JUN 28
    [5105, 20517, 83, 41, 74, 536516],
    //JUN 29
    [5227, 20928, 84, 42, 79, 545125],
    //JUN 30
    [5340, 21331, 87, 50, 86, 554239],
    //JUL 01
    [5374, 21948, 92, 52, 84, 564365],
    //JUL 02
    [5160, 22583, 94, 51, 82, 574105],
    //JUL 03
    [4997, 23318, 95, 48, 58, 584070]



]

let ArrMul = (v, n = 0) =>
    Array.isArray(v) ? v : new Array(n).fill()
        .map((x, i) => v);


cases.day0 = new Date(`2020-02-24`);
cases.info = { acticap2: 8511, pred_min: 394, pred_max: 619 };



ArrMul(500, 0).forEach((n) => {
    let [a, ...r] = cases[cases.length - 1];
    cases.push([a + n, ...r]);
});




export default cases;