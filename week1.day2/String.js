// to get the length of last word
let s = "fly me   to   the moon"
let count =0
for (let i = s.length-1 ;i>=0 ; i--)
{
    if(s[i]!==" ")
    {
        count++
    }
    else 
    break
}
console.log("Count of last word is : "+count);

//to checkword is anagram
function anagram (a,b)
{
    a = a.toLowerCase();
    b = b.toLowerCase();

    if (a.length != b.length)
        {
       console.log("Not an anagram");
       return;
    }

   let sort1 = a.split("").sort().join("")
   let sort2 = b.split("").sort().join("")

        if (sort1 ===sort2)
        {
            console.log("It is anagram");
        }
        else
        {
            console.log("Not an anagram");
        }
}
anagram("hello","world")