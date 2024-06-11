interface Book {
    title: string;
    author: string;
    readonly ISBN: string; // readonly property
}

const myBook: Book = {
    title: 'TypeScript Basics',
    author: 'John Doe',
    ISBN: '123-456-789'
};

// myBook.ISBN = '987-654-321'; // Error: Cannot assign to 'ISBN' because it is a read-only property
console.log(myBook);
