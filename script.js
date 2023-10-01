// String
 let String = "WELCOME!!";
 console.log("Length: - " + String.length);
 console.log("Lowercase: - " + String.toLowerCase());
 console.log("Padding: - " + String.padStart(11,"*"));
 console.log("Uppercase: - " + String.toUpperCase());
 console.log("3rd Letter in word: - " + String.charAt(2));
 
 // Number
 let num = 43.2734;
 console.log("String: - " + num.toString());
 console.log("Exponential: - " + num.toExponential(2));
 console.log("Fixed: - " + num.toFixed(2));
 console.log("Precision: - " + num.toPrecision(4));
 console.log("Value: - " + num.valueOf());

 // Array
 let array = ["Lily", "Rose", "Tulip", "lotus"];
 console.log("Length: - " + array.length);
 console.log("Push: - " + array.push("Lilac"));
 console.log("Shift: - " + array.shift());
 console.log("Splice: - " + array.splice(2, 1, "Daisy", "Orchid"));
 console.log("Pop: - " + array.pop());

 // Date
 let TodayDate = new Date();
 console.log("Full Year: - " + TodayDate.getFullYear());
 console.log("Month: - " + (TodayDate.getMonth() + 1)); 
 console.log("Date: - " + TodayDate.getDate());
 console.log("Hours: - " + TodayDate.getHours());
 console.log("Minutes: - " + TodayDate.getMinutes());  
 
 // Function
 function greet(name) 
 {
   console.log("Hii, " + name );
 }
 
 function toCelsius(fahrenheit)
 {
    return(5/9) * (fahrenheit - 32);
 }