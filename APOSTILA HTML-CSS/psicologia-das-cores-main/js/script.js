
// function loadMenu(menuItem) {

//     $(function () {
//         $('#menu').load(`menu-${menuItem}.html`);
//         $('#contents').load('none.html');
//     });
// }
function loadContent(contentItem) {
    let getActive = document.getElementsByClassName('active')
    if (getActive.length == 1) {
        getActive[0].removeAttribute('class')
    }

    let setActive = document.getElementById(contentItem)
    setActive.setAttribute('class', 'active')
    $(function () {
        $('#contents').load(`${contentItem}.html`);
    });
}
