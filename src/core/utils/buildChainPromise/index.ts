export type PromiseChain<T = any> = (...params: any[]) => Promise<T>;

export const buildChainPromise = <T = any>(
  promises: Array<PromiseChain<T>>,
  ...params: Array<any>
) => {
  let length = 0;
  return new Promise((resolve, reject) => {
    try {
      promises.forEach(async pm => {
        try {
          await pm(...params);
          length++;
          if (length === promises.length) {
            resolve(true);
          }
        } catch (err) {
          reject(err);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};
