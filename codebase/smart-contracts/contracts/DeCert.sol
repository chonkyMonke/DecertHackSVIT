// SPDX-License-Identifier: MIT
// DeCert: 0xAcA7E53c64739648e7f464B8f45a18947142D4B2 (rinkeby)
// DeCert: 0xF1701675da6851267680e9f957152de47FD59b07 (mumbai)
pragma solidity ^0.8.6;
 
import "./src/contracts/tokens/nf-token-metadata.sol";
import "./src/contracts/ownership/ownable.sol";
import "./Counters.sol";
 
contract DeCert is NFTokenMetadata, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
 
  constructor() {
    nftName = "DeCert";
    nftSymbol = "DCRT";
  }
 
  function mint(address _to, string calldata _uri) external onlyOwner {
    uint256 tokenId = _tokenIdCounter.current();
    _tokenIdCounter.increment();
    super._mint(_to, tokenId);
    super._setTokenUri(tokenId, _uri);
  }
 
}