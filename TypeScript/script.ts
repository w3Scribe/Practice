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
  msg: string;
};

type FindItemType = (
  storage: StorageType,
  item: string,
  useIndex: boolean
) => FindItemReturnType | false;


const findItem: FindItemType = (storage, item, useIndex) => {
  if (storage instanceof Map) {
    const exists = storage.has(item);
    
    if(!exists) {
      console.log("Item Not Found") 
      return false
    };

    return {
      context: {
        index: storage.get(item) as number,
        exists: storage.has(item),
      },
      msg:`Item : ${item} Found At Index: ${storage.get(item)}`,
    };
  }

  return {
    context: {
      index: -1,
      exists: false,
    },
    msg: "This operation is not supported for Set",  
  };
};   


const items = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const itemStorage = createStorage(items, "map");

const result = findItem(itemStorage, "milk", true); 

console.log(result)     

