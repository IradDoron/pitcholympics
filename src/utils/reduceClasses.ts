export const reduceClasses = (classes: string) => {
    // Example: classes = 'w-fit h-screen w-screen' => 'h-screen w-screen'

    // Remove all extra spaces in every place between the classes
    const trimmedClasses = classes.replace(/\s+/g, ' ').trim();

    // Split the classes into an array
    const classesArray = trimmedClasses.split(' ');

    // Remove all empty strings
    const filteredClassesArray = classesArray.filter(c => c !== '');

    // Reverse the array
    const reversedClassesArray = filteredClassesArray.reverse();

    // Create empty dictionary
    const classesDictionary: { [key: string]: string } = {};

    // Loop through the array and add the classes to the dictionary if they don't exist
    reversedClassesArray.forEach(c => {
        // Split the class into key and value by the first '-' if it exists
        const splitClass = c.split('-');
        const key = splitClass[0];
        const value = splitClass.slice(1).join('-');

        // If the key doesn't exist, add it to the dictionary
        if (!classesDictionary[key]) {
            classesDictionary[key] = value;
            return;
        }
    });

    // Create empty string
    let reducedClasses = '';

    // Loop through the dictionary and add the classes to the string
    for (const key in classesDictionary) {
        const value = classesDictionary[key];
        if (value === '') {
            reducedClasses += `${key} `;
            continue;
        }
        reducedClasses += `${key}-${classesDictionary[key]} `;
    }

    // Remove the last space
    reducedClasses = reducedClasses.trim();

    // Return the reduced classes
    return reducedClasses;
};
