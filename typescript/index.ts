// Tupple to union

type TuppleToUnion<T extends any[]> = T[number]

type Tupple2Union<T extends any[]> = T extends Array<infer AE> ? AE : never

// Do you have a better way to solve this problem?

// Runtime function that converts a tuple to a union type
function tupleToUnion<T extends readonly any[]>(tuple: T): T[number] {
  // Returns a random element from the tuple as a union type
  // In practice, this demonstrates the union type inference
  if (tuple.length === 0) {
    throw new Error("Cannot get union value from empty tuple")
  }
  return tuple[Math.floor(Math.random() * tuple.length)] as T[number]
}

// Alternative: function that returns all values (useful for runtime operations)
function getTupleValues<T extends readonly any[]>(tuple: T): T[number][] {
  return [...tuple]
}



// test types
type tupple = ["Hello", "World"]

type test1 = TuppleToUnion<tupple>

type test2 = Tupple2Union<tupple>

// test runtime functions
const myTuple = ["Hello", "World"] as const

// This will have type "Hello" | "World"
const unionValue = tupleToUnion(myTuple)
console.log("Random union value:", unionValue)

// This will have type ("Hello" | "World")[]
const allValues = getTupleValues(myTuple)
console.log("All tuple values:", allValues)

// Example with numbers
const numberTuple = [1, 2, 3, 4, 5] as const
const numberUnion = tupleToUnion(numberTuple) // type: 1 | 2 | 3 | 4 | 5
console.log("Random number from tuple:", numberUnion)

// Example with mixed types
const mixedTuple = ["string", 42, true] as const
const mixedUnion = tupleToUnion(mixedTuple) // type: "string" | 42 | true
console.log("Random mixed value:", mixedUnion)