//유틸리티
// 날짜 객체 입력 받아서 문장 (yyyy-mm-dd hh:mm:ss)로 반환한다
export function dateToStr(d) {
    const pad = (n) => {
        return n < 10 ? "0" + n : n;
    };

    return (
        d.getFullYear() +
        "-" +
        pad(d.getMonth() + 1) +
        "-" +
        pad(d.getDate()) +
        " " +
        pad(d.getHours()) +
        ":" +
        pad(d.getMinutes()) +
        ":" +
        pad(d.getSeconds())
    );
}
