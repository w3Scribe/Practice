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




type TestImmnutable = Immutable<typeof mixedObject>
type TestDraft = Draft<TestImmnutable>;
type TestOPath = Paths<TestImmnutable>;

const he : TestOPath = "address.city"