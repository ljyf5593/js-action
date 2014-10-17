// 使用js更新地址中某个参数的值
function updateUrlQuery(url, name, value){
    var replaceStr = name + '=' + value;
    // 如果更改的值和原值一样则直接返回
    if(url.match(name + '=' + value)){
        return url;
    } else {
        var old_url = url;
        var reg = new RegExp(name+'=([^#&]*)', 'gi');
        url = url.replace(reg, replaceStr);
        if(url == old_url){
            var spilt = (url.indexOf('?') < 0) ? '?' : '&';
            url += spilt + replaceStr;
        }
        return url;
    }
}