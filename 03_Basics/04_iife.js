// Immediately Invoked Function Expression (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`)
})();  // ; is used to end one function 

(  (name) =>  {
    // UNNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('shahbaz')
