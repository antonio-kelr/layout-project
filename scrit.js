const list  = document.querySelector('.list')
const sing  = document.querySelector('.sing')
list.addEventListener('click', function(e) {
    sing.classList.add('nyout')
})

sing.addEventListener('click', function(e) {
    sing.classList.remove('nyout')
})

