window.onload = function () {
  let fontSize = 16;
  let _w = document.body.clientWidth;
  let font = parseInt(((_w * fontSize) / 375) * 10) / 10 + 'px';
  document.getElementsByTagName('html')[0].style.fontSize = font;

  window.onresize = function () {
    let _w = document.body.clientWidth;
    let font = parseInt(((_w * fontSize) / 375) * 10) / 10 + 'px';
    document.getElementsByTagName('html')[0].style.fontSize = font;// 获取html标签
  }
}