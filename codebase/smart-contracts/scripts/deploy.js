const main = async () => {
  const DeCertFactory = await hre.ethers.getContractFactory(
    "DeCert"
  );
  const DeCertContract = await DeCertFactory.deploy();

  await DeCertContract.deployed();

  console.log(
    "DeCert:",
    DeCertContract.address
  );
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();