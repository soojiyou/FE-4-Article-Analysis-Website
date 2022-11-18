
const requestURL = async () => {
    let formText = document.getElementById('name').value;
    let requestbody = {
        url: formText
    };
    try {
        const data = await fetch('api', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestbody)
        })
            .then(res => res.json())
            .then(data => data)
        return data
        //console.log(res)

    } catch (e) {
        console.log("Error", e.message);
    }
};

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field (id:name)
    let formText = document.getElementById('name').value;

    let fetchrequestURL = requestURL;
    let resurl = Client.validUrlChecker(formText);
    if (resurl) {
        fetchrequestURL(formText)
            .then(function docresult(result) {
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

export { handleSubmit, requestURL };
