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


------------------------------------------------------
------------------------------------------------------
