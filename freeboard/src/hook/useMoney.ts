export default function useMoney () {

    return (money : string) => {
        if(!money) return

        const reverse = money.split('').reverse().join('')
        let count = 0
        let newReverse = ''

        for(let i = 0; i < reverse.length ; i += 1) {
            if(count === 3) {
                count = 0
                newReverse += ','
            }
            newReverse += reverse[i]
            count++
        }

        console.log(newReverse)

        const result = newReverse.split('').reverse().join('')
        return result
    }
}


