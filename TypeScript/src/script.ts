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


type TestPaths = OPaths<Example>;
