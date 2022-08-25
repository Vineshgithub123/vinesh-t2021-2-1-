function generate(arr,reload) {
    // requiring elements

    var a = document.getElementById('input').value;
    var v = parseInt(a)
    // applying condition for the function to be executed when input element is odd
    if (v % 2 !== 0) {
        let n = v + (v - 1)
        for (let i = 1; i <= n; i++) {
            if (i % 2 != 0) {
                var number = i
                console.log(number);
                document.getElementById("result").innerHTML +=(number+ ','  );

            }

        }
        // applying condition for the function to be executed when input element is even
    } else {
        // if (v = 2) {
        //     console.log(1);
        // } else {
            let n = v + (v - 3)
            for (let j = 1; j <= n; j++) {
                if (j % 2 != 0) {
                    var number = j;
                    console.log(number);
                    document.getElementById("result").innerHTML +=(number+ ','  );
                }
            
        }
    }
}

function refresh(){
    window.location.reload()
}