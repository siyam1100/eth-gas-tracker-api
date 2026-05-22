const { JsonRpcProvider, formatUnits } = require("ethers");

// Configuration: Replace with your API key if needed
const RPC_URL = "https://cloudflare-eth.com"; 

async function trackGas() {
  const provider = new JsonRpcProvider(RPC_URL);

  console.log("--- Ethereum Network Gas Status ---");

  try {
    // Fetch fee data from the latest block
    const feeData = await provider.getFeeData();

    const gasPriceGwei = formatUnits(feeData.gasPrice, "gwei");
    const maxFeeGwei = formatUnits(feeData.maxFeePerGas, "gwei");
    const priorityFeeGwei = formatUnits(feeData.maxPriorityFeePerGas, "gwei");

    console.log(`Current Gas Price: ${parseFloat(gasPriceGwei).toFixed(2)} Gwei`);
    console.log(`Max Fee (EIP-1559): ${parseFloat(maxFeeGwei).toFixed(2)} Gwei`);
    console.log(`Max Priority Fee: ${parseFloat(priorityFeeGwei).toFixed(2)} Gwei`);
    
    // Logic for transaction recommendation
    if (parseFloat(gasPriceGwei) < 20) {
      console.log("Status: Network is currently CHEAP. Good for deployment.");
    } else {
      console.log("Status: Network is BUSY. Expect higher fees.");
    }

  } catch (error) {
    console.error("Failed to fetch gas data:", error.message);
  }
}

// Execute the tracker
trackGas();

// Polling interval (every 30 seconds)
setInterval(trackGas, 30000);
