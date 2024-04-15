const animationDelay = (index: number) => {
  return { animationDelay: `calc(0.2s + 0.5s* ${index})` };
};

const objExists = (obj: any) => {
  return obj !== null && obj !== undefined && !isEmpty(obj);
};

const isEmpty = (obj: any) => !Object.keys(obj).length;

function extractImageUrls(imagesObject: object) {
  return Object.entries(imagesObject)
    .map(([key, value]) => {
      if (value && value.node && value.node.mediaItemUrl) {
        return value.node.mediaItemUrl;
      }
    })
    .filter((url) => url);
}

export { animationDelay, objExists, extractImageUrls };
