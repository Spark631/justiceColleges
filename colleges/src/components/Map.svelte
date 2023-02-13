<script>
  import { onMount } from 'svelte';
  let map;

  function initMap() {

//   // The location of Uluru
      const uluru = { lat: 37.7749, lng: -122.4194 };
      // The map, centered at Uluru
      const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: uluru,
      });
      // The marker, positioned at Uluru
      const marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: "https://ik.imagekit.io/twkicasuw/Pics/GradBig.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675658089618"
      });
      const marker1 = new google.maps.Marker({
          position: { lat: 40, lng: -150 },
          map: map,
          icon: "https://ik.imagekit.io/twkicasuw/Pics/GradBig.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675658089618"
      });
  }

  onMount(async () => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8g5g4017HkLoY-2B9x1DIQd4iFXdGJIE&callback=initMap`;
  //   script.src = `https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=12&size=400x400&maptype=satellite&key=AIzaSyA8g5g4017HkLoY-2B9x1DIQd4iFXdGJIE`;
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