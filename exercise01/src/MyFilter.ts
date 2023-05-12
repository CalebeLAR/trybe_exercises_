function callBacks (item:unknown, index?:number, arr?:unknown[]):boolean {
  if(typeof item === "boolean") {
    return true
  } else {
    return false
  }
}

function myFilters<TypeArray, TypeItem>(arr:TypeArray[], callBacks:Function):TypeItem[] {
  const filter:unknown[] = [];
  for (let item of arr) {
    if (callBacks(item)) {
      filter.push(item);
    }
  }

  return filter as TypeItem[];
}

type Items = (number|string|boolean);

const results = myFilters<Items, boolean>([2,'3',4,'5',6,'7',8, true, false], callBacks);
console.log(results);
