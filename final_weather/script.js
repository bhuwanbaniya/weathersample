localStorage.setItem('username', 'John');
        localStorage.setItem('age', '30');

        // Retrieving data from localStorage
        const username = localStorage.getItem('username');
        const age = localStorage.getItem('age');
        console.log('Username:', username);
        console.log('Age:', age);

        // Updating data in localStorage
        localStorage.setItem('age', '31');
        const updatedAge = localStorage.getItem('age');
        console.log('Updated Age:', updatedAge);

        // Removing an item from localStorage
        localStorage.removeItem('age');

        // Clearing localStorage
        localStorage.clear();
        console.log('localStorage after clear:', localStorage);