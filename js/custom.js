
// 把文章中链接，target = '_blank'
var links = document.querySelectorAll('.post-content a');
for (var i = 0, length = links.length; i < length; i++) {
    if (links[i].hostname != window.location.hostname) {
        links[i].target = '_blank';
    }
}
