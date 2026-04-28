function sumValues(num1, num2, add) {
    // If either input is not a number, return false
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }

    if (add) {
        let result = 0;
        result = num1 + num2;
        return result;
    }
    else {
        return false;  
    }
}

function discountPrices(prices, discount) {
    // Return false if prices is empty or not an array, or discount is not a number
    if (!Array.isArray(prices) || prices.length === 0 || typeof discount !== 'number') {
        return false;  // ✅ was: missing these guard clauses entirely
    }

    const discounted = [];
    const length = prices.length;
    let discountedPrice = 0;
    for (let i = 0; i < length; i++) {
        discountedPrice = prices[i] * (1 - discount);  
        discounted.push(discountedPrice);
    }

    return discounted;
}

module.exports = {sumValues, discountPrices};