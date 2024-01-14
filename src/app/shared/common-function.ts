export function getDataSort(data, headerkey) {
  const headerValue = headerkey;
  headerkey = headerValue.value;
  const sort = headerValue.key;
  if (data && data.length > 0) {
    if (sort === 'asc') {
      data.sort(
        (d1, d2) => {
          let a;
          let b;
          const temp = headerkey;
          a = d1[temp];
          b = d2[temp];
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        }
      );
    } else {
      data.sort(
        (d1, d2) => {
          let a;
          let b;
          const temp = headerkey;
          a = d1[temp];
          b = d2[temp];
          if (a > b) {
            return -1;
          }
          if (a < b) {
            return 1;
          }
          return 0;
        }
      );
    }
  }
  return data;
}

