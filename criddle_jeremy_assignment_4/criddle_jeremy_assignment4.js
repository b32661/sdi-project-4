//  String	Number	Array
//  Does a string follow a 123-456-7890 pattern like a phone number?
//  Does a string follow an aaa@bbb.ccc pattern like an email address?
//  Is the string a URL? (Does it start with http: or https:?)
//  Title-case a string (split into words, then uppercase the first letter of each word)
//  Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
//  Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
//  Fuzzy-match a number: is the number above or below a number within a certain percent?
//  Find the number of hours or days difference between two dates.
//  Given a string version of a number such as "42", return the value as an actual Number, such as 42.
//  Find the smallest value in an array that is greater than a given number
//  Find the total value of just the numbers in an array, even if some of the items are not numbers.
//  Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].


// string phone number function
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

// string email address function
function isEmail (string){
    var email = string;
    var firstThree = email.substring(0,3);
    var lastThree = email.substring(email.length-3, email.length);
    var dot = email.charAt(email.length - 4);
    var firstAt = email.indexOf("@");
    var secondAt = email.lastIndexOf("@");
    var firstDot = email.indexOf(".");
    var lastDot = email.lastIndexOf(".");

    if( dot != "." || firstAt == -1 ||
        firstAt != secondAt ||
        firstDot != lastDot){
        var email = false;

    } else {
        email = true;
}

    return {first :firstThree,
        last: lastThree, email: email};
}

// string url function
function isURL (string){
    var url = string;
    return url;
}

// title case a string function
function makeCap (string){
    var str = string;
    return str;
}

// replace separator function
function replaceSep (string){
    var str = string;
}

// format a number for money function
function makeMoney (number){
    var num = number;
}

// fuzzy-match function
function fuzMatch (number)

// date difference function
function dateDif (date){
    var myDate = date;
}

// string to actual number function
function strToNum (string){
    var toNum = string;
}

// smallest value greater that a given number function
function grThan (number){
    var myNumber = number
}

// total value of just numbers in an array function
function valNumInArray (array){
    var myArray = array;
}

// sorted array function
function sortArray (array){
    var myArray = array;
}

var well = isEmail("jermcriddle@gmail.com");
console.log(well);

