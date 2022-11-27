export const color = (id: number) => {
    switch (id) {
        case 1:
            return 'blue';
        case 2:
            return 'warning';
        case 3:
            return 'green';
        case 4:
            return 'green';
        case 5:
            return 'warning';
        case 6:
            return 'warning';

        default:
            break;
    }
}

export function dateStart(date: string, val: number) {
    let dateConvert = +date.split('09-')[1]
    if (dateConvert <= val) {
        return true;
    } else {
        return false;
    }
}
export function dateEnd(date: string, val: number) {
    let dateConvert = +date.split('09-')[1]
    if (dateConvert >= val) {
        return true;
    } else {
        return false;
    }
}