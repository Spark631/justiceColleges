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
    
  get(child(dbRef, `Seniors/`)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const dataArray = snapshot.val();

      dataArray.forEach((element) => {
        console.log("this is the element" + element.First);
        console.log("this is their position" + element.Lat, element.Lng);
        const marker = new google.maps.Marker({
          position: { lat: element.Lat, lng: element.Lng },
          map: map,
          icon: "https://ik.imagekit.io/twkicasuw/Pics/GradBig.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675658089618"
      });
      });
      
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
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