<script>
  import { onMount } from 'svelte';
  import { getDatabase, ref, child, get } from "firebase/database";
  import { initializeApp } from "firebase/app";


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
    const centerUS = { lat: 43.0902, lng: -94.7129 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: centerUS,
    });

    let trueData;
    let x = getColleges().then((data) => {
      if (data.exists()) {
        console.log(data.val());
        trueData = data.val();
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
  });

</script>
  
  <style>
      #map {
      height: 100vh;
      width: 100vw;
      }
  </style>

<div id="map"></div>
<button on:click={initMap}>Show Map </button>
<h1>hey this works</h1>