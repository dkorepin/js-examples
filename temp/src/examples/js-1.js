// What responsibilities will I have on the project?
// How can i work with the repository? Using remote desktop or local repositoty.

http - uses request response protocol and server client type. It uses from browser engine API.
Client sends http request to the server and server returnes http response it will contain HTML, css, js or json response.
200 - ok
503 - for error
404 - for is not exists

function getTypes() {
    // String, undefined, number, object, function, boolean, symbol, bigint
    // null - object, NaN- number,
    console.log(typeof 'd');
    console.log(typeof 1);
    console.log(typeof function a(){});
    console.log(typeof {});
    console.log(typeof true);
    console.log(typeof Symbol(1));
    console.log(typeof NaN);
    console.log(typeof undefined);
    // console.log(typeof BigInt(12)); BigInt
    // console.log(typeof 1n); BigInt
}

function other(){
    [1,2,3].concat();//new array;
    // let, const - not using hoisting
    // var - creates undefiined variable in the declaration phase

    // let available in te block scoupe such as cycles, if expressions
    // var variables using bubbling defined outside blocks. And ve have acces from it in the function scope.

    // Контест выполнения
    // The execution context is an internal data structure that contains details about the execution of a function:
    // where the control flow is now, the current variables, the value of this (we don’t use it here) and few other internal details.

    // Call stack
    // JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts.
    // The call stack works based on the LIFO principle i.e., last-in-first-out.
    // When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
    // and starts executing the function
    // When the current function completes, the JavaScript engine pops it off the call stack and resumes the execution where it left off.

    // Asynchronous JavaScript
    // JavaScript is the single-threaded programming language. This means that the JavaScript engine has only one call stack.
    // Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to complete
    // In our example, when calling the setTimeout() function, the JavaScript engine places it on the call stack,
    // and the Web API creates a timer that expires in 1 second.
    // Then JavaScript engine place the task() function is into a queue called a callback queue or a task queue:
    // The event loop is a constantly running process that monitors both the callback queue and the call stack.
    // If the call stack is not empty, the event loop waits until it is empty and places the next function from the
    // callback queue to the call stack. If the callback queue is empty, nothing will happen:

    // Promise.resolve() runs faster than SetTimeout, because promise places in the call stack, when 
    // setTimeout places into a event queue, and later it places to the call stack.

    // Call, apply, bind
    // Its some methods, which can call functions.
    // Call is method it has context argument and properties as arguments sequence.
    // Apply is method it has contenx argument and properties as array;
    // Call and apply calls the function. When Bind just creates new function with new context.

    var bind = function(fn, context) {
        // обрезаем ненужные аргументы (функцию и контекст)
        var bindArgs = [].slice.call(arguments, 2);
        return function() {
          // здесь все аргументы будут необходимы
          var fnArgs = [].slice.call(arguments);
          // собираем все 
          return fn.apply(context, bindArgs.concat(fnArgs));
        };
      };

    //   [].slice.call(arguments) – работает, т.к. для работы slice нужны нумерованные аргументы и length – у arguments всё это есть

    // Map - is collection of key-values pairs.
    // It has faster acces operation than object as key-value container;
    // Object don't save order of keys. Enumerating of map values will ordered by when it value will be added.
    // перебор по ключам (овощи)
    for (let vegetable of recipeMap.keys()) {
        alert(vegetable); // огурец, помидор, лук
    }
    
    let map = new Map(Object.entries(obj));//Create Map from object
    let obj = Object.fromEntries(map.entries()); // make a plain object (*)

    // Set is collection where each value can appear only once. new Set(array)

    // WeakMap - is collection of key-values pairs, where keys is objects.
    // If key object has not links to himself, then it object will be removed from memory and from WeakMap object;

    //Array is ordered data collection
    let arr = new Array();
    let arr = new Array("Яблоко", "Груша", "и тд");
    let arr = [];
    let arr = new Array(2); //Creates array with lenth equals two and no elements;

    //Queue - Push\Shift. Last in, last out;
    //Stack - Push\Pop. Last in, First out;

    //Pust/pop is faster methods, then shift/unshift;

    let height = 0;

    // Differences between ?? and || operators. || - logical or, ?? - nullish coalescing (double question symbol)
    alert(height || 100); // 100
    alert(height ?? 100); // 0

    // ES 2015:
    // Классы
    // Стрелочные функции
    // Let, const
    // Spread,
    // For of,
    // Promise,
    // `jk`
    // IIFE (immediately invoked function expression),

    
    // function declaration
    myFunc();
    function myFunc() {}// works correct.
    //function expression
    myFunc();
    let myFunc = function() {}// error
    
    //Arrow functions have no this keyword;
    //If this is accesed, it is taken from the outside.
    //Arrow functions can't run with new keyword.
    //Arr fn have no arguments variable.

    //Function is called nested or closure when it is created inside another function.
    //It is used when we want have acces to the same inner or outer variables. 

    //LocalStorage - contains only strings. If it not string, then value will be casted to string/
    localStorage.getItem(k, v);
    localStorage.setItem(k);
    localStorage.removeItem(k);
    localStorage.clear();
    localStorage.key(index);
    localStorage.length;
    //SessionStorage - it's live in browser tab. If tab will be closed, then sessionStorage will be cleared.
    window.onstorage = (event) => {}
    //if storages are modified, the onStorage action will be called in all tabs.
    {key, oldValue, newValue, url, storageArea}//storageArea - local/sessionStorage object

    //Optional chaining is a safe way to acces nested object properties even if any of the intermediate properties don't exist.
    //Optional chaining stops evaluation and returns undefined if the part before question dotis undefined or null.
}

function classes() {
    //js calss is a kind of function
    class User{}
    //1- creates function, named User
    //2- function body is a constructor body if it not empty.
    //3- Save all methods in User.prototype

    //Differences between class and prototype.
    //Functions, created by class has inner property 'functionKind':'classConstructor'.
    //Class constructor can be called only with new word;
    //Class methods are nor enumerable.
    //Code in a class always in strict mode.

    class A {
        _var1 = 0;
        #var2 = 1;
    }
    //_var1 - protected variable. We have acces to it inside class and extended classes. It's just emulation in JS.
    // We can modify it using getters and setters.
    //#var2 - Private variable or method. We have acces to it only inside the class. Private and public variables
    // are not conflicted. And we can create 2 similar variables as public and private.

    //Mixins is an objects with functions and properties. It will be merged with class, using Object.assign.
}

function prototypes() {
    //Prototypes is possibility of Js to create new objects.
    //Objects are have property, named Prototype. It links to the another object. By default any prototype of object is Object.
    //default methods: hasOnwProperty, isPrototypeOf, toString
    //If we want to acces from object's property, if it has not it, it will be found in prototype.
    //When we want to access Prototype property, we can use proto property, because Prototype is hidden property.
    //Proto is getter/setter for prototype.

    //There is Some limits. Proto can't be linked by cycle. Proto is can be object or null. Another types will be ignored.
}

// In object-oriented programming, properties and methods are split into two groups:
// •	Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
// •	External interface – methods and properties, accessible also from outside the class.


//DOM!