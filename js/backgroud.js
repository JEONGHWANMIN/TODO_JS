const bg_arr = [];

for (let i = 1 ; i < 8 ; i++) {
    bg_arr.push(i);
}

const bag = bg_arr[Math.floor(Math.random() * bg_arr.length)];
document.body.style = 
`
width : 100%;
height : auto;
background-image: url("../image/${bag}.jpg");
background-repeat : no-repeat;
background-size : cover;
`