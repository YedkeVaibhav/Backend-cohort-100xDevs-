/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   str = str.toUpperCase()

   let left = 0;
   let right = str.length - 1
   const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/

   while(right > left)
   {
    if(str[left] == " " ||  regex.test(str[left]) )
    {
      left = left + 1
      continue
    }
    if(str[right] == " " || regex.test(str[right]))
    {
      right = right - 1
      continue
    }
    if(str[left] != str[right])
    {
      return false
    }
    left = left + 1
    right = right - 1
   }

   return true
}

module.exports = isPalindrome;
