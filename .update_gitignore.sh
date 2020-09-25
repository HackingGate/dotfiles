#!/bin/sh

macOS='https://raw.githubusercontent.com/github/gitignore/master/Global/macOS.gitignore'
Xcode='https://raw.githubusercontent.com/github/gitignore/master/Global/Xcode.gitignore'
Emacs='https://raw.githubusercontent.com/github/gitignore/master/Global/Emacs.gitignore'
Vim='https://raw.githubusercontent.com/github/gitignore/master/Global/Vim.gitignore'
Dropbox='https://raw.githubusercontent.com/github/gitignore/master/Global/Dropbox.gitignore'

array=(${macOS} ${Xcode} ${Emacs} ${Vim} ${Dropbox})

echo '# LICENSE: https://github.com/github/gitignore/blob/master/LICENSE' > .gitignore

for i in ${array[@]}
do
    echo >> .gitignore
    echo '# START' >> .gitignore
    echo '# '${i} >> .gitignore
    curl -sL ${i} >> .gitignore
    echo '# END' >> .gitignore
done
