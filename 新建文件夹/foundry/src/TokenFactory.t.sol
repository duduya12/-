// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import 'forge-std/Test.sol';
import '../../contracts/TokenFactory.sol';
contract TokenFactoryTest is Test {
  TokenFactory factory;
  function setUp() public {
    factory = new TokenFactory();
  }
  function testCreateToken() public {
    address token = factory.createToken('T','T', 1000);
    address[] memory tokens = factory.getTokensOf(address(this));
    assertEq(tokens[0], token);
  }
}
