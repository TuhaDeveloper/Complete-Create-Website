
// const one = (callback) => {
//     console.log('taks1');
//     callback();
// }

const task1 = () => {
    return new Promise((resolve, reject) => {
        resolve('one compled')
    })
}

const task2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('two compled')

        }, 2000);
    })
}

const task3 = () => {
    return new Promise((resolve, reject) => {
        reject('three compled')
    })
}

const all = async () => {
    try {
        console.log(await task1())

        const t2 = await task2();
        console.log(t2)


    } catch (e) {
        console.log(e)
    }
}
all()


// const two = (callback) => {
//     setTimeout(() => {
//         console.log('task.2 data loading');
//         callback()
//     }, 3000);

// // }

// const three = (callback) => {
//     console.log('task3');
//     callback();
// }

// const four = () => {
//     console.log('task4');

// };
// one(() => {
//     two(() => {
//         three(() => {
//             four();
//         })
//     })
// })





// // two();
// // one(() => {
// //     two(() => {
// //         three(() => {
// //             four()
// //         });
// //     });
// // });


// // function sqr(x) {
// //     console.log(`square of ${x}:${x * x}`);
// // }
// // function highorder(num, callback) {
// //     callback(num);
// // }
// // highorder(6, sqr);


// //how to create promise
// const promise1 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('completed pomise 1')
//     }, 2000);

// });
// const promise2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('completed pomise 1')
//     }, 1000);

// });
// Promise.race([promise1, promise2])
//     .then((res) => {
//         console.log(res)
//     })
