# auth
```
git config --global user.email "zl.sheepcity@gmail.com"
git config --global user.name "zlsheepcity"
git config credential.helper store
git config --list
```

# steps back
```
// previous commits step by step
git reset --soft HEAD~1

// reset single file
git checkout HEAD -- package-lock.json
```

## THE SAVEPOINT PATTERN
```
git branch savepoint

// Now, if you type git status again, you should still see a message that you're on the master branch.
git merge spiffy_new_feature

// If you want to abort the merge at this point, just type:
git reset --hard

// If YES: Delete the savepoint:
git branch -d savepoint

// If NO: Reset your branch to the savepoint:
git reset --hard savepoint

// If you want to clean up, you can now delete the savepoint with:
git branch -d savepoint
```
