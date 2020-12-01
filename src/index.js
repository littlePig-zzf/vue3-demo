const obj = {
    name: 1,
    age: 2,
    c: {
        a: 9,
    },
};

const obj1 = {
    name: 3,
    sex: '女',
    c: {
        a: [6],
    },
};

function extend() {
    let target = arguments[0];
    const { length } = arguments;
    let deep = false;
    let i = 1;
    let options;
    let copy;
    let src;

    if (typeof target === 'boolean') {
        deep = target;
        target = arguments[i] || {};
        i++;
    }

    if (typeof target !== 'object') {
        target = {};
    }

    for (; i < length; i++) {
        options = arguments[i];
        if (options !== {}) {
            for (const name in options) {
                src = target[name];
                copy = options[name];
                console.log(src, copy);
                if (deep && copy && typeof copy === 'object') {
                    target[name] = extend(deep, src, copy);
                } else if (copy !== undefined) {
                    target[name] = copy;
                }
            }
        }
    }
    return target;
}

extend(true, obj, obj1);
