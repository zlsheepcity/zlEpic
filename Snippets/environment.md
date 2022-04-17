------------------------------------------------------
# LOCAL DEVELOPMENT
------------------------------------------------------

python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000
http://localhost:8000/



------------------------------------------------------
# CHROME DEBUGGER
------------------------------------------------------

```js
$0
getEventListeners($0)
setTimeout(function(){debugger;}, 3000)
document.body.contentEditable=true
```

## api

```js
console.assert(a > b, {"message":"a is not greater than b","a":a,"b":b});

console.table(data, ['collumn','collumn'])
console.table(data)

console.time('zlTimer');
console.timeEnd('zlTimer');

console.group();
console.log( 'xoxox' );
console.groupEnd();

console.log('%c zl', 'background: #222; color: #bada55');
```

```js // чтобы выводить в лог элементы, на которые в данный момент перешёл фокус:
window.focusedelement; setInterval(function(){ if(window.focusedElement != document.activeElement){window.focusedElement = document.activeElement; console.log(document.activeElement)}})
```

------------------------------------------------------
# GIT
------------------------------------------------------

User

```bash
git config --list
>>> user.name=King Kong
>>> user.email=king-kong@gmail.com

git config --global user.name "King Kong"
git config --global user.email "king-kong@gmail.com"

git config user.name "your username"
git config user.password "your password"
```

Examples

```
git merge --no-commit --squash develop
git commit --amend -m "update last commit message"
```

.gitkeep
    пустой файл, чтобы git видел пустую директорию

## Коммит вернуть (по шагу назад)

git reset --soft HEAD~1

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


# Сохранить пароль

git config credential.helper store


## NEW PRJ

```bash
git fetch origin master
git branch new_task origin/master
git checkout new_task
```

Первая команда загружает в ваш локальный репозиторий возможные изменения ветки master удалённого репозитория origin.
Вторая - создаёт локальную ветку new_task, указывающую на верхний коммит ветки origin/master.
Третья - делает ветку new_task текущей

## REBASE

```bash
git fetch origin
git rebase origin/master
[...conflicts...solve...]
git rebase --continue OR git rebase --abort
```

------------------------------------------------------
# EMBED SERVICES
------------------------------------------------------

<iframe id="YT-video-player-wrapper" class="video" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/4bi1b5w7alI?hl=en&amp;controls=1&amp;playsinline=1&amp;rel=0&amp;fs=0&amp;allowfullscreen=false&amp;enablejsapi=1&amp;origin=https%3A%2F%2F11mirrors-hotel.com&amp;widgetid=1"></iframe>
