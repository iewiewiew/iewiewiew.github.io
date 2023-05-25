#!/bin/zsh

#仅复制交给 git 管理的文件(包含中文文件)
git ls-files -z | xargs -0 -I {} rsync -R "{}" /Users/menghuawei/IdeaProjects/my-project/iewiewiew.github.io/my-website/docs/

#git log --pretty=format:"%h %s"
#git reset --soft da608933b8fad443e4282bb603b3b94b3272633d

cd my-website
#git submodule add git@github.com:iewiewiew/wei-notebook.git ./docs
git submodule update -f --remote docs

git add . && git commit --amend -m "feat: 提交笔记" && git push -f origin main
#git add . && git commit --amend -m "feat: 提交笔记" && git push -f origin gh-pages

npm run build
#npm run serve
#npm run deploy

#npx docusaurus start
npm start

