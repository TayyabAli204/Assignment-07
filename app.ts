
////////////////    String Exercise //////////////////////

//------------>>> 1. Write a ts program to find length of a string.

// var toFindLength:string = "Hello Ali";

// console.log(toFindLength);
// console.log("Length is:" + toFindLength.length);


// 2. Write a ts program to copy one string to another string.


// ------------>>>> 3. Write a ts program to concatenate two strings.

// var str1:string = "Tayyab";
// var str2:string = "Ali";

// var strConcat:string = str1.concat(str2);
// console.log("concatenate of Two String are: "  + strConcat);

// ------->>>>>>4. Write a ts program to compare two strings.

// var str1:string = "rabi ul awal 2022";
// var str2:string = "rabi ul awal ";

// console.log("localeCompare", str1.localeCompare(str2));


// ------->5. Write a ts program to convert lowercase string to uppercase.

// var str2:string = "Rabi ul Awal ";

// var toUpperCase:string = str2.toUpperCase();

// console.log("To Uppercase are here--:", toUpperCase);


// --------> 6. Write a ts program to convert uppercase string to lowercase.

// var str1:string = "Rabi ul Awal 2022";

// var tolowerCase:string = str1.toLowerCase();

// console.log("To Lowercase are here--:",tolowerCase);


//===========>  7. Write a ts program to toggle case of each character of a string.


// var str:string[] = "GeKf@rGeek$ tAyYAb Ali".split("");

// function toggleChars(str:string[])
// {
//     for (var i = 0; i < str.length; i++)
//     {
//         if (str[i] >= 'A' && str[i] <= 'Z')
//             str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
//         else if (str[i] >= 'a' && str[i] <= 'z')
//             str[i] =  String.fromCharCode(str[i].charCodeAt(0) + 'A'.charCodeAt(0) - 'a'.charCodeAt(0));
//     }
// }

// toggleChars(str);
// console.log("String after toggleCase :",);
// console.log((str).join(""));


// ------------>>>>>//8. Write a ts program to find total number of alphabets, digits or special character in a string.


// var str:string = " 12 - #Rabi ul Awal# - 2022 "

// var alphabets:number = 0;
// var digits:number = 0;
// var specialCharacter:number = 0;




//     for (var i = 0; str[i]; i++)
//     {
//         if (str[i] >= 'a' && str[i] <= 'z'||str[i] >= 'A' && str[i] <= 'Z'){

//             alphabets++;
//         }
//         else if (str[i]>='0' && str[i]<='9'){

//             digits++;
//         }
//         else
//         {
//             specialCharacter++;
//         }
//     }

// console.log(str);

// console.log("alphabets are:",alphabets);
// console.log("Digits are:",digits);
// console.log("specialCharacter are:",specialCharacter);



// ------>>//9. Write a ts program to count total number of vowels and consonants in a string.

// var str:string = "Saylani MaD"
// var vowels:number = 0;
// var consonants:number = 0;
//     for (var i = 0; str[i]; i++)
//     {
//         if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' ||  str[i] == 'u'){

//             vowels++;
//         }
//         else if (str[i]>='a' && str[i]<='z'){

//             consonants++;
//         }

//     }

// console.log(str);
// console.log("vowels are:",vowels);
// console.log("consonants are:",consonants);


// ------>>10. Write a ts program to count total number of words in a string.

// var words: string = "I like pakistan";
// console.log("length", words.length);

// ------>>>>11. Write a ts program to find reverse of a string.

// var str:string = "saylani Mass IT ";
// var str1:string[] = str.split("");
// var reverse:string[] = str1.reverse();
// var joinString:string=reverse.join('');
// console.log("Original string:" , str);
// console.log("joint wala String:",joinString);

// ======>>12. Write a ts program to check whether a string is palindrome or not.

// var str:string = "civic";
// var arrayValue:string[] = str.split('');
// var valueReverse:string[] = arrayValue.reverse();
// var stringReverse:string = valueReverse.join('');

// if(str == stringReverse ){
//     console.log("It is a palindrome");
// }
// else{
//     console.log("It is NOT palindrome");
// }

// ======>>>13. Write a ts program to reverse order of words in a given string

// var words:string = "reverse.order.of.words";

// function reverseOrder(words){

//     var words = words.split('.').reverse().join('.')
//     return words
// }

// console.log(reverseOrder(words));


// ====>>14. Write a ts program to find first occurrence of a character in a given string.

// var str:string = "I like Code  If I win.";
// console.log("indexOf()", str.indexOf("I"));

// ====>>.15. Write a ts program to find last occurrence of a character in a given string.

// var str:string = "I like Code  If I win.";
// console.log("lastIndexOf()", str.lastIndexOf("I"));

// =\====>>16. Write a ts program to search all occurrences of a character in given string.
// var str:string = "hchchfcfcfcf";
// var character:string = "f";

// for(var i = 0; i<str.length; i++){
//     if(str.charAt(i) == "f"){
//         console.log( " 'f' " ,"is found at index", i);
//     }  
// }



// ===>>>17Write a ts program to count occurrences of a character in given string.

// var str:string = "Faisalabad";
// var checkChar:string = "a";

// function countOccChar(str:string){
//        var res:number = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str.charAt(i) == "a")
//             res++;
//         }
//         return res;
// }
// console.log( checkChar , "appears four times in str."  , countOccChar(str));


// ===>>18. Write a ts program to find highest frequency character in a string.
// var str:string = "This website is awesome.";
// var checkChar:string = "e";

