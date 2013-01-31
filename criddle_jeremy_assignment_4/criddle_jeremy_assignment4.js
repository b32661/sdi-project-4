//Jeremy Criddle
//SDI 1301
//Project 4
//Function Library

var JerLib = function () {


//  Does a string follow a 123-456-7890 pattern like a phone number? returns true or false.
    var isPhoneNumber = function (string) {
        var phNum = string;
        var pLength = phNum.length;
        var pFirst = phNum.charAt(0);
        var pFirstThree = phNum.substring(0, 2);
        var pSecondThree = phNum.substring((4, 6));
        var pLastFour = phNum.substring(8, 11);
        var pFirstDash = phNum.charAt(3);
        var pLastDash = phNum.charAt(7);
        var dashes = pFirstDash + pLastDash;

        if (pLength != 12 || pFirst === 0 ||
            pFirstThree === NaN || pSecondThree === NaN ||
            pLastFour === NaN || dashes != "--") {
            phNum = false;
        } else {
            phNum = true;
        }

        return phNum;
    }


//  Does a string follow an aaa@bbb.ccc pattern like an email address? returns true or false
    var isEmail = function (string) {
        var email = string;
        var myEmail;
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
                myEmail = true;

            } else {
                myEmail = false;
                return myEmail;
            }

            myEmail = true;

        } else {
            myEmail = false;
        }

        return myEmail;
    }


//  Is the string a URL? (Does it start with http: or https:?) returns true or false
    var isUrL = function (string) {
        var url = string;
        var firstFive = url.substring(0, 5);
        var firstSix = url.substring(0, 6);
        var isUrl;

        if (firstFive == "http:" || firstSix == "https:") {
            isUrl = true;
            return isUrl;
        } else {
            isUrl = false;
            return isUrl;
        }
        ;
    }


    var toUpper = function (string) {
        var splitter = string.split(' ');
        var sub, substr ;
        var word = new Array();
        for (i = 0; i < splitter.length; i++) {
            sub = splitter[i].substring(0, 1).toUpperCase();
            substr = splitter[i].substring(1);
            word[i] = sub + substr;
        }
        var capsString = word.join(' ');
        return capsString;
    }



//  Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
    var replaceSep = function (string, separator) {
        var str = /\W/g;
        var replaced = str.replace(string, separator);
        return replaced;
    };


//  Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
        var makeMoney = function (number) {
            var num = number.toFixed(2);
            return num;
        };


//  Fuzzy-match a number: is the number above or below a number within a certain percent?
        var fuzzyNum = function (number,comparedNumber,percent) {
            var approx = (number/comparedNumber) * 100;
            var isFuzzyNum;
            if ((number >= comparedNumber && approx >= percent) || (number < comparedNumber && approx < percent)) {
                isFuzzyNum = false;
                return isFuzzyNum;
            } else {
                isFuzzyNum = true
                return isFuzzyNum;
            };
        };


// Input two dates using new Date(yyyy,mm,dd)
// Output format is hours
        var difInHours = function (date1,date2) {
            var dif ;
            var difference = (date1 > date2) ? date1.getTime() - date2.getTime() : date2.getTime() - date1.getTime();
            dif = difference / 1000 * 60 * 60;
            return dif;
        }


//  Given a string version of a number such as "42", return the value as an actual Number, such as 42.
        var strToNum = function (string) {
            var str = string - 0;
            return str;
        }

//  Find the smallest value in an array that is greater than a given number
//    function grThan (number){
//        var myNumber = number;
//        var sortedNum = myNumber.sort(a,b);
//        return sortedNum;
//    }

//  Find the total value of just the numbers in an array, even if some of the items are not numbers.
//    function valNumInArray (array){
//        var myArray = array;
//    }


//  Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
        //   function sortArray (array){
        //      var myArray = array;
//    }


        return {"phNum":phNum,
            "isAnEmail":myEmail,
            "isaURL":isUrl,
            "titleCased":cased,
            "replaced":replaced,
            "num":num,
            "str":str,
            "dif":dif,
            "isFuzzyNum":isFuzzyNum,
            "capsString": capString



        }     };