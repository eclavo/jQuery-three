$(document).ready(function(){
    
    $(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  // ALL YOUR CODE BELOW HERE //
 var allGuardians = oldGuardians.concat(newGuardians);
 allGuardians = allGuardians.sort();
  console.log(allGuardians);
  
var createTable = function (guardians) {
      var createRow = function (guardian) {
          var $row = $("<tr>");
          var $name = $("<td>").text(guardian.name).css('border', '1px solid black' );
          var $notes = $("<td>").text(guardian.notes || "No Data Available").css('border', '1px solid black' );
          $row.append($name);
          $row.append($notes);
          return $row;
      };
      var $table = $("<table>");
      guardians.sort(function(a, b){
          if (a.name > b.name){
              return 1;
          } else if (a.name < b.name) {
              return -1
          } else {
              return 0;
          }
      });
      var $rows = guardians.map(createRow);
      $table
        .append($rows)
        .addClass(guardians);
      return $table;
  };
  
  $('body').append(createTable(allGuardians));
  var oldGs = $('body').append(createTable(oldGuardians));
  var newGs = $('body').append(createTable(newGuardians));
  
  var $btn = $('<button>')
    .text('push me')
    .prependTo('body')
    .on('click', function(e){
        $('table:eq(1), table:eq(2)').remove();
        $('body').append(createTable(allGuardians));
    });
  
  // ALL YOUR CODE ABOVE HERE //
});
});

//  function filterByName(name) {
//       return function(groot) {
//           return g.name === name;
//       }
// }

//   function names(arr, prop) {
//       return $.map(arr, function(value){
//           return value[prop];
//       });
//   }
//   console.log(names(allGuardians, 'name'));
//   var names = _.pluck(allGuardians, 'name');
//   console.log(names);
//   var firstName = $.map(allGuardians, function(guardian){
//       return guardian.name.split(' ')[0];
//   });
//   console.log(firstName);
//   var groot = _.filter(allGuardians, function(guardian){
//       return guardian.name === 'Groot';
//   });
//   console.log(groot);
  function merge(event) {
    ('div').html('<table border=1><tr><td id="cell1"></td><td id="cell2"></td></tr></table>');
$('#cell1').html($('.oldGs').clone());
$('#cell2').html($('.newGs').clone());
  }