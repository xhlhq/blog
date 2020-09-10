(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{463:function(a,s,t){"use strict";t.r(s);var e=t(29),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"获取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[a._v("#")]),a._v(" 获取镜像")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("格式")]),a._v(" "),t("p",[t("code",[a._v("docker pull [OPTIONS] NAME[:TAG|@DIGEST]")]),a._v("。")]),a._v(" "),t("p",[a._v("NAME 是镜像仓库名称（用来区分镜像），TAG 是镜像的标签（往往用来表示版本信息）。若不指定 TAG 则默认选择 "),t("code",[a._v("latest")]),a._v("，即最新版本。")])]),a._v(" "),t("p",[a._v("在获取镜像前可以查询是否存在对应的镜像。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker search [OPTIONS] TERM")]),a._v("\ndocker search ubuntu\n")])])]),t("h2",{attrs:{id:"镜像信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像信息"}},[a._v("#")]),a._v(" 镜像信息")]),a._v(" "),t("h3",{attrs:{id:"_1-所有镜像概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-所有镜像概览"}},[a._v("#")]),a._v(" 1. 所有镜像概览")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker images\n\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\nnginx                 v2                  c7e8f4f26fef        About an hour ago   132MB\nnginx                 latest              0901fa9da894        "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v(" days ago          132MB\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `REPOSITORY` 来自于哪个仓库，比如ubuntu表示ubuntu系列的基础镜像")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `TAG` 镜像的标签信息，比如18.04、latest表示不同的版本信息。标签只是标记，并不能标识镜像内容")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `IMAGE ID` 镜像的ID（唯一标识镜像），如果两个镜像的ID相同，说明它们实际上指向了同一个镜像，只是具有不同标签名称而已")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `CREATED` 创建时间，说明镜像最后的更新时间")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# `SIZE` 镜像大小，优秀的镜像往往体积都较小")]),a._v("\n")])])]),t("h3",{attrs:{id:"_2-指定镜像详细"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-指定镜像详细"}},[a._v("#")]),a._v(" 2. 指定镜像详细")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker inspect [OPTIONS] NAME|ID [NAME|ID...]")]),a._v("\ndocker inspect ubuntu:latest\n")])])]),t("h3",{attrs:{id:"_3-镜像历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-镜像历史"}},[a._v("#")]),a._v(" 3. 镜像历史")]),a._v(" "),t("p",[a._v("镜像文件是由多个层组成，可查看每个层的创建信息。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker history [OPTIONS] IMAGE")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("history")]),a._v(" ubuntu:latest\n")])])]),t("h2",{attrs:{id:"创建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建镜像"}},[a._v("#")]),a._v(" 创建镜像")]),a._v(" "),t("p",[a._v("创建镜像的方法主要有三种：基于已有镜像的内容创建（commit）、基于本地模板导入（import）、基于 Dockerfile 创建（build）。")]),a._v(" "),t("h3",{attrs:{id:"_1-已有容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-已有容器"}},[a._v("#")]),a._v(" 1. 已有容器")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对一个镜像进行修改后")]),a._v("\ndocker commit -m "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"修改了默认首页"')]),a._v(" webserver nginx:new\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 验证")]),a._v("\ndocker images\n")])])]),t("h3",{attrs:{id:"_2-本地模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-本地模板"}},[a._v("#")]),a._v(" 2. 本地模板")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" http://example.com/exampleimage.tgz\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" /path/to/exampleimage.tgz\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 还可以利用 `STDIN`")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" exampleimage.tgz "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" - exampleimagelocal:new\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 验证")]),a._v("\ndocker images\n")])])]),t("h3",{attrs:{id:"_3-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-dockerfile"}},[a._v("#")]),a._v(" 3. Dockerfile")]),a._v(" "),t("p",[t("code",[a._v("Dockerfile")]),a._v(" 是一个文本文件，利用给定的指令描述基于某个父镜像创建新镜像的过程。")]),a._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" ubuntu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("18.04\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" . /app\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" make /app\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CMD")]),a._v(" python /app/app.py\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker build [OPTIONS] PATH | URL | -")]),a._v("\ndocker build https://github.com/creack/docker-firefox\ndocker build -t nginx:ttt\n")])])]),t("h2",{attrs:{id:"修改镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改镜像"}},[a._v("#")]),a._v(" 修改镜像")]),a._v(" "),t("h3",{attrs:{id:"_1-添加镜像标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-添加镜像标签"}},[a._v("#")]),a._v(" 1. 添加镜像标签")]),a._v(" "),t("p",[a._v("仅添加镜像标签，实际 "),t("code",[a._v("IMAGE ID")]),a._v(" 指向同一个。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker tag ubuntu:latest myubuntu:latest\n")])])]),t("h3",{attrs:{id:"_2-删除镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除镜像"}},[a._v("#")]),a._v(" 2. 删除镜像")]),a._v(" "),t("p",[a._v("需注意 "),t("code",[a._v("docker rmi")]),a._v(" 才是删除镜像，而 "),t("code",[a._v("docker rm")]),a._v(" 是删除容器。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker rmi [OPTIONS] IMAGE [IMAGE...]")]),a._v("\ndocker rmi ubuntu:latest\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v('# Error response from daemon: conflict: unable to remove repository reference "ubuntu:latest" (must force) - container b0f36e5ede8d is using its referenced image adafef2e596e')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 正在使用中，需要先解除容器")]),a._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" b0f36e5ede8d\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 解除后再删除镜像，删除镜像还可以使用 `IMAGE ID`")]),a._v("\ndocker rmi adafef2e596e\n")])])]),t("h3",{attrs:{id:"_3-清理镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-清理镜像"}},[a._v("#")]),a._v(" 3. 清理镜像")]),a._v(" "),t("p",[a._v("系统中可能会遗留一些临时的镜像文件。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker image prune "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTIONS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"分享镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分享镜像"}},[a._v("#")]),a._v(" 分享镜像")]),a._v(" "),t("h3",{attrs:{id:"_1-save"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-save"}},[a._v("#")]),a._v(" 1. save")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker images "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 列出镜像")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker save [OPTIONS] IMAGE [IMAGE...]")]),a._v("\ndocker save -o ubuntu_18.04.tar ubuntu:18.04\n")])])]),t("h3",{attrs:{id:"_2-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-load"}},[a._v("#")]),a._v(" 2. load")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# docker load [OPTIONS]")]),a._v("\ndocker load -i ubuntu_18.04.tar\n")])])]),t("h3",{attrs:{id:"_3-hub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-hub"}},[a._v("#")]),a._v(" 3. Hub")]),a._v(" "),t("p",[a._v("还可以直接分享到 Docker Hub 公共仓库，这需要在官网注册帐号。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 模拟 nginx 打个新 tag")]),a._v("\ndocker tag nginx:latest username/nginx:latest\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# push")]),a._v("\ndocker push username/nginx:latest\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);