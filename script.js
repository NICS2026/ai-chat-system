async function send() {
    let input = document.getElementById("input");
    let message = input.value;

    if (!message) return;

    let chat = document.getElementById("chat");

    chat.innerHTML += `<div style="color:blue">Wewe: ${message}</div>`;
    input.value = "";

    let res = await fetch("/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
    });

    let data = await res.json();

    chat.innerHTML += `<div style="color:green">AI: ${data.reply}</div>`;
    chat.scrollTop = chat.scrollHeight;
}
