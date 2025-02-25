
// 获取最大值
export function getMaxV(distributionInfo,ValueName) {
    let max = 0
    for (let item of distributionInfo) {
        if (max < item[ValueName])
            max = item[ValueName]
    }
    return max
}

// 获取最小值
export function getMinV(distributionInfo,ValueName) {
    let min = 1000000
    for (let item of distributionInfo) {
        if (min > item[ValueName])
            min = item[ValueName]
    }
    return min
}

// 归一化处理
export function normalization(distribution, max, min) {
    // console.log(distribution);
    let normalizationRatio = ((distribution - min) / (max - min)).toFixed(2)
    if (normalizationRatio < 0.01){
        normalizationRatio = 0.01
    }
    return normalizationRatio
}