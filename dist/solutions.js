const multiplyValue = (value, multiplier) => {
    if (value && multiplier) {
        return value * multiplier;
    }
    return value * 2;
};
console.log(multiplyValue(1));
export {};
