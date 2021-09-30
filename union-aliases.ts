type Combinable = number | string /* Aliases  -- use "type" keyword */
type Conversion = 'as-number' | 'as-text' 

function combine
    ( input1: Combinable, 
    input2: number | string, /* Aliases */
    combined: Conversion) /* Union type && Literal TYpes // Aliases */
    {  
    let result; 
   if (typeof input1 === 'number' && typeof input2 === 'number' ||  combined === 'as-number') {
     result = +input1 + +input2
   } else {
      result = input1.toString() + input2.toString()
   }
    return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

let combinedStingAges = combine('33', '44', 'as-number')
console.log(combinedStingAges)

let combinedNames = combine('Alex', 'Ioana', 'as-text')
console.log(combinedNames)