// Recursion - a function that calls itself

function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i;
    }
    return total;
}

function sumRangeRecusion(n, total = 0) {
    if (n <= 0) {
        return total;
    }

    return sumRangeRecusion(n - 1, total + n);
    // sumRangeRecusion(3)
    // sumRangeRecusion(3 - 1, total + 3) total = 3
        // sumRangeRecusion(2 - 1, total + 2) total = 5
            // sumRangeRecusion(1 - 1, total + 1) total = 6
                // sumRangeRecusion(0 - 1, total + 0) total = 6
                // return 6
            // return 6
        // return 6
    // return 6
}


function printChildrenRecursion(t) {
    if (t.children.length === 0) {
        return;
    }

    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursion(child);
    });

    // printChildrenRecursion('John')
        // printChildrenRecursion('Jim')
        // return
        // printChildrenRecursion('Zoe')
            // printChildrenRecursion('Kyle')
            // return
            // printChildrenRecursion('Sophie')
            // return
        // return
    // return
}

const tree =  {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name:'Kyle', children: [] },
                { name:'Sophie', children: [] }
            ]
        }
    ]
};

function factorial(n, total = 1) {
    if (n <= 0) {
        return total;
    }

    return factorial(n - 1, total * n);
}

function factorial(n) {
    if (n <= 0) {
        return 1;
    }

    return n * factorial(n - 1);
    // factorial(4);
    // 4 * factorial(4 - 1);
        // 3 * factorial(3 - 1);
            // 2 * factorial(2 - 1);
                // 1 * factorial(1 - 1);
                // return 1
            // return 2
        // return 6
    // return 24

}