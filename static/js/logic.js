var players = 
["Aaron Gordon",
"Al-Farouq Aminu",
"Al Horford",
"Alec Burks",
"Alex Len",
"Allen Crabbe",
"Andre Drummond",
"Andre Iguodala",
"Andrew Harrison",
"Andrew Wiggins",
"Anthony Davis",
"Anthony Tolliver",
"Aron Baynes",
"Austin Rivers",
"Avery Bradley",
"Bam Adebayo",
"Ben Simmons",
"Bismack Biyombo",
"Blake Griffin",
"Bobby Portis",
"Bogdan Bogdanovic",
"Bojan Bogdanovic",
"Bradley Beal",
"Brandon Ingram",
"Brook Lopez",
"Bryn Forbes",
"Buddy Hield",
"CJ McCollum",
"CJ Miles",
"Caris LeVert",
"Carmelo Anthony",
"Chris Paul",
"Clint Capela",
"Cory Joseph",
"Courtney Lee",
"D'Angelo Russell",
"D.J. Augustin",
"Damian Lillard",
"Danny Green",
"Dario Saric",
"Darius Miller",
"Darren Collison",
"David Nwaba",
"David West",
"De'Aaron Fox",
"DeAndre Jordan",
"DeMar DeRozan",
"DeMarcus Cousins",
"DeMarre Carroll",
"Dejounte Murray",
"Delon Wright",
"Dennis Schroder",
"Dennis Smith Jr.",
"Denzel Valentine",
"Derrick Favors",
"Devin Booker",
"Devin Harris",
"Dewayne Dedmon",
"Dillon Brooks",
"Dirk Nowitzki",
"Domantas Sabonis",
"Donovan Mitchell",
"Doug McDermott",
"Dragan Bender",
"Draymond Green",
"Dwight Howard",
"Dwight Powell",
"Dwyane Wade",
"E'Twaun Moore",
"Elfrid Payton",
"Emmanuel Mudiay",
"Enes Kanter",
"Eric Bledsoe",
"Eric Gordon",
"Ersan Ilyasova",
"Evan Fournier",
"Evan Turner",
"Frank Kaminsky",
"Frank Ntilikina",
"Fred VanVleet",
"Garrett Temple",
"Gary Harris",
"George Hill",
"Gerald Green",
"Giannis Antetokounmpo",
"Goran Dragic",
"Gorgui Dieng",
"Greg Monroe",
"Harrison Barnes",
"Hassan Whiteside",
"Ian Clark",
"Isaiah Taylor",
"Isaiah Thomas",
"Ish Smith",
"J.J. Barea",
"JJ Redick",
"JR Smith",
"JaMychal Green",
"Jae Crowder",
"Jakob Poeltl",
"Jamal Crawford",
"Jamal Murray",
"James Ennis III",
"James Harden",
"James Johnson",
"Jarell Martin",
"Jarrett Allen",
"Jarrett Jack",
"Jaylen Brown",
"Jayson Tatum",
"Jeff Green",
"Jeff Teague",
"Jerami Grant",
"Jeremy Lamb",
"Jerian Grant",
"Jimmy Butler",
"Jodie Meeks",
"Joe Harris",
"Joe Ingles",
"Joel Embiid",
"John Collins",
"John Henson",
"John Wall",
"Jonas Valanciunas",
"Jonathon Simmons",
"Jordan Clarkson",
"Josh Jackson",
"Josh Richardson",
"Jrue Holiday",
"Julius Randle",
"Justin Holiday",
"Justise Winslow",
"Jusuf Nurkic",
"Karl-Anthony Towns",
"Kelly Olynyk",
"Kelly Oubre Jr.",
"Kemba Walker",
"Kent Bazemore",
"Kentavious Caldwell-Pope",
"Kevin Durant",
"Kevin Love",
"Khris Middleton",
"Klay Thompson",
"Kris Dunn",
"Kristaps Porzingis",
"Kyle Anderson",
"Kyle Korver",
"Kyle Kuzma",
"Kyle Lowry",
"Kyle O'Quinn",
"Kyrie Irving",
"LaMarcus Aldridge",
"Lance Stephenson",
"Larry Nance Jr.",
"Lauri Markkanen",
"LeBron James",
"Lonzo Ball",
"Lou Williams",
"Luke Kennard",
"Malcolm Brogdon",
"Manu Ginobili",
"Marc Gasol",
"Marcin Gortat",
"Marco Belinelli",
"Marcus Morris",
"Marcus Smart",
"Mario Chalmers",
"Mario Hezonja",
"Markieff Morris",
"Marquese Chriss",
"Marvin Williams",
"Mason Plumlee",
"Michael Beasley",
"Michael Kidd-Gilchrist",
"Mike Scott",
"Montrezl Harrell",
"Myles Turner",
"Nick Young",
"Nicolas Batum",
"Nikola Jokic",
"Nikola Mirotic",
"Nikola Vucevic",
"Otto Porter Jr.",
"PJ Tucker",
"Pascal Siakam",
"Patty Mills",
"Pau Gasol",
"Paul George",
"Paul Millsap",
"Rajon Rondo",
"Raymond Felton",
"Reggie Bullock",
"Reggie Jackson",
"Ricky Rubio",
"Robert Covington",
"Robin Lopez",
"Rodney Hood",
"Rondae Hollis-Jefferson",
"Rudy Gay",
"Rudy Gobert",
"Russell Westbrook",
"Ryan Anderson",
"Serge Ibaka",
"Shabazz Napier",
"Shaun Livingston",
"Shelvin Mack",
"Skal Labissiere",
"Spencer Dinwiddie",
"Stanley Johnson",
"Stephen Curry",
"Steven Adams",
"T.J. McConnell",
"TJ Warren",
"Taj Gibson",
"Taurean Prince",
"Terry Rozier",
"Thaddeus Young",
"Tim Hardaway Jr.",
"Tobias Harris",
"Tony Parker",
"Trevor Ariza",
"Trey Lyles",
"Troy Daniels",
"Tyler Johnson",
"Tyler Ulis",
"Tyreke Evans",
"Victor Oladipo",
"Wayne Ellington",
"Wesley Matthews",
"Will Barton",
"Willie Cauley-Stein",
"Wilson Chandler",
"Yogi Ferrell",
"Zach Randolph"]



