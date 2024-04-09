import moment from "moment";
import "moment/dist/locale/vi.js";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function imageStorageUrl(path) {
    return `/storage/${path}`;
}
function formatDate(date) {
    return moment(date).locale("vi").format("DD MMMM YYYY");
}
export {
    classNames as c,
    formatDate as f,
    imageStorageUrl as i
};
