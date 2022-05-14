    const currentMonth = parseInt(new Date().getMonth())
    const currentYear = parseInt(new Date().getFullYear())
function fridaysInMonth() {
    let days = new Date( currentYear,currentMonth,0 ).getDate();
    let fridays = [ 6 - (new Date( currentMonth +'/01/'+ currentYear ).getDay()) ];
    for ( let i = fridays[0] + 7; i < days; i += 7 ) {
        fridays.push( i );
    }
    return fridays;
}
const disabledDays = []
fridaysInMonth().map(d => disabledDays.push(new Date(currentYear, currentMonth, d)))
    


console.log(disabledDays)