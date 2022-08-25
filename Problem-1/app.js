

function add() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = parseFloat(a)
    var d = parseFloat(b)

    console.log(c);
    if (isNaN(c) || isNaN(d)) {
        alert('Please Type a Number')
    }
    else {

        var s = c + d
        document.getElementById('input').value = s

    }

}

function subtract() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = parseFloat(a)
    var d = parseFloat(b)

    console.log(c);
    if (isNaN(c) || isNaN(d)) {
        alert('Please Type a Number')
    }
    else {

        var s = c - d
        document.getElementById('input').value = s

    }
}

function division() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = parseFloat(a)
    var d = parseFloat(b)

    console.log(c);
    if (isNaN(c) || isNaN(d)) {
        alert('Please Type a Number')
    }
    else {

        var s = c / d
        document.getElementById('input').value = s

    }
}

function multiply() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = parseFloat(a)
    var d = parseFloat(b)

    console.log(c);
    if (isNaN(c) || isNaN(d)) {
        alert('Please Type a Number')
    }
    else {

        var s = c * d
        document.getElementById('input').value = s

    }
}