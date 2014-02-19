/// <reference path="bluebird.d.ts" />

// Project: https://github.com/petkaantonov/bluebird
// Tests by: Bart van der Schoor <https://github.com/Bartvds>

// Note: replicate changes to all overloads in both definition and test file
// Note: keep both static and instance members inline (so similar)

// Note: try to maintain the seperators to maintain some structure

var obj:Object;
var bool:boolean;
var num:number;
var str:string;
var x:any;
var f:Function;
var func:Function;
var arr:any[];
var exp:RegExp;
var anyArr:any[];
var strArr:string[];
var numArr:number[];

// - - - - - - - - - - - - - - - - -

var value:any;
var reason:any;
var insanity:any;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numProm:Promise<number>;
var strProm:Promise<string>;
var anyProm:Promise<any>;
var boolProm:Promise<boolean>;
var objProm:Promise<Object>;
var voidProm:Promise<void>;

// - - - - - - - - - - - - - - - - -

var numThen:Thenable<number>;
var strThen:Thenable<string>;
var anyThen:Thenable<any>;
var boolThen:Thenable<boolean>;
var objThen:Thenable<Object>;
var voidThen:Thenable<void>;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

var numArrProm:Promise<number[]>;
var strArrProm:Promise<string[]>;
var anyArrProm:Promise<any[]>;

var numPromArr:Promise<number>[];
var strPromArr:Promise<string>[];
var anyPromArr:Promise<any>[];

// - - - - - - - - - - - - - - - - -

var numArrThen:Thenable<number[]>;
var strArrThen:Thenable<string[]>;
var anyArrThen:Thenable<any[]>;

var numThenArr:Thenable<number>[];
var strThenArr:Thenable<string>[];
var anyThenArr:Thenable<any>[];

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// booya!
var strPromArrProm:Promise<Promise<string>>[];
var strThenArrThen:Thenable<Thenable<string>>[];

var resolver:PromiseResolver<string>;

var strInspection:PromiseInspection<string>;
var strInspectionArrProm:Promise<PromiseInspection<string>[]>;

var arrLike:ArrayLike;

