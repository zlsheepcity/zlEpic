------------------------------------------------------
# GIT
------------------------------------------------------

```
git config --global user.name "King Kong"
git config --global user.email "king-kong@gmail.com"
git config --list
>>> user.name=King Kong
>>> user.email=king-kong@gmail.com

git merge --no-commit --squash develop
```

.gitkeep
    чтобы git видел пустую директорию


## Один файл вернуть как был

git checkout HEAD -- package-lock.json


## THE SAVEPOINT PATTERN

git branch savepoint

    Now, if you type git status again, you should still see a message that you're on the master branch.

git merge spiffy_new_feature

    If you want to abort the merge at this point, just type:

git reset --hard

    If YES: Delete the savepoint:

git branch -d savepoint

    If NO: Reset your branch to the savepoint:

git reset --hard savepoint

    If you want to clean up, you can now delete the savepoint with:

git branch -d savepoint



## NEW PRJ

git fetch origin master
git branch new_task origin/master
git checkout new_task

Первая команда загружает в ваш локальный репозиторий возможные изменения ветки master удалённого репозитория origin.
Вторая - создаёт локальную ветку new_task, указывающую на верхний коммит ветки origin/master.
Третья - делает ветку new_task текущей

## REBASE

git fetch origin
git rebase origin/master
[...conflicts...solve...]
git rebase --continue OR git rebase --abort


------------------------------------------------------
------------------------------------------------------
