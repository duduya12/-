渡渡一键发币平台 — 完整开发包 (Hardhat + Foundry + CI)
====================================================
内容概览：
- contracts/CustomToken.sol       -- 基本 ERC20 合约（可铸造/可销毁/AccessControl）
- contracts/TokenFactory.sol      -- 工厂合约：通过 factory 一键部署 ERC20 合约并记录映射
- hardhat/                        -- Hardhat 配置与脚本
- foundry/                        -- Foundry (forge) 基本配置与示例测试
- frontend/                       -- 之前生成的前端测试包（精简）
- .github/workflows/ci.yml        -- CI：编译、测试、构建前端、可选自动部署到 Vercel 与链上部署（需 secrets）
- scripts/                        -- 部署脚本：deployFactory.js, deployTokenViaFactory.js
- docs/SECURITY.md                -- 安全与审计 checklist

目标链：Sepolia, BSC Testnet, Arbitrum Sepolia, Solana Devnet (Solana 部分为模板)

快速开始（本地测试）:
1. 安装依赖（Node）: `npm install`
2. 编译合约: `npx hardhat compile`
3. 运行脚本（测试网）: `npx hardhat run --network sepolia scripts/deployFactory.js`
4. 使用前端：cd frontend && npm install && npm run dev

CI 自动部署说明:
- CI workflow 会在 push 时自动运行编译与测试。
- 若要启用自动前端部署到 Vercel，请在 GitHub 仓库中添加 secret: VERCEL_TOKEN、VERCEL_ORG_ID、VERCEL_PROJECT_ID。
- 若要让 CI 自动在测试网上部署合约，请添加私钥与 RPC secrets: PRIVATE_KEY, SEPOLIA_RPC, BSC_TESTNET_RPC, ARB_SEPOLIA_RPC.

重要：该包仅为开发/测试用途。生产环境请务必：合约审计、多签、time-lock、KYC/AML 合规。
