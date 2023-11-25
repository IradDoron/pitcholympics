export const reduceClasses = (classes: string) => {
    // Example: classes = 'w-fit h-screen w-screen' => 'h-screen w-screen'

    // Remove all extra spaces in every place between the classes
    const trimmedClasses = classes.replace(/\s+/g, ' ').trim();

    // Split the classes into an array
    const classesArray = trimmedClasses.split(' ');

    // Remove all empty strings
    const filteredClassesArray = classesArray.filter(c => c !== '');

    // Create empty dictionary
    const classesDictionary: { [key: string]: string } = {};

    for (let i = filteredClassesArray.length - 1; i >= 0; i--) {
        const currentClass = filteredClassesArray[i];

        const currentClassSplit = currentClass.split('-');

        const classSplitLength = currentClassSplit.length;
        const key =
            classSplitLength === 1
                ? `_${currentClassSplit[0]}`
                : currentClassSplit[0];

        const value =
            classSplitLength === 1 ? '' : currentClassSplit.slice(1).join('-');

        classesDictionary[key] = value;
    }

    let classesString = '';

    for (const key in classesDictionary) {
        // Handle keys that start with an underscore

        if (key.startsWith('_')) {
            const newKey = key.replace('_', '');
            classesString += `${newKey} `;
        } else {
            classesString += `${key}-${classesDictionary[key]} `;
        }
    }

    return classesString;
};
