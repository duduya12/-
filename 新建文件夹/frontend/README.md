渡渡一键发币平台 — 前端临时测试包
==========================
说明:
- 这是一个用于测试的前端静态站点模板（React + Vite + Tailwind minimal）。
- 支持链: Ethereum Sepolia, BSC Testnet, Base Sepolia, Arbitrum Sepolia, Solana Devnet.
- 本包**不包含合约 bytecode/ABI**。要测试部署功能，你需要：
  1) 在后端或本地构建生成合约 bytecode 与 ABI，或部署一个 factory 合约供前端调用。
  2) 在前端 `src/abis/` 放入 ABI/bytecode 或修改 CreateToken 页面逻辑以调用你的 factory。
部署:
- 解压 `frontend.zip`，运行 `npm install`，然后 `npm run dev`。
- 将 `.env.example` 拷贝为 `.env` 并填写 RPC（可选）。
注意:
- 在生产环境不要把私钥或私有 RPC 写入客户端代码。
- 强烈建议在真实部署前进行合约审计、多签与 time-lock。
