/**
 * Created by AAravindan on 5/3/16.
 */
// var renko = require('../../lib/chart_types/Renko').renko;
var renko = require('../../dist/index').renko;
var assert = require('assert');
var data = { "close": [0.08099359, 0.08249997, 0.08375944, 0.08265, 0.08257601, 0.08185048, 0.081875, 0.0814, 0.08206313, 0.08237554, 0.08228, 0.08252799, 0.08200003, 0.0818, 0.08190021, 0.0818, 0.08178776, 0.0815, 0.08170006, 0.08194, 0.08176177, 0.08200007, 0.08220989, 0.0819413, 0.081744, 0.08181004, 0.08235, 0.082, 0.08266197, 0.08190536, 0.08205642, 0.08250018, 0.0825, 0.08291223, 0.08235927, 0.0825, 0.08231915, 0.08245641, 0.08230011, 0.08269996, 0.0825, 0.08284069, 0.08281361, 0.0828, 0.08294917, 0.08345978, 0.08349999, 0.08335549, 0.08320776, 0.08374852, 0.08391653, 0.082852, 0.08309751, 0.0833, 0.08344999, 0.0829, 0.08284161, 0.08327523, 0.08284161, 0.08307577, 0.08314206, 0.08299998, 0.08210986, 0.08218993, 0.08279002, 0.0829998, 0.0826761, 0.08277, 0.08258964, 0.0827215, 0.08245774, 0.08232142, 0.08219, 0.08242144, 0.08242123, 0.08242123, 0.08200918, 0.08210004, 0.082, 0.082, 0.08200001, 0.08222, 0.08196199, 0.08233845, 0.082127, 0.0821, 0.08208251, 0.08203, 0.08193041, 0.08199735, 0.08222853, 0.08236529, 0.08200539, 0.08196334, 0.082, 0.0817783, 0.08200292, 0.081536, 0.08199997, 0.08199999, 0.08175, 0.08151002, 0.08128116, 0.0813, 0.08141209, 0.0812, 0.0814, 0.08135, 0.08128817, 0.08118002, 0.08101, 0.08116935, 0.0806, 0.08081181, 0.0815698, 0.08100001, 0.08070881, 0.0794198, 0.07972, 0.08000022, 0.0801, 0.07989775, 0.08104112, 0.07980354, 0.07932534, 0.079789, 0.08025398, 0.07991237, 0.08017894, 0.08038985, 0.0804123, 0.0803, 0.08057547, 0.0805, 0.08039999, 0.08, 0.08040041, 0.08030036, 0.08, 0.08, 0.08013476, 0.08, 0.0803, 0.078, 0.0776843, 0.0784, 0.07821, 0.07839989, 0.07900003, 0.0795, 0.07974198, 0.08013458, 0.0798771, 0.07994005, 0.08, 0.07949749, 0.07928094, 0.0792202, 0.07929997, 0.07993136, 0.07945756, 0.07848047, 0.07881003, 0.07900109, 0.07935699, 0.079379, 0.08000145, 0.08019319, 0.079823, 0.07982159, 0.08021171, 0.08006, 0.08056517, 0.080555, 0.081, 0.08058912, 0.0805, 0.08048139, 0.08048139, 0.08055969, 0.07988281, 0.07990026, 0.08055998, 0.08014437, 0.08019], "high": [0.081, 0.08296429, 0.0838, 0.08385043, 0.08292382, 0.08273745, 0.08234938, 0.08234919, 0.08222222, 0.08266665, 0.0828, 0.08269998, 0.08252799, 0.08233005, 0.08241875, 0.08241876, 0.08200338, 0.0819952, 0.08241491, 0.08209999, 0.08214998, 0.08219999, 0.08229999, 0.08237996, 0.08212189, 0.08226764, 0.08241583, 0.0829974, 0.08266197, 0.083, 0.08298966, 0.08322042, 0.0829998, 0.08291227, 0.08291223, 0.0825113, 0.0825113, 0.08269788, 0.082599, 0.0827, 0.08271355, 0.08287713, 0.08299, 0.08309507, 0.0830951, 0.08345978, 0.0836, 0.08349999, 0.08338998, 0.08375, 0.08399999, 0.08397489, 0.08329939, 0.08344999, 0.08344999, 0.08349904, 0.08329, 0.08329, 0.08334372, 0.08328635, 0.0834, 0.08349903, 0.08323875, 0.08234994, 0.083, 0.083, 0.08309999, 0.08305835, 0.083045, 0.08291006, 0.08291117, 0.08283997, 0.08232144, 0.08242144, 0.08284995, 0.08268749, 0.08254855, 0.08225665, 0.08225665, 0.0826, 0.08234786, 0.0824, 0.0823, 0.0824, 0.0824, 0.08249648, 0.08249525, 0.08244227, 0.08244227, 0.0823585, 0.08235854, 0.082496, 0.08293048, 0.08239992, 0.08209999, 0.08235129, 0.08200847, 0.082089, 0.08200099, 0.082, 0.08199999, 0.0819999, 0.08199999, 0.0813, 0.0815441, 0.08199999, 0.08190104, 0.0818, 0.0818, 0.08156967, 0.0815698, 0.08116937, 0.08116936, 0.08114994, 0.0815698, 0.08171907, 0.08127766, 0.08079999, 0.08030975, 0.081, 0.08050683, 0.08014988, 0.08104112, 0.0812, 0.0800004, 0.07999048, 0.08083898, 0.08069997, 0.081, 0.081, 0.081, 0.08079805, 0.08079802, 0.08068147, 0.08075599, 0.08049999, 0.0806, 0.08082917, 0.08038036, 0.08031036, 0.08041036, 0.08036901, 0.08036898, 0.0803, 0.0792, 0.07876002, 0.07868, 0.0785, 0.07929999, 0.08089988, 0.08048457, 0.08061, 0.0803943, 0.0808, 0.08035053, 0.08011004, 0.0796, 0.079588, 0.079588, 0.0802575, 0.07999998, 0.07999999, 0.07961228, 0.07950043, 0.0793576, 0.0797, 0.08000145, 0.08084602, 0.08019319, 0.08019313, 0.08027959, 0.08056564, 0.08056565, 0.08059989, 0.081, 0.08103424, 0.08102475, 0.08061445, 0.08075333, 0.08068677, 0.08055969, 0.08023, 0.08055998, 0.0808, 0.08041597], "low": [0.08042753, 0.0809558, 0.08197926, 0.08259678, 0.082, 0.08185043, 0.0816, 0.08072626, 0.08122092, 0.0819635, 0.082, 0.08180001, 0.08183151, 0.0818, 0.08179999, 0.08164137, 0.08123003, 0.0806638, 0.08150001, 0.0813, 0.08140004, 0.08167999, 0.0813001, 0.08177783, 0.08154048, 0.08168938, 0.08181, 0.08190007, 0.08181602, 0.0818, 0.08182, 0.08198673, 0.08205642, 0.08220135, 0.08182, 0.08190324, 0.08224815, 0.08228444, 0.0823, 0.08230011, 0.0823001, 0.0823, 0.08237336, 0.08240102, 0.082401, 0.08294917, 0.08298349, 0.08267687, 0.08280057, 0.0831, 0.08298054, 0.08274618, 0.082822, 0.08271595, 0.08329, 0.08277205, 0.08277768, 0.08284161, 0.08284161, 0.08284161, 0.08303864, 0.08245815, 0.08210986, 0.08165223, 0.08205001, 0.0826005, 0.0824, 0.082501, 0.08258964, 0.08220003, 0.08220004, 0.0823214, 0.0820155, 0.0820155, 0.0822429, 0.0824212, 0.08200916, 0.08195001, 0.08162001, 0.08164815, 0.08181299, 0.0818889, 0.08166, 0.08170911, 0.08170009, 0.08193028, 0.08193028, 0.08193028, 0.08193028, 0.08193028, 0.08194701, 0.082148, 0.08193028, 0.08170028, 0.08161954, 0.0817, 0.0817, 0.0815, 0.08134738, 0.08151014, 0.08163, 0.08134739, 0.0812, 0.08059, 0.0808422, 0.08118817, 0.0812, 0.08130002, 0.081, 0.0809, 0.08101, 0.08101, 0.08058, 0.0806, 0.08062104, 0.08086527, 0.08060102, 0.07924775, 0.079, 0.07961797, 0.0797, 0.0795, 0.0797, 0.07959775, 0.07922221, 0.07912001, 0.07952003, 0.07978568, 0.07986311, 0.080015, 0.08018, 0.0803, 0.08008949, 0.08014726, 0.08014726, 0.0798, 0.08, 0.08030036, 0.08, 0.08, 0.07980002, 0.07969999, 0.07959025, 0.07799999, 0.07741907, 0.0774, 0.07777018, 0.078, 0.07809809, 0.07900003, 0.07906656, 0.07959638, 0.07917127, 0.07984076, 0.07944975, 0.0786, 0.07870004, 0.07870021, 0.0789, 0.07902151, 0.07913, 0.0782, 0.07837983, 0.0788, 0.07870068, 0.07900001, 0.079, 0.07979509, 0.07940102, 0.07940101, 0.07981508, 0.07991018, 0.08, 0.08000006, 0.08040006, 0.08040004, 0.08040004, 0.0802766, 0.080386, 0.08, 0.07988281, 0.07973161, 0.07990035, 0.0800159, 0.08014442], "open": [0.081, 0.081, 0.08249997, 0.08375944, 0.08265, 0.08257601, 0.08229943, 0.081875, 0.08140001, 0.08206313, 0.08226129, 0.08228, 0.08252799, 0.08200003, 0.08180081, 0.08190021, 0.0818, 0.08178776, 0.08150001, 0.08170005, 0.08194, 0.08186098, 0.08200007, 0.08220989, 0.0819, 0.081744, 0.08226765, 0.08235, 0.082, 0.08259585, 0.08190536, 0.08205642, 0.08250018, 0.0825, 0.08291223, 0.08235927, 0.0825, 0.08231915, 0.08256041, 0.08230011, 0.08269996, 0.08230012, 0.08284069, 0.08286492, 0.0829, 0.08294917, 0.0834, 0.08349999, 0.08338996, 0.08320776, 0.08374852, 0.08397474, 0.08320716, 0.08309751, 0.0833, 0.08344999, 0.0831292, 0.08284161, 0.08327523, 0.08284161, 0.08307577, 0.08314206, 0.08299998, 0.08210986, 0.08205001, 0.08260051, 0.0828, 0.08300221, 0.08277, 0.08258964, 0.0827215, 0.08283997, 0.08232142, 0.08219, 0.08242144, 0.08242123, 0.08242122, 0.08224426, 0.08195001, 0.082, 0.082, 0.08234783, 0.0823, 0.08196199, 0.0823385, 0.08197909, 0.08200001, 0.08208251, 0.08203, 0.08193041, 0.08194701, 0.08222853, 0.08244999, 0.08200539, 0.08196334, 0.082, 0.08177438, 0.08200292, 0.081536, 0.08199997, 0.08199999, 0.0816515, 0.08151002, 0.08128498, 0.0813, 0.08141209, 0.0812, 0.0814, 0.081355, 0.08128817, 0.08118002, 0.08101, 0.08116935, 0.08065, 0.08081181, 0.0815698, 0.08100001, 0.08070881, 0.0794198, 0.07972, 0.08039994, 0.0801, 0.07989775, 0.08104122, 0.07980354, 0.07932536, 0.07978651, 0.07991124, 0.07991237, 0.08017894, 0.0802521, 0.0804123, 0.08079802, 0.08053094, 0.0805, 0.08039999, 0.08, 0.0805, 0.08030036, 0.08, 0.08, 0.08013476, 0.08015909, 0.0802, 0.0777, 0.07770003, 0.07840001, 0.07845479, 0.07839988, 0.07900003, 0.0795, 0.07974198, 0.08013458, 0.0798771, 0.08028894, 0.08, 0.07949749, 0.07928094, 0.07928, 0.07929997, 0.07985749, 0.07945756, 0.07848047, 0.07881003, 0.07901427, 0.07935699, 0.07937899, 0.08000145, 0.08, 0.079823, 0.07982159, 0.08021171, 0.08006899, 0.08056517, 0.080555, 0.081, 0.08040009, 0.0805, 0.08048139, 0.08048139, 0.08055969, 0.07988281, 0.08023, 0.08055998, 0.08025], "timestamp": [1500759000000, 1500760800000, 1500762600000, 1500764400000, 1500766200000, 1500768000000, 1500769800000, 1500771600000, 1500773400000, 1500775200000, 1500777000000, 1500778800000, 1500780600000, 1500782400000, 1500784200000, 1500786000000, 1500787800000, 1500789600000, 1500791400000, 1500793200000, 1500795000000, 1500796800000, 1500798600000, 1500800400000, 1500802200000, 1500804000000, 1500805800000, 1500807600000, 1500809400000, 1500811200000, 1500813000000, 1500814800000, 1500816600000, 1500818400000, 1500820200000, 1500822000000, 1500823800000, 1500825600000, 1500827400000, 1500829200000, 1500831000000, 1500832800000, 1500834600000, 1500836400000, 1500838200000, 1500840000000, 1500841800000, 1500843600000, 1500845400000, 1500847200000, 1500849000000, 1500850800000, 1500852600000, 1500854400000, 1500856200000, 1500858000000, 1500859800000, 1500861600000, 1500863400000, 1500865200000, 1500867000000, 1500868800000, 1500870600000, 1500872400000, 1500874200000, 1500876000000, 1500877800000, 1500879600000, 1500881400000, 1500883200000, 1500885000000, 1500886800000, 1500888600000, 1500890400000, 1500892200000, 1500894000000, 1500895800000, 1500897600000, 1500899400000, 1500901200000, 1500903000000, 1500904800000, 1500906600000, 1500908400000, 1500910200000, 1500912000000, 1500913800000, 1500915600000, 1500917400000, 1500919200000, 1500921000000, 1500922800000, 1500924600000, 1500926400000, 1500928200000, 1500930000000, 1500931800000, 1500933600000, 1500935400000, 1500937200000, 1500939000000, 1500940800000, 1500942600000, 1500944400000, 1500946200000, 1500948000000, 1500949800000, 1500951600000, 1500953400000, 1500955200000, 1500957000000, 1500958800000, 1500960600000, 1500962400000, 1500964200000, 1500966000000, 1500967800000, 1500969600000, 1500971400000, 1500973200000, 1500975000000, 1500976800000, 1500978600000, 1500980400000, 1500982200000, 1500984000000, 1500985800000, 1500987600000, 1500989400000, 1500991200000, 1500993000000, 1500994800000, 1500996600000, 1500998400000, 1501000200000, 1501002000000, 1501003800000, 1501005600000, 1501007400000, 1501009200000, 1501011000000, 1501012800000, 1501014600000, 1501016400000, 1501018200000, 1501020000000, 1501021800000, 1501023600000, 1501025400000, 1501027200000, 1501029000000, 1501030800000, 1501032600000, 1501034400000, 1501036200000, 1501038000000, 1501039800000, 1501041600000, 1501043400000, 1501045200000, 1501047000000, 1501048800000, 1501050600000, 1501052400000, 1501054200000, 1501056000000, 1501057800000, 1501059600000, 1501061400000, 1501063200000, 1501065000000, 1501066800000, 1501068600000, 1501070400000, 1501072200000, 1501074000000, 1501075800000, 1501077600000, 1501079400000, 1501081200000, 1501083000000, 1501084800000, 1501086600000, 1501088400000, 1501090200000], "volume": [309, 170, 221, 677, 251, 491, 750, 632, 1035, 844, 540, 351, 254, 239, 364, 125, 946, 620, 600, 669, 365, 395, 662, 1197, 1260, 696, 380, 540, 434, 1048, 324, 409, 389, 366, 700, 1280, 556, 1007, 778, 1830, 2475, 2146, 447, 498, 465, 1507, 723, 882, 328, 397, 520, 457, 655, 737, 636, 733, 1358, 1040, 1633, 880, 1465, 2016, 1602, 355, 227, 819, 1182, 1556, 931, 746, 886, 236, 465, 431, 370, 581, 594, 264, 252, 919, 481, 1194, 532, 331, 218, 679, 1536, 519, 224, 668, 573, 802, 1155, 407, 596, 585, 444, 904, 1108, 831, 1076, 863, 731, 457, 403, 880, 598, 448, 478, 674, 398, 666, 448, 355, 273, 346, 680, 642, 672, 947, 751, 1249, 1121, 1818, 321, 313, 742, 423, 105, 437, 711, 744, 273, 570, 736, 448, 611, 663, 857, 856, 314, 290, 300, 256, 292, 453, 262, 707, 583, 455, 627, 283, 442, 935, 1366, 1375, 552, 1009, 750, 602, 438, 762, 1174, 887, 885, 1361, 1588, 1383, 1759, 529, 725, 652, 500, 786, 489, 732, 737, 1535, 1712, 1435, 1554, 1154, 1864, 3187, 400], "ticker": "BITTREX:BTC-ETH" }

var expectedOutput = [];
var period = 14;

var result = renko(Object.assign({}, data, {brickSize : 0.001, useATR : false }));
// console.log(result);
// console.log(data.volume.length)
// console.log(data.timestamp.length)
// console.log(result.volume.length)
// console.log(result.timestamp.length)

// var result = renko(Object.assign({}, data, {period : 14 , useATR : true }));
// console.log(result);


// describe('Renko (Exponential Moving Average)', function () {
//     it('should calculate renko using the fixed bar', function () {
//         let result = renko(Object.assign({}, data, {brickSize : 0.1, useATR : false }));
//         console.log(result)
//         assert.deepEqual(result, expectedOutput, 'Wrong Results');
//     });

//     it('should be able to get Renko using atr', function () {
//         var result = renko(Object.assign({}, data, {period : 14 , useATR : true }));
//         assert.deepEqual(result, expectedOutput, 'Wrong Results while getting results');
//     });
// })