var BlueBird:typeof Promise;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = new Promise((resolve:(value:string) => void, reject:(reason:any) => void) => {
    if (true) {
        resolve(str);
    }
    else {
        reject(new Error(str));
    }
});
strProm = new Promise((resolve:(value:string) => void) => {
    if (true) {
        resolve(str);
    }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

num = arrLike.length;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

resolver.resolve(str);

resolver.reject(str);

resolver.progress(str);

resolver.callback = () => {

};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = strInspection.isFulfilled();

bool = strInspection.isRejected();

bool = strInspection.isPending();

str = strInspection.value();

x = strInspection.error();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.then((value:string) => {
    return num;
}, (reason:any) => {
    return num;
});
numProm = strProm.then((value:string) => {
    return num;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.catch((reason:any) => {
    return num;
});
numProm = strProm.caught((reason:any) => {
    return num;
});

numProm = strProm.catch((reason:any) => {
    return num;
}, (reason:any) => {
    return num;
});
numProm = strProm.caught((reason:any) => {
    return num;
}, (reason:any) => {
    return num;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.catch(Error, (reason:any) => {
    return num;
});
numProm = strProm.caught(Error, (reason:any) => {
    return num;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.error((reason:any) => {
    return num;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = strProm.finally((value:string) => {
    // return is ignored
    return str;
});
strProm = strProm.lastly((value:string) => {
    // return is ignored
    return str;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = strProm.bind(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.done((value:any) => {
    return num;
}, (reason:any) => {
    return num;
}, (note:any) => {

});
numProm = strProm.done((value:any) => {
    return num;
}, (reason:any) => {
    return num;
});
numProm = strProm.done((value:any) => {
    return num;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.done((value:any) => {
    return numThen;
}, (reason:any) => {
    return numThen;
}, (note:any) => {

});
numProm = strProm.done((value:any) => {
    return numThen;
}, (reason:any) => {
    return numThen;
});
numProm = strProm.done((value:any) => {
    return numThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = strProm.progressed((note:any) => {
    return str;
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = strProm.delay(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = strProm.timeout(num);
strProm = strProm.timeout(num, str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm.nodeify();
strProm.nodeify(num);
strProm = strProm.nodeify(function (err:any) {

});
strProm = strProm.nodeify(function (err:any, str?:string) {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.fork((value:any) => {
    return num;
}, (reason:any) => {
    return num;
}, (note:any) => {

});
numProm = strProm.fork((value:any) => {
    return num;
}, (reason:any) => {
    return num;
});
numProm = strProm.fork((value:any) => {
    return num;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.fork((value:any) => {
    return numThen;
}, (reason:any) => {
    return numThen;
}, (note:any) => {

});
numProm = strProm.fork((value:any) => {
    return numThen;
}, (reason:any) => {
    return numThen;
});
numProm = strProm.fork((value:any) => {
    return numThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// strProm = strProm.cancel<number>();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = strProm.cancellable();
strProm = strProm.uncancellable();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

bool = strProm.isCancellable();
bool = strProm.isFulfilled();
bool = strProm.isRejected();
bool = strProm.isPending();
bool = strProm.isResolved();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strInspection = strProm.inspect();

anyProm = strProm.call(str);
anyProm = strProm.call(str, 1, 2, 3);

//TODO enable get() test when implemented
// numProm = strProm.get(str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = strProm.return(num);
numProm = strProm.thenReturn(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// strProm
strProm = strProm.throw(num);
strProm = strProm.thenThrow(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

str = strProm.toString();
str = numProm.toString();

obj = strProm.toJSON();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO enable spread
/*
strProm = strArrProm.spread((one:string, two:string) => {
    return num;
}, (reason:any) => {
    return num;
});
numProm = strArrProm.spread((one:string, two:string) => {
    return num;
});*/

// - - - - - - - - - - - - - - - - -
/*
numProm = strArrProm.spread((one:string, two:string) => {
    return numThen;
}, (reason:any) => {
    return numThen;
});
numProm = strArrProm.spread((one:string, two:string) => {
    return numThen;
});
*/
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO implement instance collection methods
/*
 strProm = strProm.all();

 strProm = strProm.props();

 strProm = strProm.settle();

 strProm = strProm.any();

 strProm = strProm.some();

 strProm = strProm.race();
 */

//TODO implement instance collection iterators
/*
 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 numProm = strProm.map((item:any, index:number, arrayLength:number) => {
 return num;
 });

 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 numProm = strProm.reduce((total:number, memo:any, index:number, arrayLength:number) => {
 return memo;
 });

 // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

 numProm = strProm.filter((item:any, index?:number, arrayLength?:number) => {
 return bool;
 });
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

///TODO enable try tests
/*
 strProm = Promise.try(() => {});
 strProm = Promise.try(() => {}, arr);
 strProm = Promise.try(() => {}, arr, x);
 strProm = Promise.try(() => {}, arrLike);
 strProm = Promise.try(() => {}, arrLike, x);
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = Promise.attempt(() => {
    return str;
});
strProm = Promise.attempt(() => {
    return str;
}, arr);
strProm = Promise.attempt(() => {
    return str;
}, arr, x);

// - - - - - - - - - - - - - - - - -

strProm = Promise.attempt(() => {
    return strThen;
});
strProm = Promise.attempt(() => {
    return strThen;
}, arr);
strProm = Promise.attempt(() => {
    return strThen;
}, arr, x);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = Promise.attempt(() => {
    return str;
}, arrLike);
strProm = Promise.attempt(() => {
    return str;
}, arrLike, x);

// - - - - - - - - - - - - - - - - -

strProm = Promise.attempt(() => {
    return strThen;
}, arrLike);
strProm = Promise.attempt(() => {
    return strThen;
}, arrLike, x);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

func = Promise.method(function () {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = Promise.resolve(str);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

voidProm = Promise.reject(reason);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

resolver = Promise.defer();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strProm = Promise.cast(str);
strProm = Promise.cast(strThen);

voidProm = Promise.bind(x);

bool = Promise.is(value);

Promise.longStackTraces();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO enable delay

strProm = Promise.delay(strThen, num);
// strProm = Promise.delay(value, num);
voidProm = Promise.delay(num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

func = Promise.promisify(f);
func = Promise.promisify(f, obj);
;

obj = Promise.promisifyAll(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO enable generator
/*
 func = Promise.coroutine(f);

 numProm = Promise.spawn<number>(f);
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

BlueBird = Promise.noConflict();

Promise.onPossiblyUnhandledRejection((reason:any) => {

});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
//strArrProm = Promise.all(strThenArrProm);
//strArrProm = Promise.all(strArrProm);
strArrProm = Promise.all(strThenArr);
strArrProm = Promise.all(strArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

objProm = Promise.props(objProm);
objProm = Promise.props(obj);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
//strInspectionArrProm = Promise.settle(strThenArrProm);
//strInspectionArrProm = Promise.settle(strArrProm);
strInspectionArrProm = Promise.settle(strThenArr);
strInspectionArrProm = Promise.settle(strArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
//strProm = Promise.any(strThenArrProm);
//strProm = Promise.any(strArrProm);
strProm = Promise.any(strThenArr);
strProm = Promise.any(strArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
//strProm = Promise.race(strThenArrProm);
//strProm = Promise.race(strArrProm);
strProm = Promise.race(strThenArr);
strProm = Promise.race(strArr);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
//strArrProm = Promise.some(strThenArrProm, num);
//strArrProm = Promise.some(strArrProm, num);
strArrProm = Promise.some(strThenArr, num);
strArrProm = Promise.some(strArr, num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strArrProm = Promise.join(str, str, str);
strArrProm = Promise.join(strProm, strProm, strProm);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// map()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
numArrProm = Promise.map(strThenArr, (item:string) => {
    return num;
});
numArrProm = Promise.map(strThenArr, (item:string) => {
    return numThen;
});
numArrProm = Promise.map(strThenArr, (item:string, index:number, arrayLength:number) => {
    return num;
});
numArrProm = Promise.map(strThenArr, (item:string, index:number, arrayLength:number) => {
    return numThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numArrProm = Promise.map(strArr, (item:string) => {
    return num;
});
numArrProm = Promise.map(strArr, (item:string) => {
    return numThen;
});
numArrProm = Promise.map(strArr, (item:string, index:number, arrayLength:number) => {
    return num;
});
numArrProm = Promise.map(strArr, (item:string, index:number, arrayLength:number) => {
    return numThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// reduce()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
numProm = Promise.reduce(strThenArr, (memo:number, item:string) => {
    return memo;
}, num);
numProm = Promise.reduce(strThenArr, (memo:number, item:string) => {
    return numThen;
}, num);
numProm = Promise.reduce(strThenArr, (memo:number, item:string, index:number, arrayLength:number) => {
    return memo;
}, num);
numProm = Promise.reduce(strThenArr, (memo:number, item:string, index:number, arrayLength:number) => {
    return numThen;
}, num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

numProm = Promise.reduce(strArr, (memo:number, item:string) => {
    return memo;
}, num);
numProm = Promise.reduce(strArr, (memo:number, item:string) => {
    return numThen;
}, num);
numProm = Promise.reduce(strArr, (memo:number, item:string, index:number, arrayLength:number) => {
    return memo;
}, num);
numProm = Promise.reduce(strArr, (memo:number, item:string, index:number, arrayLength:number) => {
    return numThen;
}, num);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// filter()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//TODO expand tests to overloads
strArrProm = Promise.filter(strThenArr, (item:string) => {
    return true;
});
strArrProm = Promise.filter(strThenArr, (item:string) => {
    return boolThen;
});
strArrProm = Promise.filter(strThenArr, (item:string, index:number, arrayLength:number) => {
    return true;
});
strArrProm = Promise.filter(strThenArr, (item:string, index:number, arrayLength:number) => {
    return boolThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

strArrProm = Promise.filter(strArr, (item:string) => {
    return true;
});
strArrProm = Promise.filter(strArr, (item:string) => {
    return boolThen;
});
strArrProm = Promise.filter(strArr, (item:string, index:number, arrayLength:number) => {
    return true;
});
strArrProm = Promise.filter(strArr, (item:string, index:number, arrayLength:number) => {
    return boolThen;
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
