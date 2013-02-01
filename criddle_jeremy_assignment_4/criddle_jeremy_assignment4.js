//  Jeremy Criddle
//  SDI 1301
//  Project 4
//  Function Library

var jerLib = function() {


//  Does a string follow a 123-456-7890 pattern like a phone number? returns true or false.
    var isPhoneNumber = function(string){
        var phNum = string ;
        var pLength = phNum.length;
        var pFirst = phNum.charAt(0);
        var pFirstThree = phNum.substring(0, 2);
        pFirstThree = pFirstThree - 0;
        var pSecondThree = phNum.substring(4, 6);
        pSecondThree = pSecondThree - 0;
        var pLastFour = phNum.substring(8, 11);
        pLastFour = pLastFour - 0;
        var pFirstDash = phNum.charAt(3);
        var pLastDash = phNum.charAt(7);
        var dashes = pFirstDash + pLastDash;


        if (pLength != 12 || pFirst === 0 ||
            isNaN(pFirstThree) || isNaN(pSecondThree) ||
            isNaN (pLastFour)  || dashes != "--") {
            return false;
        } else {
            return true;
        }

    }


//  Does a string follow an aaa@bbb.ccc pattern like an email address? returns true or false
    var isEmail = function (string) {
        var email = string;
        var lastThree = email.substring(email.length - 3, email.length);
        var dot = email.charAt(email.length - 4);
        var firstAt = email.indexOf("@");
        var secondAt = email.lastIndexOf("@");
        var firstDot = email.indexOf(".");
        var lastDot = email.lastIndexOf(".");

        if (dot === "." && firstAt != -1 &&
            firstDot === lastDot &&
            firstAt === secondAt) {
            if (lastThree === "com" ||
                lastThree === "net" ||
                lastThree === "org") {
                return true;
                } else {
                    return false;
                    }
            return true;
                } else {
                return false;
        }
    }


//  Is the string a URL? (Does it start with http: or https:?) returns true or false
    var isUrL = function (string) {
        var url = string;
        var firstFive = url.substring(0, 5);
        var firstSix = url.substring(0, 6);
        if (firstFive == "http:" || firstSix == "https:") {
            return true;
        } else {
            return false;

        }
        ;
    }


    //Title-case a string (split into words, then uppercase the first letter of each word)
    var toTitle = function (string) {
        var splitter = string.split(' ');
        var sub, substr ;
        var word = new Array();
        for (i = 0; i < splitter.length; i++) {
            sub = splitter[i].substring(0, 1).toUpperCase();
            substr = splitter[i].substring(1);
            word[i] = sub + substr;
        }
        return word;
    }



//  Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
    var replaceSep = function (string, separator, toSeparator) {
            var arrayOfStrings = string.split(separator);
        return arrayOfStrings.join(toSeparator);

        };


//  Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
        var makeMoney = function (number) {
            var num = number.toFixed(2);
            return num;
        };


//  Fuzzy-match a number: is the number above or below a number within a certain percent?
        var fuzzyNum = function (number,comparedNumber,percent) {
            var approx = (number/comparedNumber) * 100;
            if ((number >= comparedNumber && approx >= percent) ||
                (number < comparedNumber && approx < percent)) {
                return false;
            } else {
                return true;
            };
        };


// Input two dates, small number first using new Date(yyyy,mm,dd)
// Output format is hours
        var difInHours = function (date1, date2) {
            var firstDate = date1;
            var secondDate = date2;
            var difference = (firstDate > secondDate) ? firstDate.getTime() - secondDate.getTime() : secondDate.getTime() - firstDate.getTime();
            return difference / (60 * 60 * 1000);

        }


//  Given a string version of a number such as "42", return the value as an actual Number, such as 42.
        var strToNum = function (string) {
            var str = string - 0;
            return str;
        }

//  Find the smallest value in an array that is greater than a given number
        var grThan = function (array,num) {
            array.sort(function(a,b){return a-b;});
            if (num >= array[0] && num < array[array.length-1]) {
                array.push(num);
                array.sort(function(a,b){return a-b;});
        var result = array[array.lastIndexOf(num) + 1];
            return result;
        } else {
            return null;
    };
};
//    }

//  Find the total value of just the numbers in an array, even if some of the items are not numbers.
//    function valNumInArray (array){
//        var myArray = array;
//    }


//  Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
        //   function sortArray (array){
        //      var myArray = array;
//    }


        return {"isPhoneNumber": isPhoneNumber,
            "isEmail":isEmail,
            "isUrl":isUrL,
            "toTitle":toTitle,
            "replaceSep":replaceSep,
            "makeMoney":makeMoney,
            "difInHours":difInHours,
            "strToNum": strToNum,
            "fuzzyNum":fuzzyNum
        }     };

var newLib = new jerLib();
console.log(newLib.isPhoneNumber("256-655-0016"));
console.log(newLib.isEmail("jermcriddle@gmail.com"));
console.log(newLib.isUrl("http:"));
console.log(newLib.replaceSep("today-is-the-day","-", "="));
console.log(newLib.difInHours(new Date("2012,11,09"),new Date("2012,11,11")));
console.log(newLib.toTitle("today is the day"));