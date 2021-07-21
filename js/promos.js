function copyTheCode(code) {
    let copyCode = document.getElementById(code);

    copyCode.select();
    copyCode.setSelectionRange(0, 99999);

    document.execCommand("copy"); //API

    alert("Copied!");
}

