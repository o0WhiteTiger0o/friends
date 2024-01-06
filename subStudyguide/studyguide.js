function myFunction() {
    var menu = document.getElementById('mytopnav');
    if (menu.className === "topnav") {
      menu.className += ' responsive';
    }else {
      menu.className = 'topnav';
    }
  }