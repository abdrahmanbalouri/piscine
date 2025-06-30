let last = null
export function setBox() {
    const box = document.createElement('div')
    box.className = 'box'

    document.body.append(box)



}
export function createCircle() {

    document.addEventListener('click', (event) => {
        let box = document.querySelector('.box')
        let boxp = box.getBoundingClientRect()
        const circle = document.createElement('div')
        if (boxp.left <= event.clientX - 25 && boxp.right >= event.clientX + 25 && boxp.top <= event.clientY - 25 && boxp.bottom >= event.clientY + 25) {
            circle.style.background = 'var(--purple)'

        } else {
            circle.style.background = 'white'

        }
        circle.className = 'circle'

        circle.style.top = `${event.clientY - 25}px`
        circle.style.left = `${event.clientX - 25}px`
        last = circle

        document.body.append(circle)

    })

}
export function moveCircle() {

    document.addEventListener('mousemove', (event) => {
        let circles = document.querySelectorAll('.circle')

        if (circles.length == 0) return;
        last.style.top = `${event.clientY - 25}px`
        last.style.left = `${event.clientX - 25}px`

        let box = document.querySelector('.box')
        let boxp = box.getBoundingClientRect()
        if (!last.parentNode.classList.contains("box")) {

            if (boxp.left <= event.clientX - 25-1 && boxp.right >= event.clientX + 25+1 && boxp.top <= event.clientY - 25-1 && boxp.bottom >= event.clientY + 25+1) {
                last.style.background = 'var(--purple)'
                box.append(last)
            }

        } else {


            let boxleft = boxp.left
            let boxtop = boxp.top
            let boxbotom = boxp.bottom - 51
            let boxrgit = boxp.right - 51


            let x = event.clientX - 25
            let y = event.clientY - 25

            if (x < boxleft) {

                x = boxleft
            }
            if (x > boxrgit) {
                x = boxrgit
            }
            if (y < boxtop) {
                y = boxtop

            }
            if (y > boxbotom) {
                y = boxbotom
            }
            last.style.left = x+1 +  'px'
            last.style.top = y+1 + 'px'

        }
    })



}