function copyTheCode(code) {
    let copyCode = document.getElementById(code);

    copyCode.select();
    copyCode.setSelectionRange(0, 99999);

    document.execCommand("copy"); //API

    // alert("Copied!");
    document.getElementById('copy-alert').style.display = "block";
    setTimeout(function() {
        document.getElementById('copy-alert').style.display = "none";
    }, 1500);
};

