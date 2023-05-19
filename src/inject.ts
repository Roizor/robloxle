const pJson = {
    version: '1.0'
}

export default function init() {
    const robloxleEntry = document.createElement('script'); // Just to test our script adding ability
    robloxleEntry.innerText = 'console.log("Robloxle v'+pJson.version+'")';
    document.body.appendChild(robloxleEntry);
}