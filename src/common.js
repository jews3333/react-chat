//날짜 포맷
export const formatDate = (date) => {
    const newDate = new Date(date);
    const yyyy = String(newDate.getFullYear());
    let mm = String(newDate.getMonth() + 1);
    let dd = String(newDate.getDate());
    let hh = String(newDate.getHours());
    let ms = String(newDate.getMinutes());

    if(mm.toString().length < 2) {
        mm = `0${mm}`;
    }

    if(dd.toString().length < 2) {
        dd = `0${dd}`;
    }

    return `${yyyy}-${mm}-${dd} ${hh}:${ms}`;
}