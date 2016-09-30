
'use strict';

var _ = require("lodash");

// getting started

// var worker = function(collection) {
//     return _.filter(collection, {active: true})
// };
//
// // export the worker function as a nodejs module
// module.exports = worker;


// sort me

// var sorting = function (collection) {
//     return _.sortBy(collection, function (item) {
//         return -item.quantity;
//     });
//
//     /* Also possible:
//      return _.sortBy(collection,"quantity").reverse();
//      */
// };
//
// module.exports = sorting;

// in every case

// var everyCase = function(collection) {
//   return _.forEach(collection, function(city) {
//     if (city.population > 1) {
//       city.size = 'big';
//     } else if (city.population > 0.5) {
//       city.size = 'med';
//     } else {
//       city.size = 'small';
//     }
//   })
//
// }
//
// module.exports = everyCase

// everyone is min

// var tempsort = function (item) {
//     var result = {
//         hot: [],
//         warm: []
//     };
//
//     function check_temp (item) {
//         return item > 19;
//     }
//
//     _.forEach(item, function (town, townname) {
//
//         if (_.every(town, check_temp)) {
//             result.hot.push(townname);
//         } else if (_.some(town, check_temp)) {
//             result.warm.push(townname);
//         }
//
//     });
//
//     return result;
// };
//
// module.exports = tempsort;

// chain mail

// var wordsmodify = function (arr) {
//     return _.chain(arr)
//       .map(function (item) {
//         return item + 'Chained';
//       })
//       .map(function (item) {
//         return item.toUpperCase();
//       })
//       .sortBy()
//       .value();
// };
//
// module.exports = wordsmodify;

// count the comments


// var commentcount = function(comments) {
//     return _.chain(comments)
//     .groupBy("username")
//     .map(function(item, name) {
//         return {username: name, comment_count: _.size(item)};
//     })
//     .sortBy(function(counted) {
//         return -counted["comment_count"];
//     });
// };
//
//
// module.exports = commentcount;

// give me an overview

// var overview = function (orders) {
//
//     var overviewarray = [],
//         total = 0;

    // Group by article
//     orders = _.groupBy(orders, 'article');
//
//     _.forEach(orders, function (item, key) {
//
//         key = parseInt(key);
//         total = 0;
//
//         // If only one article
//         if (item.length === 1) {
//             total = item[0].quantity;
//
//         // Else make sum of all orders
//         } else {
//             total = _.reduce(item, function(sum, item) {
//                 return sum + item.quantity;
//             }, 0);
//         }
//
//         overviewarray.push({
//             article: key,
//             total_orders: total
//         });
//
//     });
//
//     // Order
//     overviewarray = _.sortBy(overviewarray, "total_orders").reverse();
//
//     return overviewarray;
// };
//
// module.exports = overview;

// analyze


// var analyze = function (item) {
//
//     var average,
//         underperform,
//         overperform;
//
//     // Sort
//     item = _.sortBy(item, "income");
//
//     // Sum of all incomes
//     average = _.reduce(item, function(sum, num) {
//         return sum + num.income;
//     }, 0);
//
//     // calculate average
//     average = average / item.length;
//
//     // filter underperformer
//     underperform = _.filter(item, function (num) {
//         return num.income <= average;
//     });
//
//     // filter overperformer
//     overperform = _.filter(item, function (num) {
//         return num.income > average;
//     });
//
//     return {
//         average: average,
//         underperform: underperform,
//         overperform: overperform
//     };
//
// };
//
// module.exports = analyze;

// template

var template = function (inputvar) {

    var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate)(inputvar);
};

module.exports = template;
