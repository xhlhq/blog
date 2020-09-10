(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{594:function(t,a,e){"use strict";e.r(a);var r=e(29),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),e("p",[t._v("AUR（Arch User Repository ），Arch 社区软件仓库，包含了一些非官方的软件。")]),t._v(" "),e("p",[t._v("Arch 的包管理器 pacman 不直接支持 AUR，支持 AUR 的工具常常被称之为 "),e("code",[t._v("AUR 助手")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"aur-助手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aur-助手"}},[t._v("#")]),t._v(" AUR 助手")]),t._v(" "),e("p",[t._v("早期使用的是 Yaourt，不过其已经不再维护，所以切换到 "),e("a",{attrs:{href:"https://github.com/Jguer/yay",target:"_blank",rel:"noopener noreferrer"}},[t._v("yay"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_1-安装-yay"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-yay"}},[t._v("#")]),t._v(" 1. 安装 yay")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://aur.archlinux.org/yay.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" yay\nmakepkg -si\n")])])]),e("h3",{attrs:{id:"_2-修改-yay-源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改-yay-源"}},[t._v("#")]),t._v(" 2. 修改 yay 源")]),t._v(" "),e("p",[t._v("yay 默认源为 "),e("code",[t._v("aur.archlinux.org")]),t._v("，为其创建配置文件即可修改源：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("yay -Syu --devel --combinedupgrade --save\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\nyay --aururl "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://aur.tuna.tsinghua.edu.cn"')]),t._v(" --save\n")])])]),e("p",[t._v("接着修改 "),e("code",[t._v(".config/yay/config.json")]),t._v("，替换为对应的"),e("a",{attrs:{href:"https://mirror.tuna.tsinghua.edu.cn/help/AUR/",target:"_blank",rel:"noopener noreferrer"}},[t._v("镜像源地址"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_3-yay-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-yay-命令"}},[t._v("#")]),t._v(" 3. yay 命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Command")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("yay <Search Term>")])]),t._v(" "),e("td",[t._v("Present package-installation selection menu.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("yay -Ps")])]),t._v(" "),e("td",[t._v("Print system statistics.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("yay -Yc")])]),t._v(" "),e("td",[t._v("Clean unneeded dependencies.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("yay -G")])]),t._v(" "),e("td",[t._v("Download PKGBUILD from ABS or AUR.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("yay -Y --gendb")])]),t._v(" "),e("td",[t._v("Generate development package database used for devel update.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("yay -Syu --devel --timeupdate")])]),t._v(" "),e("td",[t._v("Perform system upgrade, but also check for development package updates and use PKGBUILD modification time (not version number) to determine update.")])])])]),t._v(" "),e("p",[t._v("日常使用的为：")]),t._v(" "),e("p",[e("strong",[t._v("搜索：")]),e("code",[t._v("yay -Ss <package-name>")])]),t._v(" "),e("p",[e("strong",[t._v("安装：")]),t._v(" "),e("code",[t._v("yay -S <package-name>")])])])}),[],!1,null,null,null);a.default=s.exports}}]);