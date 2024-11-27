import { z } from 'zod';

const userDetailsSchema = z.object({
  name: z.string().trim().min(3, 'Name must be at least 3 characters long'),
  age: z.number().positive().int(),
  username: z.string().trim().min(3, 'Username must be at least 3 characters long'),
  email: z.string().trim().email(),
  address: z.object({
    city: z.string().trim().min(3, 'City must be at least 3 characters long'),
    country: z.string().trim().min(3, 'Country must be at least 3 characters long'),
  }),
});

// Remove unused type declaration
const CreateProxyObject = <T extends object>(target: T, validator: z.ZodType): T => {
  const Handler: ProxyHandler<T> = {
    get: function (target, prop) {
      const IsExist = !Reflect.has(target, prop);
      if (IsExist) {
        throw new Error(`Property ${String(prop)} does not exist`);
      }
      return Reflect.get(target, prop);
    },

    set: function (target, prop, value) {
      const IsExist = !Reflect.has(target, prop);
      if (IsExist) {
        throw new Error(`Property ${String(prop)} does not exist`);
      }

      const propValue = Reflect.get(target, prop);
      const validationResult = validator.safeParse({ ...target, [prop]: value }).error;
      if (validationResult) {
        throw new Error(validationResult.errors[0].message);
      }

      return Reflect.set(target, prop, value);
    },
  };

  return new Proxy(target, Handler);
};

const userDetails = CreateProxyObject(
  {
    name: 'John Doe',
    age: 25,
    username: 'john_doe',
    email: 'adfa',
    address: {
      city: 'New York',
      country: 'USA',
    },
  },
  userDetailsSchema,
);
