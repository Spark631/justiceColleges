<script>
  import { onMount } from 'svelte';
  import { getDatabase, ref, child, get } from "firebase/database";
  import { initializeApp } from "firebase/app";
  import { compute_rest_props } from 'svelte/internal';
  import {styleMaps} from '../styleMaps';

  const firebaseConfig = {
    apiKey: "AIzaSyAudXEwwxQfoVNDhDdJYBFXjr4tjxZiIWI",
    authDomain: "justice-college.firebaseapp.com",
    databaseURL: "https://justice-college-default-rtdb.firebaseio.com",
    projectId: "justice-college",
    storageBucket: "justice-college.appspot.com",
    messagingSenderId: "384708680296",
    appId: "1:384708680296:web:9c213e18337580983179dd",
    databaseURL: "https://justice-college-default-rtdb.firebaseio.com/",
  };

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  let map;

  function initMap() {
    const dbRef = ref(getDatabase());
    const centerUS = { lat: 39.67337, lng: -95.524566};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: centerUS,
        streetViewControl: false,
        mapTypeControl: false,
        // mapId: 'ID610d4d4488e84169',
        styles: styleMaps

    });

    let markers = [];

    getColleges().then((data) => {
      if (data.exists()) {
        console.log(data.val());

        const x = data.val();

        for (const college in x) {
          console.log(`${college}: ${x[college].Location.Lat}, ${x[college].Location.Lng}`);
          
          const marker = new google.maps.Marker({
            position: { lat: x[college].Location.Lat, lng: x[college].Location.Lng },
            map: map,
            title: `${college}`,
            icon: "https://ik.imagekit.io/twkicasuw/Pics/GradBig.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675658089618"
          });
        }

      } else {
        console.log("No data available");
      }
    })

    }
    

  function getColleges() {
    const dbRef = ref(getDatabase());
    const collegeRef = child(dbRef, 'Colleges');
    return get(collegeRef)
  }

  onMount(async () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8g5g4017HkLoY-2B9x1DIQd4iFXdGJIE&callback=initMap`;
    document.body.appendChild(script);
    await new Promise((resolve) => {
    let intervalId = setInterval(() => {
      if (typeof google !== 'undefined') {
        clearInterval(intervalId);
        resolve();
      }
    }, 100);
  });

    initMap();
  });

</script>
  
  <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      #map {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        height:100%;
      }
  </style>

<div id="map"></div>
