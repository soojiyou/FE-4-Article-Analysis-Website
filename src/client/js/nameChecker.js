function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if (names.includes(inputText)) {
        //alert("Welcome, Captain!");
        console.log("Valid name");
        return true;
    } else {
        console.log("Invalid name");
        return false;
    }
}
export { checkForName }


//found how to check valid url from online
function validUrlChecker(str) {
    let urlpattern = new RegExp(
        '^(https?:\\/\\/)?' + // : https protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // : domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // : OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // : port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // : query string
        '(\\#[-a-z\\d_]*)?$', // : fragment locator
        'i',
    );
    if (!urlpattern.test(str)) {
        console.log("Invalid URL");
        return false;
    } else {
        console.log("Valid URL");
        //return true;
        return urlpattern.test(str);
    }
}


export { validUrlChecker };

