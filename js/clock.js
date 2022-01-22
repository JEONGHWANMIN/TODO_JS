const clock_time = document.querySelector("#clock span:first-child");
const clock_moment = document.querySelector("#clock span:last-child");

setInterval( () => {
    const date = new Date();
    const minute = (date.getMinutes() < 10 ) ? `0${date.getMinutes()}` : date.getMinutes();
    clock_time.innerText = `${date.getHours()}:${minute}`;
    clock_moment.innerText =  `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${getDays(date.getDay())}`
} , 1000 )


function getDays(day) {
    let Days;
    switch(day) {
        case 1:
            Days = "Mon";
            break;
        case 2:
            Days = "Tue";
            break;
        case 3:
            Days = "Wed";
            break;
        case 4:
            Days = "Thu";
            break;
        case 5:
            Days = "Fri";
            break;
        case 6:
            Days = "Sat";
            break;
        case 0:
            Days = "Sun";
            break;
    } 
    return Days;
}