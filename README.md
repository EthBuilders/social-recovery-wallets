# ALKEMY - Social Recovery Wallet
The Guardian wallet is an Ethereum-based smart contract wallet that enables users to recover their seed phrase anytime, anywhere, in a secure, decentralized, and anonymous way.

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/EthBuilders/social-recovery-wallets">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">ALKEMY Social Recovery Wallet</h3>

  <p align="center">
    We created the Alkemy wallet to help address one of the challenges to the mass adoption of crypto currency, the fear of losing access to money forever due to forgotten passwords and lost seed phrases.  There are too many stories of early adopters who have amassed Bitcoins but have been locked out of their fortunes due to password and seed phrase mismanagement.  We hope to make the ownership and storage of crypto currency a little more forgiving than it currently is to make it easier for the everyday person to participate in the crypto economy.
    <br />
    <a href="https://github.com/EthBuilders/social-recovery-wallets"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/EthBuilders/social-recovery-wallets/issues">Report Bug</a>
    ·
    <a href="https://github.com/EthBuilders/social-recovery-wallets/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </lh i>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The team at Alkemy decided to explore the use of a defi protocol to help come up with a solution for a non-defi, real world problem.  The problem - losing access to your money forever because you forgot the password and lost the seed phrase. Our solution - split, encrypt, and distribute pieces of the seed phrase to randomly selected, anonymous members of the application.  These members, known as "Guardians" will store the piece of information until the owner of the seed phrase requests to recover it.


### Built With

* [React 17.0.1](https://reactjs.org/docs/getting-started.html)
* [React-Dom 17.0.1](https://reactjs.org/docs/react-dom.html)
* [React-Scripts 4.0.1](https://www.npmjs.com/package/react-scripts)
* [React-Bootstrap 1.0.0-beta.5](https://react-bootstrap.github.io/)
* [Rimble-UI 0.14.0](https://rimble.consensys.design/components/rimble-ui)
* [Styled-Components 5.2.1](https://styled-components.com/)
* [Truffle 5.1.45](https://www.trufflesuite.com/docs/truffle/getting-started/installation)
* [Truffle-Flattener 1.5.0](https://www.npmjs.com/package/truffle-flattener)
* [Web-Vitals 0.2.4](https://github.com/GoogleChrome/web-vitals#installation) 
* [Web3 1.2.6](https://www.npmjs.com/package/web3)
* [Chainlink VRF](https://docs.chain.link/docs/chainlink-vrf)
* [Matic](https://docs.matic.network/docs/develop/getting-started)
* [AAVE](https://docs.aave.com/developers/)
* [IPFS](https://docs.ipfs.io/install/command-line/#package-managers)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Upgrade npm
  ```sh
$nvm install node
$node -v
v15.6.0
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://https://github.com/EthBuilders/social-recovery-wallets.git
   ```
2. Install create-react-app
   ```sh
    $npx create-react-app soc-rec-wallets
    create src folder, node_modules and package.json
   ```
3. Smoke Test React
   ```sh
    $cd soc-rec-wallets 
    $npm run start
   ```
4. Add dependencies to package.json
   ```sh
    "@truffle/hdwallet-provider": "1.1.0", 
    "babel-polyfill": "6.26.0", 
    "babel-preset-env": "1.7.0",
    "babel-preset-es2015": "6.24.1",
    "babel-preset-stage-2": "6.24.1",
    "babel-preset-stage-3": "6.24.1",
    "babel-register": "6.26.0",
    "bootstrap": "4.5.2",
    "chai": "4.2.0", 
    "chai-as-promised": "7.1.1",
    "chai-bignumber": "3.0.0",
    "dotenv": "8.2.0", 
    "rimble-ui": "^0.14.0",
    "styled-components": "^5.2.1",
    "truffle": "5.1.45",
    "truffle-flattener": "1.5.0",
    "truffle-hdwallet-provider-privkey": "0.3.0",
    "web3": "1.2.6" 
   ```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/EthBuilders/social-recovery-wallets/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the [MIT License](https://github.com/EthBuilders/social-recovery-wallets/blob/master/LICENSE.txt) for more information.



<!-- CONTACT -->
<!-- ## Contact

Project Link: [https://github.com/EthBuilders/social-recovery-wallets.git](https://github.com/EthBuilders/social-recovery-wallets) -->



<!-- ACKNOWLEDGEMENTS -->
<!-- ## Acknowledgements
* []()
* []()
* []() -->





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/EthBuilders/social-recovery-wallets.svg?style=for-the-badge
[contributors-url]: https://github.com/EthBuilders/social-recovery-wallets/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/EthBuilders/social-recovery-wallets.svg?style=for-the-badge
[forks-url]: https://github.com/EthBuilders/social-recovery-wallets/network/members
[stars-shield]: https://img.shields.io/github/stars/EthBuilders/social-recovery-wallets.svg?style=for-the-badge
[stars-url]: https://github.com/EthBuilders/social-recovery-wallets/stargazers
[issues-shield]: https://img.shields.io/github/issues/EthBuilders/social-recovery-wallets.svg?style=for-the-badge
[issues-url]: https://github.com/EthBuilders/social-recovery-wallets/issues
[license-shield]: https://img.shields.io/github/license/EthBuilders/social-recovery-wallets.svg?style=for-the-badge
[license-url]: https://github.com/EthBuilders/social-recovery-wallets/blob/master/LICENSE.txt
