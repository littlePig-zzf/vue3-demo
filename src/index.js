var obj = {
    name: 1,
    age: 2,
    c: {
        a: 9
    }
};

var obj1 = {
    name: 3,
    sex: '女',
    c: {
        a: [6]
    }
};

function extend() {
    var target = arguments[0]
    var length = arguments.length
    var deep = false
    var i = 1
    var options, copy,src

    if (typeof target === 'boolean') {
        deep = target
        target = arguments[i] || {}
        i++
    }

    if (typeof target !== 'object') {
        target = {}
    }

    for(; i < length; i++) {
        options = arguments[i]
        if (options !== {}) {
            for(var name in options) {
                src = target[name]
                copy = options[name]
                console.log(src, copy);
                if (deep && copy && typeof copy === 'object') {
                    target[name] = extend(deep, src,copy)
                }
                else if (copy !== undefined) {
                    target[name] = copy
                }
            }
        }
    }
    return target
}

extend(true, obj, obj1);
