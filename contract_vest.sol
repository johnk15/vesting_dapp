// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "./IERC20.sol";
import {ORGTOKEN} from "./ORGTOKEN.sol";

contract Vest {
    struct Stakeholder {
        address stakeHolder;
        string role;
        bool whitelisted;
        uint unlockedTime;
    }

    struct Organization {
        string name;
        string tokenName;
        string tokenSymbol;
        address tokenAddress;
        address admin;
    }

    mapping(address => mapping(uint => Stakeholder)) public _stakeholder;
    uint256 org;

    mapping(uint256 => Organization) public organizations;
    mapping(uint256 => bool) public organizationExist;

    function addOrganization(
        string memory _name,
        string memory _tokenName,
        string memory _tokenSymbol
    ) external {
        org++;
        organizationExist[org] = true;
        ORGTOKEN orgToken = new ORGTOKEN(_tokenName, _tokenSymbol);
        Organization storage newOrg = organizations[org];
        newOrg.name = _name;
        newOrg.tokenName = _tokenName;
        newOrg.tokenSymbol = _tokenSymbol;
        newOrg.admin = msg.sender;
        newOrg.tokenAddress = address(orgToken);
    }

    function addStakeHolder(
        Stakeholder memory stakeholder,
        uint256 orgId
    ) external {
        require(organizationExist[orgId], "Invalid Organization");
        _stakeholder[stakeholder.stakeHolder][orgId] = stakeholder;
    }

    function claimToken(uint _orgId, uint amountToWithdraw) external {
        require(organizationExist[_orgId], "Invalid Organization");
        Organization storage orgVest = organizations[_orgId];
        Stakeholder memory stakeholder = _stakeholder[msg.sender][_orgId];
        require(
            ((stakeholder.whitelisted &&
                stakeholder.unlockedTime < block.timestamp) ||
                msg.sender == orgVest.admin),
            "Not Permitted"
        );
        IERC20(orgVest.tokenAddress).transfer(msg.sender, amountToWithdraw);
    }
}
