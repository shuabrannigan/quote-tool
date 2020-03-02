/* 

Show and hide table.

*/

const showDiv = document.querySelector('.show-hide');
const showDivBtn = document.querySelector('.show-hide-btn')

showDiv.style.display = 'none'
showDivBtn.style.display = 'none'



function showHide() {
    if (showDiv.style.display === 'none') {
        showDiv.style.display = '';
        showDivBtn.style.display = ''

        showDivBtn.innerHTML = 'Hide'
        
    } else {
        showDiv.style.display = 'none';
        showDivBtn.innerHTML = 'Show'

    }
}