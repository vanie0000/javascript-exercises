const isAlnum = (char) => { 
  const code = char.charCodeAt(0); 
  return (code > 47 && code < 58) || 
         (code > 64 && code < 91) ||  
         (code > 96 && code < 123); 
}; 

const palindromes = function(str) { 
  let newStr = str.toLowerCase(); 
  let res = ""; 
  
  for (const char of newStr){ 
    if (isAlnum(char)) res += char; 
  } 
  
  let left = 0; 
  let right = res.length - 1; 
  
  while (left <= right){ 
    if (res[left] !== res[right]) {
      return false; 
    }
    left++;
    right--;
  } 
  return true; 
}; 

module.exports = palindromes;
