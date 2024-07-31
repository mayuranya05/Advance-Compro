function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunnungOperation(){
    //logic
    return 42;
}

async function run() {
    //logic
    console.log("Start!!");
    await promiseTimeout(2000);
    //try to take await out and see
    const reponse = longRunnungOperation();
    console.log(reponse);

    console.log("Stop!!");
}

run();