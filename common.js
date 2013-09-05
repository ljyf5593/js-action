/* 
    ----
    公共常用JS效果
    ----
*/

/* --- 浏览器滚动到相应元素位置（兼容firefox） --- */
var offsetTop = $(element).position().top;
// chrome ie
$('body').animate({ scrollTop: offsetTop}, 200);
// firefox
document.documentElement.scrollTop = offsetTop;
/* --- end --- */

/* --- 判断一个元素当前是否显示 ---*/
$(element).is(':visible');