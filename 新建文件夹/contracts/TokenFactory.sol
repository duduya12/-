// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./CustomToken.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title TokenFactory
 * @dev Simple factory to deploy CustomToken instances and record deployer
 */
contract TokenFactory is Ownable {
    // track deployed tokens by owner
    mapping(address => address[]) public ownerTokens;
    event TokenCreated(address indexed owner, address tokenAddress, string name, string symbol, uint256 initialSupply);

    function createToken(string calldata name, string calldata symbol, uint256 initialSupply) external returns (address) {
        CustomToken token = new CustomToken(name, symbol, initialSupply, msg.sender);
        ownerTokens[msg.sender].push(address(token));
        emit TokenCreated(msg.sender, address(token), name, symbol, initialSupply);
        return address(token);
    }

    function getTokensOf(address owner) external view returns (address[] memory) {
        return ownerTokens[owner];
    }
}
