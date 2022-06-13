const returnTrue = () => {
    console.log("return true");
    return true;
}

const returnFalse = () => {
    console.log("return false");
    return false;
}

console.warn('Not or the negation')
console.log(!returnTrue());
console.log(!returnFalse());

console.warn('And');
console.log(returnTrue() && returnFalse()); //False
console.log(returnFalse() && returnFalse()); //True
console.log(returnTrue() && returnTrue()); //False

console.warn('Or');
console.log(returnTrue() || returnFalse()); //True
console.log(returnFalse() || returnFalse()); //False
console.log(returnTrue() || returnTrue()); //True

console.warn('Assignment');
const iAmUndefined = undefined;
const iAmNull = null;
const iAmFalse = false;
const iAmZero = 0;
const iAmEmptyString = '';

console.log(iAmUndefined && iAmNull); //Null
console.log(iAmUndefined && iAmFalse); //False
console.log(iAmUndefined && iAmZero); //Zero
console.log(iAmUndefined && iAmEmptyString); //Empty string
console.log(iAmNull && iAmNull); //Null
console.log(iAmNull && iAmFalse); //False
console.log(iAmNull && iAmZero); //Zero
console.log(iAmNull && iAmEmptyString); //Empty string
console.log(iAmFalse && iAmNull); //False
console.log(iAmFalse && iAmFalse); //False
console.log(iAmFalse && iAmZero); //False
console.log(iAmFalse && iAmEmptyString); //False
console.log(iAmZero && iAmNull); //Zero
console.log(iAmZero && iAmFalse); //Zero
console.log(iAmZero && iAmZero); //Zero
console.log(iAmZero && iAmEmptyString); //Zero
console.log(iAmEmptyString && iAmNull); //Empty string
console.log(iAmEmptyString && iAmFalse); //Empty string
console.log(iAmEmptyString && iAmZero); //Empty string
console.log(iAmEmptyString && iAmEmptyString); //Empty string
