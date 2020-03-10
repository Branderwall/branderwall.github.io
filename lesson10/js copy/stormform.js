let severitySelector = () => {
    let severity = document.getElementById("stormseverity").value;
    document.getElementById("stormseverityvalue").textContent = severity;
}

let submitstormform = () => {
    location.href = "thanks.html";
}



