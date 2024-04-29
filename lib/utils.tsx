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

function generateBreadCrumbObjects(str: string) {
  if (str[0] === "/") {
    str = str.slice(1);
  }
  const crumbs = str.split("/");
  let url = "";
  const array = crumbs.map((crumb, index) => {
    url += "/" + crumb;
    return {
      pageName: crumb,
      url: url,
    };
  });

  return array;
}

function getImg(image: any) {
  return {
    src: image?.node.sourceUrl,
    width: image?.node.mediaDetails.width,
    height: image?.node.mediaDetails.height,
    alt: image?.node.altText,
  };
}
export {
  animationDelay,
  objExists,
  extractImageUrls,
  generateBreadCrumbObjects,
  getImg,
};
