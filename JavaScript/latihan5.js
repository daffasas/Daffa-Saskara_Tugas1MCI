console.log("Saya Daffa Saskara")
console.log("Dan berikut adalah 5 Resolusi saya di tahun 2023 ini :", "\n")


function target(callback) {
  setTimeout(() => {
    callback("1. MENJADI ADMIN LAB MCI 2023!!!");
  }, 1000);
}

function printResult(a) {
  console.log(a);
}

target(printResult);


function target1(callback) {
  setTimeout(function () {
    callback("2. Aktif dalam hal akademik maupun organisasi");
  }, 2000); 
}

function printTarget(target) {
  console.log(target);
}

target1(printTarget);


function target2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("3. Memiliki IP diatas 3.7");
    }, 3000); 
  });
}

async function printTarget2() {
  try {
    const target = await target2();
    console.log(target);
  } catch (error) {
    console.log(error.message);
  }
}

printTarget2();


function target3() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("4. Ingin memperbanyak skill dalam bidang ilmu informatika lainnya");
    }, 4000); 
  });
}

async function printTarget3() {
  try {
    const target = await target3();
    console.log(target);
  } catch (error) {
    console.log(error.message);
  }
}

printTarget3();

function target4() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("5. Mendekatkan diri dengan tuhan (ini yang susah hehe)");
    }, 5000); 
  });
}

async function printTarget4() {
  try {
    const target = await target4();
    console.log(target);
  } catch (error) {
    console.log(error.message);
  }
}

printTarget4();
