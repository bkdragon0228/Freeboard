import { format, compareAsc } from 'date-fns'

export default function useDate() {


    return (date : Date) => {
        if(!date) return

        const result = format(new Date(date), 'yyyy.MM.dd')
        return result
    }
}