export function px2rem (px) {
    const ratio = 375 / 10
    return px / ratio
}

export function realPx (px) {
    const maxWidth = window.innerWidth > 500 ? 500 : window.innerWidth
    return px * (maxWidth / 375)
}

// 从一个给定的数组arr中,随机返回num个不重复项
export function getArrayItems (arr, num) {
    // 新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组
    const tempArray = []
    for (let index in arr) {
        tempArray.push(arr[index])
    }
    // 取出的数值项,保存在此数组
    const returnArray = []
    for (let i = 0; i < num; i++) {
        // 判断如果数组还有可以取出的元素,以防下标越界
        if (tempArray.length > 0) {
            // 在数组中产生一个随机索引
            let arrIndex = Math.floor(Math.random() * tempArray.length)
            // 将此随机索引的对应的数组元素值复制出来
            returnArray[i] = tempArray[arrIndex]
            // 然后删掉此索引的数组元素,这时候temp_array变为新的数组
            tempArray.splice(arrIndex, 1)
        } else {
            // 数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
            break
        }
    }
    return returnArray
}
