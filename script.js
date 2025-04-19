document.addEventListener('DOMContentLoaded', function () {
  // Get cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find(row => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  // 1. Initialize the cookie with 0 if not present
  let count = parseInt(getCookie('count'));
  if (isNaN(count)) {
    count = 0;
  }

  // 2. Increment the count
  count++;

  // 3. Update the cookie
  setCookie('count', count, 7);  // expires in 7 days

  // 4. Display the count on the page
  let display = document.getElementById('countDisplay');
  if (display) {
    display.textContent = "You have visited this page " + count + " times.";
  }
});
