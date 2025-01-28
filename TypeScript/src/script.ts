// Immutalbe

const mixedObject = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
  },
  hobbies: ['reading', 'travelling']
}


type immutableMixedObject = Immutable<typeof mixedObject>
type DrftObject = Draft<typeof mixedObject>

type h  = Primitive