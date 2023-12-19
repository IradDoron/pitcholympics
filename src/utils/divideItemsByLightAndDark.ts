export const divideItemsByLightAndDark = (items: string[]) => {
  const lightItems = [];
  const darkItems = [];

  for (const item of items) {
    if (item.includes('light')) {
      lightItems.push(item);
    } else if (item.includes('dark')) {
      darkItems.push(item);
    }
  }

  return {
    light: lightItems,
    dark: darkItems,
  };
};
