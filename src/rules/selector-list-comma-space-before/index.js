import {
  ruleMessages,
  validateOptions,
  whitespaceChecker
} from "../../utils"

import { selectorListCommaWhitespaceChecker } from "../selector-list-comma-space-after"

export const ruleName = "selector-list-comma-space-before"

export const messages = ruleMessages(ruleName, {
  expectedBefore: () => `Expected single space before ","`,
  rejectedBefore: () => `Unexpected whitespace before ","`,
  expectedBeforeSingleLine: () => `Expected single space before "," in a single-line list`,
  rejectedBeforeSingleLine: () => `Unexpected whitespace before "," in a single-line list`,
})

export default function (expectation) {
  const checker = whitespaceChecker("space", expectation, messages)
  return (root, result) => {
    validateOptions({ ruleName, result,
      actual: expectation,
      possible: [
        "always",
        "never",
        "always-single-line",
        "never-single-line",
      ],
    })

    selectorListCommaWhitespaceChecker(checker.before, root, result)
  }
}