const colors = ["red", "red", "blue", "blue", "blue", "green", "green", "red"];

function Repetition(input: any) {

  if (Array.isArray(input) && input.length < 1) {
    throw new Error("Array have at lest one element.");
  }

  if (typeof input === 'string' && input.trim().length < 3) {
    throw new Error("String Must be at least on 3 characters.")
  }


  let RefinedUseInput: any[] = typeof input === 'string' ? input.split('') : input;
  RefinedUseInput = RefinedUseInput.map(char => char.toLowerCase()).filter(char => char.trim().length > 0);
  let RepResult = new Map<string, any>();
  let MaxCharCount = 0;
  let MaxChar ='';

  for (let char = 0; char <= RefinedUseInput.length; char++) {
    const currentChar = RefinedUseInput[char]
    const count = RepResult.get(currentChar) + 1 || 1;
    RepResult.set(currentChar, count);
    if (count > MaxChar) {
      MaxChar = count;
      MaxCharCount = currentChar;
    }
  }



  return  { MaxChar, MaxCharCount, RepResult };


}

const result = Repetition('redbluegreenred');
console.log(result);