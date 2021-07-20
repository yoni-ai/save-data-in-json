const user1 = {
    name: "ronen",
    lastname: "mahagony",
    age: 22,
    work: "student"
}

const user2 = {
    name: "lirit",
    lastname: "shlomot",
    age: 17,
    work: "programer"
}

const express = require('express');
const fs = require('fs');
const app = express();


app.listen(3000, () => {
    console.log('plugged to port 3000. server is running');
});


app.use(express.static('website'));

function saveData(data) {
    function ifError(error){
        if(error){
            console.log(error);
            return;
        }
    }
    // const jasonData = JSON.stringify(data);
    const jasonData = JSON.stringify(data, null ,2);
    // console.log(data);
    // console.log(jasonData);

    fs.writeFile('user-1.json', jasonData, ifError);
}

saveData(user1);


// function saveData(data, file) {
   
//     function ifError(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//     }

//     const jasonData = JSON.stringify(data, null ,2);

    
//     if (fs.existsSync(file)) {
//     // path exists
//     console.log("exists:", file);
//     } else {
//     console.log("DOES NOT exist:", file);
//     fs.writeFile(file, jasonData, ifError);
//     console.log(jasonData);
//     }

// }

// saveData(user1, 'user-1.json');
// saveData(user2, 'user-2.json');

// let rawdata = fs.readFileSync('user-1.json');
// let someuser = JSON.parse(rawdata);
// console.log(someuser.name);

// fs.readFile('user-1.json', (err, data) => {
//     if (err){
//         console.log(err);
//     } else{
//     let someuser = JSON.parse(data);
//     console.log(someuser.name);
//     }
// });