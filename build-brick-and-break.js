let intervalId
export function build(amount) {
    const body = document.querySelector('body');
    let count = 0
    intervalId = setInterval(() => {
        if (count >= amount) {
            clearInterval(intervalId)
            return
        }
        count++;
        const brick = document.createElement('div');
        brick.id = `brick-${count}`;
        if ((count - 1) % 3 == 1) {
            brick.dataset.foundation = 'true'
        }
        body.append(brick);

    }, 100);
}

export function repair(...ids) {


    ids.forEach(element => {

        const brik = document.getElementById(element)
        if (!brik) return
        if (brik.dataset.foundation === 'true') {
            brik.dataset.repaired = 'in progress'
        } else {
            brik.dataset.repaired= 'true'
        }

    });

}

export function destroy() {


    const brik = document.querySelectorAll('div')


    const bb = brik[brik.length - 1]

    bb.remove()



}






