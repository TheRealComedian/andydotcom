function showPageContent(contentId) {
    //get all pageContent elements
    let contents = document.querySelectorAll('.pageContent')
    //make them all show false
    for (let i=0; i<contents.length; i++) {
        if (contents[i].getAttribute('show') == 'true') {
            contents[i].setAttribute('show', 'false')
        }
    }
    //show true desired element
    document.getElementById(contentId).setAttribute('show', 'true')
}

function topTenAndy(operation) {
    const andyList = [
        'andy0',
        'andy10',
        'andy9',
        'andy8',
        'andy7',
        'andy6',
        'andy5',
        'andy4',
        'andy3',
        'andy2',
        'andy1'
    ]

    let contents = document.querySelectorAll('.topAndy')
    //console.log(contents)
    let newAndy = undefined

    for (let i=0; i<contents.length; i++) {
        // console.log(i)
        if (contents[i].getAttribute('style') == 'display: flex;') {
            let currentAndy = i

            // console.log(`current Andy ${currentAndy}`)
            // console.log(`Current Andy in List ${andyList[currentAndy]}`)

            if (operation == 'next' && currentAndy != 10) {
                newAndy = andyList[currentAndy + 1]
                contents[i].setAttribute('style', 'display: none;')
            } else if (operation == 'prev' && currentAndy != 1) {
                newAndy = andyList[currentAndy - 1]
                contents[i].setAttribute('style', 'display: none;')
            } else {
                newAndy = andyList[currentAndy]
            }
            
            
        }
    }
    
    
    // console.log(`New Andy ${newAndy}`)
    document.getElementById(newAndy).setAttribute('style', 'display: flex;')
}


let timer = 5000
let timeout
const sound = new Audio('./sounds/sound.mp3')
sound.volume = 0.5
sound.loop = true
let hasInit = false


function initPopup() {
    if (hasInit) return
    hasInit = true
    const popup = document.getElementById('popup') 
    
    timeout = setTimeout(() => {
        popup.classList.remove('hidden')
        sound.play()

    }, timer)
    
    console.log(":(");
}

function closePopup() {
    const popup = document.getElementById('popup')
    clearTimeout(timeout)
    
    sound.pause()
    popup.classList.add('hidden')
    timer += 4000
    sound.volume = 0.2

    timeout = setTimeout(() => {
        popup.classList.remove('hidden')
        sound.currentTime = 0
        sound.play()
    }, timer)
}