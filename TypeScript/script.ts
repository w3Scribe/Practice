type StorageType = Map<string, number> | Set<string>;
type StorageCreatorType = (goods: string[], type: "map" | "set") => StorageType;

const createStorage: StorageCreatorType = (goods, type) => {
  if (type === "map") {
    const storage = new Map<string, number>();
    for (let i = 0; i < goods.length; i++) {
      storage.set(goods[i], i);
    }
    return storage;
  }

  return new Set(goods);
};


type FindItemReturnType = {
  context: {
    index: number;
    exists: boolean;
  };
  msg: (indx: number, exists: boolean) => string;
};

type FindItemType = (
  storage: StorageType,
  item: string,
  useIndex: boolean
) => FindItemReturnType;


const findItem: FindItemType = (storage, item, useIndex) => {
  if (storage instanceof Map) {
    return {
      context: {
        index: storage.get(item) as number,
        exists: storage.has(item),
      },
      msg: (indx, exists) => {
        return `Index: ${indx}, Exists: ${exists}`;
      }
    };
  }

  return {
    context: {
      index: -1,
      exists: false,
    },
    msg: (_indx, _exists) => {
      return `Index: ${_indx}, Exists: ${_exists}`;
    },       
  };
};   


const items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const itemStorage = createStorage(items, "map");

const result = findItem(itemStorage, "cherry", true); 

console.log(result)     

