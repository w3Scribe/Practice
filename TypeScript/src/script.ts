type UserDetailNested = {
  readonly name: string;
  readonly address: {
    readonly city: string;
    readonly postalCode: string[];
  }
  readonly phoneNumbers: readonly string[];
};


type UserDetailImmutable = Immutable<UserDetailNested>;
type UserDetailDraft = Draft<UserDetailNested>;
type UserDetailPaths = Paths<UserDetailNested>;

const h : UserDetailPaths =  "address.postalCode"