type StorageType = Map<string, number> | Set<string>;
type StorageCreatorType = (goods: string[], type: "map" | "set") => StorageType;

const createStorage: StorageCreatorType = (goods, type) => {
  if (type === "map") {
    const storage = new Map<string, number>();
    for (let i = 0; i < goods.length; i++) storage.set(goods[i], i);
    return storage;
  }

  return new Set(goods);
};

type FindItemReturnType = {
  context?: {
    index: number;
    exists: boolean;
  };
  msg?: string;
} | boolean;

type FindItemType = (
  storage: StorageType,
  item: string,
  useIndex: boolean
) => FindItemReturnType | false;

const findItem: FindItemType = (storage, item, useIndex) => {
  if (storage instanceof Map && useIndex) {
    const exists = storage.has(item);
    const index = storage.get(item)!;

    if (!exists) {
      console.log("Item Not Found");
      return exists;
    }

    return {
      context: {
        index,
        exists,
      },
      msg: `Item : ${item} Found At Index: ${storage.get(item)}`,
    };
  }

  return storage.has(item);
};

const items = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
];

const itemStorage = createStorage(items, "set");
const result = findItem(itemStorage, "cherry", true);

console.log(result);
