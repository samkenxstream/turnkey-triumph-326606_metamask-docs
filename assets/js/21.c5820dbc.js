(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{362:function(t,e,a){"use strict";a.r(e);var n=a(7),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"provider-migration-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#provider-migration-guide"}},[t._v("#")]),t._v(" Provider Migration Guide")]),t._v(" "),a("p",[t._v("As noted in the "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#upcoming-breaking-changes"}},[t._v("Ethereum Provider documentation")]),t._v(", we are going to make breaking changes to our provider API and remove our injected "),a("code",[t._v("window.web3")]),t._v(".\nThis guide describes how to migrate to the new provider API, and how to replace our "),a("code",[t._v("window.web3")]),t._v(" object.")],1),t._v(" "),a("p",[t._v("All replacement APIs are live, and you can migrate at any time.\nIf you will be affected by the breaking changes, we recommend that you migrate as soon as possible.")]),t._v(" "),a("p",[t._v("You can follow "),a("a",{attrs:{href:"https://github.com/MetaMask/metamask-extension/issues/8077",target:"_blank",rel:"noopener noreferrer"}},[t._v("this GitHub issue"),a("OutboundLink")],1),t._v(" to be notified of the dates of the breaking changes once we announce them.")]),t._v(" "),a("h2",{attrs:{id:"table-of-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),a("li",[a("a",{attrs:{href:"#migrating-to-the-new-provider-api"}},[t._v("Migrating to the New Provider API")]),a("ul",[a("li",[a("a",{attrs:{href:"#handling-eth-chainid-return-values"}},[t._v("Handling eth_chainId Return Values")])]),a("li",[a("a",{attrs:{href:"#handling-the-removal-of-chainidchanged"}},[t._v("Handling the Removal of chainIdChanged")])]),a("li",[a("a",{attrs:{href:"#handling-the-removal-of-isenabled-and-isapproved"}},[t._v("Handling the Removal of isEnabled() and isApproved()")])]),a("li",[a("a",{attrs:{href:"#handling-the-removal-of-ethereum-publicconfigstore"}},[t._v("Handling the Removal of ethereum.publicConfigStore")])])])]),a("li",[a("a",{attrs:{href:"#replacing-window-web3"}},[t._v("Replacing window.web3")]),a("ul",[a("li",[a("a",{attrs:{href:"#using-window-ethereum-directly"}},[t._v("Using window.ethereum Directly")])]),a("li",[a("a",{attrs:{href:"#using-an-updated-convenience-library"}},[t._v("Using an Updated Convenience library")])]),a("li",[a("a",{attrs:{href:"#using-metamask-legacy-web3"}},[t._v("Using @metamask/legacy-web3")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"migrating-to-the-new-provider-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-the-new-provider-api"}},[t._v("#")]),t._v(" Migrating to the New Provider API")]),t._v(" "),a("h3",{attrs:{id:"handling-eth-chainid-return-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-eth-chainid-return-values"}},[t._v("#")]),t._v(" Handling "),a("code",[t._v("eth_chainId")]),t._v(" Return Values")]),t._v(" "),a("p",[t._v("Due to a long-standing bug, MetaMask's implementation of the "),a("code",[t._v("eth_chainId")]),t._v(" RPC method has returned 0-padded values for the "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#chain-ids"}},[t._v("default Ethereum chains")]),t._v(" "),a("em",[t._v("except")]),t._v(" Kovan.\nFor example, instead of "),a("code",[t._v("0x1")]),t._v(" and "),a("code",[t._v("0x2")]),t._v(", we currently return "),a("code",[t._v("0x01")]),t._v(" and "),a("code",[t._v("0x02")]),t._v(".")],1),t._v(" "),a("p",[t._v("For the time being, instead of calling the "),a("code",[t._v("eth_chainId")]),t._v(" RPC method, you should use the "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#ethereum-chainid"}},[a("code",[t._v("ethereum.chainId")]),t._v(" property")]),t._v(" and the "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#chainchanged"}},[a("code",[t._v("chainChanged")]),t._v(" event")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"handling-the-removal-of-chainidchanged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-the-removal-of-chainidchanged"}},[t._v("#")]),t._v(" Handling the Removal of "),a("code",[t._v("chainIdChanged")])]),t._v(" "),a("p",[a("code",[t._v("chainIdChanged")]),t._v(" is a typo of "),a("code",[t._v("chainChanged")]),t._v(".\nTo migrate, simply listen for "),a("code",[t._v("chainChanged")]),t._v(" instead:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Instead of this:")]),t._v("\nethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chainIdChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chainId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* handle the chainId */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do this:")]),t._v("\nethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chainChanged'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chainId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* handle the chainId */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"handling-the-removal-of-isenabled-and-isapproved"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-the-removal-of-isenabled-and-isapproved"}},[t._v("#")]),t._v(" Handling the Removal of "),a("code",[t._v("isEnabled()")]),t._v(" and "),a("code",[t._v("isApproved()")])]),t._v(" "),a("p",[t._v("Before the new provider API shipped, we added\n"),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#ethereum-metamask-isenabled-to-be-removed"}},[a("code",[t._v("_metamask.isEnabled")])]),t._v(" and\n"),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#ethereum-metamask-isapproved-to-be-removed"}},[a("code",[t._v("_metamask.isApproved")])]),t._v("\nto enable web3 sites to check if they have "),a("RouterLink",{attrs:{to:"/guide/rpc-api.html#eth-requestaccounts"}},[t._v("access to the user's accounts")]),t._v(".\n"),a("code",[t._v("isEnabled")]),t._v(" and "),a("code",[t._v("isApproved")]),t._v(" are identical, except that "),a("code",[t._v("isApproved")]),t._v(" is "),a("code",[t._v("async")]),t._v(".\nThese methods were arguably never that useful, but they are completely redundant since the introduction of MetaMask's "),a("RouterLink",{attrs:{to:"/guide/rpc-api.html#permissions"}},[t._v("permission system")]),t._v(".")],1),t._v(" "),a("p",[t._v("We recommend that you check for account access in the following ways:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("You can call the "),a("RouterLink",{attrs:{to:"/guide/rpc-api.html#wallet-getpermissions"}},[a("code",[t._v("wallet_getPermissions")]),t._v(" RPC method")]),t._v(" and check for the "),a("code",[t._v("eth_accounts")]),t._v(" permission.")],1)]),t._v(" "),a("li",[a("p",[t._v("You can call the "),a("code",[t._v("eth_accounts")]),t._v(" RPC method and the "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#ethereum-metamask-isunlocked"}},[a("code",[t._v("ethereum._metamask.isUnlocked()")]),t._v(" function")]),t._v(".")],1),t._v(" "),a("ul",[a("li",[a("p",[t._v("MetaMask has to be unlocked before you can access the user's accounts.\nIf the array returned by "),a("code",[t._v("eth_accounts")]),t._v(" is empty, check if MetaMask is locked using "),a("code",[t._v("isUnlocked()")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("If MetaMask is unlocked and you still aren't receiving any accounts, it's time to request accounts using the "),a("RouterLink",{attrs:{to:"/guide/rpc-api.html#eth-requestaccounts"}},[a("code",[t._v("eth_requestAccounts")]),t._v(" RPC method")]),t._v(".")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"handling-the-removal-of-ethereum-publicconfigstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-the-removal-of-ethereum-publicconfigstore"}},[t._v("#")]),t._v(" Handling the Removal of "),a("code",[t._v("ethereum.publicConfigStore")])]),t._v(" "),a("p",[t._v("How to handle this change depends on if and how you use the "),a("code",[t._v("publicConfigStore")]),t._v(".\nWe have seen examples of listening for provider state changes the "),a("code",[t._v("publicConfigStore")]),t._v(" "),a("code",[t._v("data")]),t._v(" event, and accessing the "),a("code",[t._v("publicConfigStore")]),t._v(" internal state directly.")]),t._v(" "),a("p",[t._v("We recommend that you search your code and its dependencies for references to "),a("code",[t._v("publicConfigStore")]),t._v(".\nIf you find any references, you should understand what it's being used for, and migrate to "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#using-the-provider"}},[t._v("one of the recommended provider APIs")]),t._v(" instead.\nIf you don't find any references, you should not be affected by this change.")],1),t._v(" "),a("p",[t._v("Although it is possible that your dependencies use the "),a("code",[t._v("publicConfigStore")]),t._v(", we have confirmed that the latest versions of the following common libraries will not be affected by this change:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ethers")])]),t._v(" "),a("li",[a("code",[t._v("web3")]),t._v(" (web3.js)")])]),t._v(" "),a("h2",{attrs:{id:"replacing-window-web3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replacing-window-web3"}},[t._v("#")]),t._v(" Replacing "),a("code",[t._v("window.web3")])]),t._v(" "),a("p",[t._v("For historical reasons, MetaMask injects "),a("a",{attrs:{href:"https://github.com/ethereum/web3.js/tree/0.20.7",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("web3@0.20.7")]),a("OutboundLink")],1),t._v(" into all web pages.\nThis version of "),a("code",[t._v("web3")]),t._v(" is deprecated, and is no longer maintained by the "),a("a",{attrs:{href:"https://github.com/ethereum/web3.js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("web3.js"),a("OutboundLink")],1),t._v(" team.")]),t._v(" "),a("p",[t._v("If your website relies on our "),a("code",[t._v("window.web3")]),t._v(" object, your Ethereum-related functionality will break when we stop injecting "),a("code",[t._v("window.web3")]),t._v(".\nContinue reading to learn more about the migration options.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Regardless of how you choose to migrate, you will probably want to read the "),a("code",[t._v("web3@0.20.7")]),t._v(" documentation, which you can find "),a("a",{attrs:{href:"https://github.com/ethereum/web3.js/blob/0.20.7/DOCUMENTATION.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"using-window-ethereum-directly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-window-ethereum-directly"}},[t._v("#")]),t._v(" Using "),a("code",[t._v("window.ethereum")]),t._v(" Directly")]),t._v(" "),a("p",[t._v("For many web3 sites, the API provided by "),a("code",[t._v("window.ethereum")]),t._v(" is more than sufficient.\nMuch of the "),a("code",[t._v("web3")]),t._v(" API simply maps to RPC methods, all of which can be requested using "),a("RouterLink",{attrs:{to:"/guide/ethereum-provider.html#ethereum-request-args"}},[a("code",[t._v("ethereum.request()")])]),t._v(".\nFor example, here are a couple of actions performed using first "),a("code",[t._v("window.web3")]),t._v(", and then their equivalents using "),a("code",[t._v("window.ethereum")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Getting Accounts\n */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.web3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accounts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" web3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accounts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.ethereum")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" accounts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_accounts'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Sending a Transaction\n */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.web3")]),t._v("\nweb3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendTransaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'from'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And so on...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handle the result")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// window.ethereum")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transactionHash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    method"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eth_sendTransaction'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    params"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'from'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0x...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And so on...")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handle the result")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transactionHash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"using-an-updated-convenience-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-an-updated-convenience-library"}},[t._v("#")]),t._v(" Using an Updated Convenience library")]),t._v(" "),a("p",[t._v("If you decide that you need a convenience library, you will have to convert your usage of "),a("code",[t._v("window.web3")]),t._v(" to an updated convenience library.\nWe recommend one of the following options.")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://npmjs.com/package/ethers",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ethers")]),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.ethers.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://npmjs.com/package/web3",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("web3")]),a("OutboundLink")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://web3js.readthedocs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentation"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"using-metamask-legacy-web3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-metamask-legacy-web3"}},[t._v("#")]),t._v(" Using "),a("code",[t._v("@metamask/legacy-web3")])]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("We strongly recommend that you consider one of the other two migration paths before resorting to this one.\nIt is not future-proof, and it is not guaranteed to work.")])]),t._v(" "),a("p",[t._v("Finally, if you just want your web3 site to continue to work, we created "),a("a",{attrs:{href:"https://npmjs.com/package/@metamask/legacy-web3",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("@metamask/legacy-web3")]),a("OutboundLink")],1),t._v(".\nThis package is a drop-in replacement for our "),a("code",[t._v("window.web3")]),t._v(" that you can add to your web3 site even before MetaMask stops injecting "),a("code",[t._v("window.web3")]),t._v(".")]),t._v(" "),a("p",[a("code",[t._v("@metamask/legacy-web3")]),t._v(" should work exactly like our injected "),a("code",[t._v("window.web3")]),t._v(", but "),a("em",[t._v("we cannot guarantee that it works perfectly")]),t._v(".\nWe will not fix any future incompatibilities between "),a("code",[t._v("web3@0.20.7")]),t._v(" and MetaMask itself, nor will we fix any bugs in "),a("code",[t._v("web3@0.20.7")]),t._v(" itself.")]),t._v(" "),a("p",[t._v("For installation and usage instructions, please see "),a("a",{attrs:{href:"https://npmjs.com/package/@metamask/legacy-web3",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);