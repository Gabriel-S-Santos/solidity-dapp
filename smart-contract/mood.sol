// O Smart Contract original foi construído na IDE do Remix. Essa é apenas uma cópia dele
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MoodDiary {
    string mood;

    // escreve o mood
    function setMood(string memory _mood) public{
        mood = _mood;
    }

    // lê o mood
    function getMood() public view returns(string memory){
        return mood;
    }

}