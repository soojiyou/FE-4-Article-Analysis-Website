// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value
//     checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8080/test')
//         .then(res => res.json())
//         .then(function (res) {
//             document.getElementById('results').innerHTML = res.message
//         })
// }





function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field (id:name)
    let formText = document.getElementById('name').value;
    let requestbody = {
        url: formText
    };
    if (Client.validUrlChecker(formText)) {
        fetch('api', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestbody)
        })
            .then(res => res.json())
            .then(function (result) {
                document.querySelector('#agreement').innerHTML = `Agreement: ${result.agreement}`;
                document.querySelector('#confidence').innerHTML = `Confidence: ${result.confidence}`;
                document.querySelector('#irony').innerHTML = `Irony:${result.irony}`;
                document.querySelector('#model').innerHTML = `Model: ${result.model}`;
                document.querySelector('#polarity').innerHTML = `Polarity: ${result.score_tag}`;
                document.querySelector('#subjectivity').innerHTML = `Subjectivity: ${result.subjectivity}`;
                console.log(result);
            })
    } else {
        alert('Try with valid URL for evaluating with NLP');
    }
}



export { handleSubmit };
