const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx){

    // toggle the last cup fill
    if(smallCups[idx].classList.contains('full') && !smallCups
    [idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx){
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    // nothing in cup? NO percentage
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } 
    // cup is filled? SHOW percentage
    else {
        percentage.style.visibility = 'visible'
        //this shows fill in big cup of percentage
        percentage.style.height = `${fullCups / totalCups * 330}px`
        //this shows numerical percentage
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups == totalCups){
        //completely full cup? don't show remained
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }else{
        remained.style.visibility = 'visible'
        liters.innerText = `${64 - (8 * fullCups)}`
        }
    }
