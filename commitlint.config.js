module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "docs", // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        "chore", //  改变构建流程、或者增加依赖库、工具等
        "feat", //  新增feature
        "fix", //  修复bug
        "merge", //  合并
        "perf", //  优化相关，比如提升性能、体验
        "refactor", //  代码重构，没有加新功能或者修复bug
        "revert", //   回滚到上一个版本
        "style", //  仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
        "test" // 测试用例，包括单元测试、集成测试等
      ]
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72]
  }
};
