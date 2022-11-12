
// informações dos contratos
const MoodContractAdress = "0x4a2dc4a3DcDd470E741F3206eEbc2E14575e4A50";

const MoodContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mood",
				"type": "string"
			}
		],
		"name": "setMood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMood",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
];

let MoodContract;  
let signer;


// request das contas
const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli"); 

provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then((accounts) => {
        signer = provider.getSigner(accounts[0])
        MoodContract = new ethers.Contract(
            MoodContractAdress,
            MoodContractABI,
            signer,
        );
    });
});


// função async para chamar as funções do contrato
async function getMood() {
    const getMoodPromise = MoodContract.getMood();
    const Mood = await getMoodPromise;
    console.log(Mood)
}

async function setMood(){
    const mood = document.getElementById("mood").value;
    const setMoodPromise = MoodContract.setMood(mood);
    await setMoodPromise;
}