//#################  mouse click #################
var theThing = document.querySelector("#bball");
var container = document.querySelector("#contentContainer");

container.addEventListener("click", getClickPosition, false);
 
function getClickPosition(e) {
    var parentPosition = getPosition(e.currentTarget);
    var xPosition = e.clientX - parentPosition.x - (theThing.clientWidth / 2);
    var yPosition = e.clientY - parentPosition.y - (theThing.clientHeight / 2);
     
    theThing.style.left = xPosition + "px";
    theThing.style.top = yPosition + "px";

var playerName = d3.select("#myInput").node().value;
url = ("/models/" + playerName +"/"+ yPosition/10+1 +"/"+ xPosition/10+1)
console.log(url)
d3.json(url).then(function(data){
  console.log(data);

    var [shotResult] = data;
    if (shotResult === 1) {
      console.log("green")  
      d3.select("#svg-area")
      .select("g")
      .select("rect")
      .attr("width", "646")
      .attr("height", "40")
      .attr("fill", "green");
      // block of code to be executed if the condition is true <rect width="646" height="40" fill="green" />
    } 
    else { 
      console.log("red")
      d3.select("#svg-area")
      .select("g")
      .select("rect")
      .attr("width", "646")
      .attr("height", "40")
      .attr("fill", "red");
      // block of code to be executed if the condition is false
    }
    });




    //###### Logs Location #######
var location = console.log("X",xPosition/10+1, "Y",yPosition/10+1)
  }

// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
    
   }
  return {
    x: xPos,
    y: yPos
  };

}


//########## Dropdown Auto-complete##############
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }