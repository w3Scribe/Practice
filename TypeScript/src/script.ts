type Example = {
  user: {
    name: string;
    age: number;
    address: {
      city: string;
      zip: number[];
    };
  };
  posts: [{ title: string }];
};

type ExamplePaths = Paths<Example>;

type ExampleJJ = MatchPath<Example, 'user.address.zip'>;