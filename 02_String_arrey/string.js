//1
let my_string='I*m Ira, hello'
function SplitStr(str)
{
    let count=0;
    for(let char of str)
    {
        if(char==' ')
       {
            count++;
       }
    }return count++ 
}
let space = SplitStr(my_string)
console.log(`Number space in string: ${space}`)

//2
let my_string1="hello, my name is Ira"
function UpperChar(str)
{
    return str.charAt(0).toUpperCase()+str.slice(1)
}
let upper=UpperChar(my_string1)
console.log(`New string: ${upper}`)

//3
let my_string2="hello"
function UpperChar(str)
{
    return str.length
}
let count=UpperChar(my_string2)
console.log(`New string: ${count}`)

//4
function Abbreviation(char) {
    return char
        .split(' ') 
        .map(word => word[0].toUpperCase()) 
        .join(''); }

let string3 = "Onishchuk Iryna Anatiliivna";
console.log(Abbreviation(string3));

//5
let palindrom_string="hello my word"
function Palindrom(string0)
 {
   let rever_str= string0.split(' ') 
    let revers=rever_str.reverse() 
    let newRever_str=revers.join('')
    if(string0==newRever_str)
        console.log("This string is palindrom")
    else
        console.log("Enter enother string")

}
Palindrom(palindrom_string)

//6
function parseUrl(url) {
    try {
        let parsedUrl = new URL(url); 
        return `Protocol: ${parsedUrl.protocol.replace(':', '')}, Domain: ${parsedUrl.hostname}, Way: ${parsedUrl.pathname}`;
    } catch (e) {
        return "URL not correct";
    }
}

// Приклад використання
let url = "https://mystat.itstep.org/homework";
console.log(parseUrl(url)); 
