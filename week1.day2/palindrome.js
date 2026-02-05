function palindrome(input)
{
    let reverse = input.split('').reverse().join('')
    if (reverse === input)
    {
        console.log("Palindrome");
    }
    else
    {
        console.log("Not palindrome");
    }
}


palindrome("madam")