// function highestFrequency(str:string){
//        var res:number = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str.charAt(i) == "e")
//             res++;
//         }
//         return res;
// }

// console.log("Enter a string:",str);
// console.log("Enter a character to find its frequency:",checkChar);
// console.log( "Frequency of " , checkChar , highestFrequency(str));


// ====>>>19. Write a ts program to find lowest frequency character in a string

// ====>>20. Write a ts program to count frequency of each character in a string.

// ====>>>21. Write a ts program to remove first occurrence of a character from string.

// var str:string = "Apples Apples";

// console.log("remove first occurrence(1): " + str.substring(1));

// ====>>22. Write a ts program to remove last occurrence of a character from string.

// var str:string = "Apples Apples Apples Apples";

// console.log("remove last occurrence(last): " + str.r(-9,14));






// conditional operators programming exercises
// =====>>1. Write a ts program to find maximum between two numbers using conditional operator.

// var num1:number = 10;
// var num2:number = 20;
// var maximum:number = (num1 > num2) ? num1 : num2;
// console.log("Maximum between 10 and 20 is:", maximum);

// ====>>>2. Write a ts program to find maximum between three numbers using conditional operator.

// var num1:number = 10;
// var num2:number = 20;
// var num3:number = 30;
// var maximum:number = (num1 > num2 ) ? num1 : num2 && (num2 > num3 ) ? num2 : num3;
// console.log("Maximum between 10 and 20 and 30 is:", maximum);

// ====>>>3. Write a ts program to check whether a number is even or odd using conditional operator

// var num:number = 20;
// var checkEvenOdd:string = (num % 2 == 0) ? ("Number is Even") : ("Number is odd");
// console.log(checkEvenOdd);

// =====>>>>4. Write a ts program to check whether year is leap year or not using conditional operator.

// var year:number = 2018;
// var checkLeapYear:string = (year % 4 == 0) ? ("it is leap year") : ("it is NOt a leap year");
// console.log(checkLeapYear);


// ===>>5. Write a ts program to check whether character is an alphabet or not using conditional operator

// var char: string = "g";

// var checkAlphabet: string = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
//     ? ("It is alphabet ") : ("It is NOT alphabet ");
// console.log( `${char}` , checkAlphabet);



// List of switch case programming exercises

// =====>>>>1. Write a ts program to print day of week name using switch case.

// var week: string = "Monday";

// switch (week) {
//         case "1":
//         console.log("Monday");
//         break;
//         case "2":
//         console.log("Tuesday");
//         break;
//          case "3":
//         console.log("Wendenday");
//         break; 
//         case "4":
//         console.log("Thursday");
//         break; 
//         case "5":
//         console.log("Friday");
//         break;
//          case "6":
//         console.log("Saturday");
//         break;
//         case "7":
//         console.log("Sunday");
//         break;
//         default: 
//             ("Invalid input! Please enter week number between 1-7");
// }
// console.log(week);


// =====>>>>2. Write a ts program print total number of days in a month using switch case.

// var month: string = "3";
// console.log(month);
// switch (month) {
//         case "1":
//         console.log("31 days");
//         break;
//         case "2":
//         console.log("28/29 days");
//         break;
//          case "3":
//         console.log("31 days");
//         break; 
//         case "4":
//         console.log("30 days");
//         break; 
//         case "5":
//         console.log("31 days");
//         break;
//          case "6":
//         console.log("30 days");
//         break;
//         case "7":
//         console.log("31 days");
//         break;
//         case "8":
//         console.log("31 days");
//         break; 
//         case "9":
//         console.log("30 days");
//         break;
//         case "10":
//         console.log("31 days");
//         break;
//         case "11":
//         console.log("30 days");
//         break;
//         case "12":
//         console.log("31 days");
//         break;
//         default: 
//             ("Invalid input! Please enter month number between 1-7");
// }


// ====>>>3. Write a ts program to check whether an alphabet is vowel or consonant using switch case.


// var alphabet: string = "E";
// console.log("Enter an alphabet: ",alphabet);
// switch (alphabet) {
//         case "a":
//         console.log("Vowel");
//         break;
//         case "e":
//             console.log("Vowel");
//             break;
//          case "i":
//             console.log("Vowel");
//             break; 
//         case "o":
//             console.log("Vowel");
//             break; 
//         case "u":
//             console.log("Vowel");
//             break;
//          case "A":
//             console.log("Vowel");
//             break;
//         case "E":
//             console.log("Vowel");
//             break;
//         case "I":
//             console.log("Vowel");
//             break; 
//         case "O":
//             console.log("Vowel");
//             break;
//         case "U":
//             console.log("Vowel");
//             break;
        
//         default: 
//             console.log("consonant");
// }

// ====>>>4. Write a ts program to find maximum between two numbers using switch case.

// var num1:number = 30;
// var num2:number = 20;
// var maximum:boolean =num1 > num2; 
// switch(maximum) {
//         case true:
//         console.log("is a maximum ", num1);
//         break;
//         case false:
//         console.log("is a maximum ", num2);
//         break;

//     default:
        
// }


// ===>>>5. Write a ts program to check whether a number is even or odd using switch case.

// var num:number = 9;

// switch(num % 2) {
//         case 0:
//         console.log("is Even", num);
//         break;
//         case 1:
//         console.log("is Odd ", num);
//         break;

//     default:
        
// }


// ===>>6. Write a ts program to check whether a number is positive, negative or zero using switch case.


