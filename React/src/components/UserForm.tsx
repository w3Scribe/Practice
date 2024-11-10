import { FC, FormEvent, useContext, useState } from "react";
import { UserCtx } from "./UserCtxProvider";

const UserForm: FC = () => {
  const [name, setName] = useState<string>("");
  const  { updateUserName } = useContext(UserCtx)!;

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    updateUserName(name)
    setName("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
