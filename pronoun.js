const pronoun = (s) => {

    let m= s.replace(',','')
    
    let b = m.split('\n')
    console.log(b);

    let wor = []
    for (let i = 0; i < b.length; i++) {
        wor.push(...b[i].split(' '))


    }

    console.log(wor);

    let I = 0
    let you = 0
    let he = 0
    let she = 0
    let it = 0
    let they = 0
    let we = 0
    let k = {}
    let arI = []
    let youI = []
    let heI =[]
    let sheI = []
    let itI =[]
    let theyI = []
    let weI=[]


    for (let i = 0; i < wor.length; i++) {


        if (wor[i].toLowerCase() == 'i') {
            I++

            if (wor[i + 1].toLowerCase() !== 'i') {
                if (wor[i + 1].toLowerCase() == 'you' || wor[i + 1].toLowerCase() == 'i' || wor[i + 1].toLowerCase() == 'she' || wor[i + 1].toLowerCase() == 'he' || wor[i + 1].toLowerCase() == 'they' || wor[i + 1].toLowerCase() == 'we' || wor[i + 1].toLowerCase() == 'it') {
                    k[wor[i].toLowerCase()] = { word: [], count: I++ }
                    continue

                } arI.push(wor[i + 1])
                k[wor[i].toLowerCase()] = { word: arI, count: I }


            }



        } else if (wor[i].toLowerCase() == 'you') {
            you++
                  if (i==wor.length-1){
                                        k[wor[i]] = { word: [], count: you }

                  }
            if (  wor[i+1]!== undefined  && wor[i + 1].toLowerCase() !== 'you') {
                if (wor[i + 1].toLowerCase() == 'you' || wor[i + 1].toLowerCase() == 'i' || wor[i + 1].toLowerCase() == 'she' || wor[i + 1].toLowerCase() == 'he' || wor[i + 1].toLowerCase() == 'they' || wor[i + 1].toLowerCase() == 'we' || wor[i + 1].toLowerCase() == 'it') {
                    k[wor[i].toLowerCase()] = { word: [], count: you }
                    continue

                }
            youI.push(wor[i + 1])
                k[wor[i].toLowerCase()] = { word: youI, count: you }


            }

        } else if (wor[i].toLowerCase() == 'he') {
            he++
            if (wor[i + 1].toLowerCase() !== 'he') {
                if (wor[i + 1].toLowerCase() == 'you' || wor[i + 1].toLowerCase() == 'i' || wor[i + 1].toLowerCase() == 'she' || wor[i + 1].toLowerCase() == 'he' || wor[i + 1].toLowerCase() == 'they' || wor[i + 1].toLowerCase() == 'we' || wor[i + 1].toLowerCase() == 'it') {
                    k[wor[i].toLowerCase()] = { word: [], count: he }
                    continue

                }
                heI.push(wor[i + 1])

                k[wor[i].toLowerCase()] = { word: heI, count: he }


            }

        } else if (wor[i].toLowerCase() == 'she') {

            she++
            if (wor[i + 1].toLowerCase() !== 'she') {
                if (wor[i + 1].toLowerCase() == 'you' || wor[i + 1].toLowerCase() == 'i' || wor[i + 1].toLowerCase() == 'she' || wor[i + 1].toLowerCase() == 'he' || wor[i + 1].toLowerCase() == 'they' || wor[i + 1].toLowerCase() == 'we' || wor[i + 1].toLowerCase() == 'it') {
                    k[wor[i].toLowerCase()] = { word: [], count: she }
                    continue

                }
                sheI.push(wor[i + 1])

                k[wor[i].toLowerCase()] = { word: sheI, count: she }


            }
        } else if (wor[i].toLowerCase() == 'it') {
            it++
            if (wor[i + 1].toLowerCase() !== 'it') {
                if (wor[i + 1].toLowerCase() == 'you' || wor[i + 1].toLowerCase() == 'i' || wor[i + 1].toLowerCase() == 'she' || wor[i + 1].toLowerCase() == 'he' || wor[i + 1].toLowerCase() == 'they' || wor[i + 1].toLowerCase() == 'we' || wor[i + 1].toLowerCase() == 'it') {
                    k[wor[i].toLowerCase()] = { word: [], count: it }
                    continue

                }
                itI.push(wor[i + 1])

                k[wor[i].toLowerCase()] = { word: itI, count: it }


            }

        } else if (wor[i].toLowerCase() == 'they') {

            they++
            if (wor[i + 1].toLowerCase() !== 'they') {
                if (wor[i + 1].toLowerCase() == 'you' || wor[i + 1].toLowerCase() == 'i' || wor[i + 1].toLowerCase() == 'she' || wor[i + 1].toLowerCase() == 'he' || wor[i + 1].toLowerCase() == 'they' || wor[i + 1].toLowerCase() == 'we' || wor[i + 1].toLowerCase() == 'it') {
                    k[wor[i].toLowerCase()] = { word: [], count: they }
                    continue

                }

                theyI.push(wor[i + 1])

                k[wor[i].toLowerCase()] = { word: theyI, count: they }


            }

        } else if (wor[i].toLowerCase() == 'we') {
            we++
            if (wor[i + 1].toLowerCase() !== 'we') {
                if (wor[i + 1].toLowerCase() == 'you' || wor[i + 1].toLowerCase() == 'i' || wor[i + 1].toLowerCase() == 'she' || wor[i + 1].toLowerCase() == 'he' || wor[i + 1].toLowerCase() == 'they' || wor[i + 1].toLowerCase() == 'we' || wor[i + 1].toLowerCase() == 'it') {
                    k[wor[i].toLowerCase()] = { word: [], count: we }
                    continue

                } 
                weI.push(wor[i + 1])

                k[wor[i].toLowerCase()] = { word: weI, count: we }


            }

        }
    }

 
    return k
}

console.log(   pronoun('she she she she is'));
