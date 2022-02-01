/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  let result = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  let result = 0;
    while (a > 0.1) {
        a = a / 2;
        result += 1;
    }
    return result;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  const length = message.length;
    let result = '';
    let position = 0;
    do {
        result = (position + 1) % 3 === 0 ? result + '_' : result + message[position];
        position++;
    } while (position < length);

    return result;
}
