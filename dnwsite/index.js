function listnerMenu(){
  // 获取menuItem 元素class
  var devWidth = document.documentElement.clientWidth;
  var menuItemCalss = document.getElementsByClassName('pagelist');
  var val = menuItemCalss[0].style.display;
  if (devWidth < 1020) {
    if(val == 'none'){
      menuItemCalss[0].style.display = 'block'; //显示  
    }else{
      if(val == "flex") {
        menuItemCalss[0].style.display = 'block';
      } else {
        menuItemCalss[0].style.display = 'none'; //隐藏
      }
    }
  } else {
    menuItemCalss[0].style.display = 'flex';
  }
  
}

(function() {
  listnerMenu()
})()