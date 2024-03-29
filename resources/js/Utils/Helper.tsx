import moment from "moment";
import 'moment/dist/locale/vi';

export function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function imageStorageUrl(path: string) : string {
    return `/storage/${path}`;
}

export function formatDate(date: string) : string {
    return moment(date).locale('vi').format('DD MMMM YYYY');
}

export function getDiscountedPercent(oldPrice: number, price: number) : number {
    return Math.round((oldPrice - price) / oldPrice * 100);
}
