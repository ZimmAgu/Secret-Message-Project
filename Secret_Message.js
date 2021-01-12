//////////////////////////////
//  Secret Message Project  //
//      from Codecademy     //
//  written by Zimuzo Agu   //
//////////////////////////////







/* 
    This is the starting string that will be 
    manipulated throughout the project
*/
let secretMessage = ['Learning', 'is', 'not', 'about',
'what', 'you', 'get', 'easily', 'the', 'first',
'time,', 'it', 'is', 'about', 'what', 'you', 'can',
'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn',
'JavaScript'];










// Removes the last string of the secret message array
secretMessage.pop();












/*
    Adds the words "to" and "program 
    to the end of the secret message array
    in seprate strings
*/
secretMessage.push(`to`, `program`);












/*
    I am replacing the word "easily"
    with the word right

    The index of the word "easily" is 7
*/
secretMessage[7] = `right`










/* 
    Removes the first element of the array

    in this case the first element is the word `Learning
*/
secretMessage.shift();











/*
    Adds the word "Programming"
    to the beginning of the array
*/
secretMessage.unshift(`Programming`);










/*
    Removes the words "get easily the first time"
    from the string
    replaces them with the word know
*/
secretMessage.splice(6, 5, `know`);











// Prints all of the elements as a single string
console.log(secretMessage.join());

