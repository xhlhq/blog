(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{584:function(a,s,t){"use strict";t.r(s);var e=t(29),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%87%8D%E5%AE%9A%E5%90%91_(%E8%AE%A1%E7%AE%97%E6%9C%BA)",target:"_blank",rel:"noopener noreferrer"}},[a._v("重定向"),t("OutboundLink")],1),a._v("标准 IO 流：标准输入（STDIN，文件描述符 0）、标准输出（STDOUT，文件描述符 1）、标准错误（STDERR，文件描述符 2）。")]),a._v(" "),t("h2",{attrs:{id:"输出重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出重定向"}},[a._v("#")]),a._v(" 输出重定向")]),a._v(" "),t("h3",{attrs:{id:"_1-语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法"}},[a._v("#")]),a._v(" 1. 语法")]),a._v(" "),t("blockquote",[t("p",[a._v("切记，执行输出时记得提前备份，防止覆盖源文件 😢。")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n")])])]),t("p",[a._v("执行命令 command 然后将结果输出至 file 文件中。")]),a._v(" "),t("h3",{attrs:{id:"_2-示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例"}},[a._v("#")]),a._v(" 2. 示例")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("echo：基础操作；")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello world"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" linux.txt\n")])])])]),a._v(" "),t("li",[t("p",[a._v("cat：普遍的使用；")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" linux.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" linux1.txt\n")])])])]),a._v(" "),t("li",[t("p",[a._v("command：command 解释。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" google-chrome-stable "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" linux.txt\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"_3-扩展内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-扩展内容"}},[a._v("#")]),a._v(" 3. 扩展内容")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("错误输入：命令错误时不会生效，修改默认文件描述符输入错误提示信息；")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cho "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello world"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[a._v("2")]),a._v(">")]),a._v(" test.txt\n")])])])]),a._v(" "),t("li",[t("p",[a._v("追加输入：追加内容。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello world"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" test.txt\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"输入重定向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入重定向"}},[a._v("#")]),a._v(" 输入重定向")]),a._v(" "),t("h3",{attrs:{id:"_1-语法-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法-2"}},[a._v("#")]),a._v(" 1. 语法")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("command")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v("\n")])])]),t("p",[a._v("可以从文件获取输入。")]),a._v(" "),t("h3",{attrs:{id:"_2-示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例-2"}},[a._v("#")]),a._v(" 2. 示例")]),a._v(" "),t("p",[a._v("一般输入重定向会配合输出重定向进行使用（就我个人而言）。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# command < input > out")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" -v "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tt."')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" test.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" newTest.txt\n")])])]),t("h2",{attrs:{id:"核心使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心使用"}},[a._v("#")]),a._v(" 核心使用")]),a._v(" "),t("p",[a._v("常利用"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki//dev/null",target:"_blank",rel:"noopener noreferrer"}},[a._v("空设备"),t("OutboundLink")],1),a._v("（/dev/null）和重定向来丢弃不需要的输出流。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" /etc/hosts "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /dev/null\n")])])]),t("p",[a._v("很多时候会将其配合 "),t("code",[a._v("2>&1")]),a._v(" 进行使用，可参考 "),t("a",{attrs:{href:"http://www.kissyu.org/2016/12/25/shell%E4%B8%AD%3E%20:dev:null%202%20%3E%20&1%E6%98%AF%E4%BB%80%E4%B9%88%E9%AC%BC%EF%BC%9F/",target:"_blank",rel:"noopener noreferrer"}},[a._v("shell中>/dev/null 2>&1是什么鬼"),t("OutboundLink")],1),a._v("。")])])}),[],!1,null,null,null);s.default=r.exports}}]);