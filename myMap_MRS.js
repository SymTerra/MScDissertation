//----------------------------------------------------------------------------//
//------------------------------------------------------/
// Original Code Structure: Dr Ioannis Kypraios         /
// Modified by: Preethi Leelavathy                      /
//Project: Smart Music Recommendation System            /
//Description: Development Platform                     /
//             for PDF Report                           /
//Date: September-2nd 2022                              /
//------------------------------------------------------/
let map;
//----------------------------------------------------------------------------//

// Setting up the map. The mapID is custom design for our reports
function initMap() {

  //site markers
  var site;
  var point1;
  var point2;

  //greenMarker
  var greenMarker;
  var greenPoint1;
  var greenPoint2;

  //redMarker
  var redMarker;
  var redPoint1;
  var redPoint2;

  //amberMarker
  var amberMarker;
  var amberPoint1;
  var amberPoint2;

  //blueMarker
  var blueMarker;
  var bluePoint1;
  var bluePoint2;
;

//----------------------------------------------------------------------------//

  //docRef2 contains the marker points for Green, Red, Amber pins
  //& for the polygon area of the company site
  docRef2.get().then(function (doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      site =myData.site;
      console.log(site)

      //site coordinates
      point1 = site.lat;
      point2 = site.lng;

      //green marker
      greenMarker = myData.GreenMarker;
      greenPoint1 = greenMarker.lat;
      greenPoint2 = greenMarker.lng;

      //debugging statement
      console.log("Reading Site Coordinates from Firestore " + point1 +", "+ point2);

      //red marker
      redMarker = myData.RedMarker;
      redPoint1 = redMarker.lat;
      redPoint2 = redMarker.lng;

      //amber marker
      amberMarker = myData.AmberMarker;
      amberPoint1 = amberMarker.lat;
      amberPoint2 = amberMarker.lng;

      //blue marker
      blueMarker = myData.BlueMarker;
      bluePoint1 = blueMarker.lat;
      bluePoint2 = blueMarker.lng;

    }

//----------------------------------------------------------------------------//

    //debugging statement
    //console.log(point1)

    //setup the map
    map = new google.maps.Map(document.getElementById("map1"), {
      zoom: 15,
      center: {lat: point1, lng: point2},
      disableDefaultUI: true,
      mapId: '13d3c2ff8f19451f'
    });
//----------------------------------------------------------------------------//

    // Full database of custom marker types:
    // http://kml4earth.appspot.com/icons.html
    var iconBase ="https://maps.google.com/mapfiles/kml/";
    var icons = {
      red: {icon: iconBase + "paddle/red-stars.png",},
      amber: {icon: iconBase + "paddle/ylw-stars.png",},
      green: {icon: iconBase + "paddle/grn-stars.png",},
      blue: {icon: iconBase + "paddle/blu-stars.png",}
    };

    // setting the Red Marker
    var marker = new google.maps.Marker({
      position: {lat: redPoint1, lng: redPoint2},
      map: map,
      title: "red",
      icon: icons.red.icon,
      });

    // setting the Green Marker
    var marker = new google.maps.Marker({
      position: {lat: greenPoint1, lng: greenPoint2},
      map: map,
      title: "Green",
      icon: icons.green.icon,
      map: map
      });

    // setting the Amber Marker
    var marker = new google.maps.Marker({
      position: {lat: amberPoint1, lng: amberPoint2},
      icon: icons.amber.icon,
      title: "amber",
      map: map
      });

      // setting the Blue Marker
      var marker = new google.maps.Marker({
        position: {lat: bluePoint1, lng: bluePoint2},
        icon: icons.blue.icon,
        title: "blue",
        map: map
        });


// ---------------------------------------------------------------------------//

// ---------------------------------------------------------------------------//
  })//end docRef2
}//end initMap
//----------------------------------------------------------------------------//
