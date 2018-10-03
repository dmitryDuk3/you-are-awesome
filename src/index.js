// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => { return propertyName; };
const createNotEnumerableProperty = (propertyName) => {
     Object.defineProperty(Object.prototype, propertyName, 
        { set: function(x) { Object.defineProperty(this, 'shadowProp', {value: x, enumerable: false});},
          get: function() { return this['shadowProp']; },
                                        enumerable: false});
                        return propertyName};
const createProtoMagicObject = () => { let x = function() {}; x.__proto__ = x.prototype; return x;};
const incrementor = () => { 
    if(!incrementor.counter) {
        incrementor.counter = 0;
    }
    incrementor.valueOf = function() {
        return incrementor.counter;
    }
    let inc = function() {
        return incrementor();
    }
    inc.valueOf = function() {
        return incrementor.counter;
    }
    incrementor.counter++;
    return inc;
};
const asyncIncrementor = () => {
    if(!asyncIncrementor.counter) {
        asyncIncrementor.counter = 0;
    }
    asyncIncrementor.counter++;
    return asyncIncrementor.counter;
};
const createIncrementer = () => {
    let increm = {};
    increm.val = 0;
    increm.next = function() {
        this.val++;
        let nxt = { done: false, value: this.val };
        return nxt;
    }
    increm[Symbol.iterator] = function*() {
        return this.next();
    }
    return increm;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(function() { resolve(param); }, 1010);    
    });
    return promise;
};

const getDeepPropertiesCount = (obj) => {
    let count = 0;
    let multiPropArray = [];
    multiPropArray.push(obj);
    let temp;
    for(let element of multiPropArray) {
        let iPropArray = Object.values(element);
        let j = iPropArray.length;
        for(let i = 0; i < iPropArray.length; i++) {
            if(Object.values(iPropArray[i]) != 0) {
                multiPropArray.push(iPropArray[i]);
                j--;
            }
        }
        count = count + 1 + j;
    }
    return --count;
};
const createSerializedObject = () => {
    let str = new String();
    str.valueOf = function() {
        return this.toString();
    }
    return str;
};
const toBuffer = () => {};
const sortByProto = (objectArray) => {
    return objectArray.sort(function(left, right) {
         while(left.__proto__ !== null) {
            if(left.__proto__ === right) {
                return -1;
            }
            left = left.__proto__;
        }
        return 1;
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;