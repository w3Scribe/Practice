type userDetail = {
  username: string;
  age: number;
  address: {
    city: string;
    country: string;
  };
};

type userReplaceType = Replacer<userDetail, string | number, false>;
