// Basic example proxy

const handler = {
    get: function (obj, prop) {
        return prop in obj ?
            obj[prop] :
            37;
    }

};

const p = new Proxy({}, handler);
p.a = "Hello";
p.b = undefined;

console.log(p.a, p.b);
console.log(p.c);