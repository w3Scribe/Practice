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


type TestPaths = Tuple<3, string, false>; // [string, string, string]
