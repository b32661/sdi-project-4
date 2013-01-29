//  Does a string follow a 123-456-7890 pattern like a phone number?
function isPhoneNumber (string){
    var phNum = string;
    var pLength = phNum.length;
    var pFirst = phNum.charAt(0);
    var pFirstThree = phNum.substring(0,2);
    var pSecondThree = phNum.substring((4,6));
    var pLastFour = phNum.substring(8,11);
    var pFirstDash = phNum.charAt(3);
    var pLastDash = phNum.charAt(7);
    var dashes = pFirstDash + pLastDash;

    if (pLength != 12 || pFirst === 0 ||
        pFirstThree === NaN || pSecondThree === NaN ||
        pLastFour === NaN || dashes != "--"){
        phNum = false;
        console.log("This is not a phone number.");
    } else {
        phNum = true;
        console.log(" This is possibly a phone number.");
    }

    return phNum;
}

//  Does a string follow an aaa@bbb.ccc pattern like an email address?
function isEmail (string){
    var email = string;
    var myEmail;
    var lastThree = email.substring(email.length-3, email.length);
    var dot = email.charAt(email.length - 4);
    var firstAt = email.indexOf("@");
    var secondAt = email.lastIndexOf("@");
    var firstDot = email.indexOf(".");
    var lastDot = email.lastIndexOf(".");

    if( dot === "." && firstAt != -1 &&
        firstDot === lastDot &&
        firstAt === secondAt )
        {
            if(lastThree === "com" ||
                lastThree ==="net" ||
                lastThree === "org"){

            } else{
                myEmail = false;
                console.log("This is probably not an email address.");
                return myEmail
            }

        var myEmail = true;
            console.log("This is possibly an email address.");

    } else {
        myEmail = false;
        console.log("I doubt this is an email address.")
}

    return myEmail
}

//  Is the string a URL? (Does it start with http: or https:?)
function isURL (string){
    var url = string;
    var firstFive = url.substring(0,5);
    var firstSix = url.substring(0,6);
    var isUrl;

    if (firstFive == "http:" || firstSix == "https:"){
        isUrl = true ;
    } else {
        isUrl = false;
    }
    return {string: url ,first: firstFive, second: firstSix, possibleURL: isUrl}
}

//  Title-case a string (split into words, then uppercase the first letter of each word)
function makeCap (string){
    var str = string;
    return str;
}

//  Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
function replaceSep (string){
    var str = string;
}

//  Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
function makeMoney (number){
    var num = number;
}

//  Fuzzy-match a number: is the number above or below a number within a certain percent?
function fuzMatch (number){

}

//  Find the number of hours or days difference between two dates.
function dateDif (date){
    var userDate = date;
    var now =  new Date();
    result = userDate - now;
    return result;
}

//  Given a string version of a number such as "42", return the value as an actual Number, such as 42.
function strToNum (string){
    var number = string;

}

//  Find the smallest value in an array that is greater than a given number
function grThan (number){
    var myNumber = number
}

//  Find the total value of just the numbers in an array, even if some of the items are not numbers.
function valNumInArray (array){
    var myArray = array;
}


//  Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
function sortArray (array){
    var myArray = array;
}

var well = isEmail("jermcriddle@gmail.net");
console.log(well);

