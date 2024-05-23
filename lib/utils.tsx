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

function sortByName(items: Array<object>) {
  return items.sort(function (a, b) {
    if ((a as any).name > (b as any).name) {
      return 1;
    }
    if ((a as any).name < (b as any).name) {
      return -1;
    }
    return 0;
  });
}
function generateWhatsAppLink(phoneNumber: string, product: string) {
  const message =
    "Oi! Eu vim do site e queria saber mais sobre o seguinte produto: ";
  const encodedMessage = encodeURIComponent(message);
  const encodedProduct = encodeURIComponent(product);
  return `https://wa.me/+5521992220003?text=${encodedMessage}${encodedProduct}.`;
}
export {
  animationDelay,
  objExists,
  extractImageUrls,
  generateBreadCrumbObjects,
  getImg,
  sortByName,
  generateWhatsAppLink,
};
