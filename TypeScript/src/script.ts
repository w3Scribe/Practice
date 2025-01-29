type Example = {
  user: {
    name: string;
    age: number;
    isAdmin: false;
    address: {
      city: string;
      zip: number[];
    };
  };
  posts: [{ title: string; isPo: string[][] }];
};

type OTypes<T> =
