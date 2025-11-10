合约安全与审计清单 (简要)
- 使用 OpenZeppelin 标准库
- 权限最小化 (AccessControl) 与多签建议 (Gnosis Safe)
- 部署前：静态分析 (slither), solhint lint
- 单元测试覆盖常见路径（mint/burn/pause/edge cases）
- 合约审计（至少 1 家第三方）
- 时间锁与多签管理关键操作 (withdraw, upgrade)
- 不在合约中内置操纵市场/前端“拉盘/砸盘”功能
