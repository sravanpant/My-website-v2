import Image from "next/image";
import React from "react";
import cryptoTokenImg from "/public/assets/projects/cryptoToken.png";
import dbankImg from "/public/assets/projects/dbank-app.png";
import keeperImg from "/public/assets/projects/keeper-app.png";
import whitelistImg from "/public/assets/projects/whitelist-dapp.png";
import nftImg from "/public/assets/projects/nft-collection.png";
import icoImg from "/public/assets/projects/ico.png";
import daoImg from "/public/assets/projects/dao.png";
import dexImg from "/public/assets/projects/dex.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Whitelist DApp"
            backgroundImg={whitelistImg}
            projectInfo="React JS, Solidity & Ethereum Blockchain"
            projectUrl="https://github.com/sravanpant/Whitelist-Dapp"
            projectWebsite="https://whitelist-dapp-navy-one.vercel.app/"
          />
          <ProjectItem
            title="NFT Collection"
            backgroundImg={nftImg}
            projectInfo="React JS, Solidity & Ethereum Blockchain"
            projectUrl="https://github.com/sravanpant/NFT-Collection"
            projectWebsite="https://nft-collection-k91j.vercel.app/"
          />
          <ProjectItem
            title="Initial Coin Offering"
            backgroundImg={icoImg}
            projectInfo="React JS, Solidity & Ethereum Blockchain"
            projectUrl="https://github.com/sravanpant/Initial-Coin-Offering"
            projectWebsite="https://ico-ebon-iota.vercel.app/"
          />
          <ProjectItem
            title="Decentralized Autonomous Organization"
            backgroundImg={daoImg}
            projectInfo="React JS, Solidity & Ethereum Blockchain"
            projectUrl="https://github.com/sravanpant/DAO"
            projectWebsite="https://building-a-dao-ten.vercel.app/"
          />

          <ProjectItem
            title="Decentralised Crypto Exchange"
            backgroundImg={dexImg}
            projectInfo="React JS, Solidity & Ethereum Blockchain"
            projectUrl="https://github.com/sravanpant/DEX"
            projectWebsite="https://dex-sandy.vercel.app/"
          />
          <ProjectItem
            title="ICP Crypto Token"
            backgroundImg={cryptoTokenImg}
            projectInfo="Motoko & ICP Blockchain"
            projectUrl="https://github.com/sravanpant/My-Crypto-token"
            projectWebsite="https://yzzpr-eaaaa-aaaal-qbd6a-cai.raw.ic0.app/"
          />
          <ProjectItem
            title="Dbank App"
            backgroundImg={dbankImg}
            projectInfo="Motoko & ICP Blockchain"
            projectUrl="https://github.com/sravanpant/dbank-project"
            projectWebsite="https://wsxmw-ciaaa-aaaal-qbc7q-cai.ic0.app/"
          />
          <ProjectItem
            title="Keeper App"
            backgroundImg={keeperImg}
            projectInfo="React JS"
            projectUrl="https://github.com/sravanpant/Keeper-App-react-project"
            projectWebsite="https://wbiby3.csb.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
