/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

// coupon code

function loadCoupon(){
  document.getElementById('coupon').style.visibility = 'visible';
  document.getElementById('main').style.opacity = '0.9';
}

function closeCoupon(){
  document.getElementById('coupon').style.visibility = 'hidden';
  document.getElementById('main').style.opacity = '1';
}

// Weather App

