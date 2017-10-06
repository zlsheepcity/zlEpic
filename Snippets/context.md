ʕ⊙ᴥ⊙ʔ

ʕ◉ᴥ◉ʔ

༼°▽°༽

(•◡•)

(•ε•)

ʕ◕‿◕ʔ

ԅ༼･〜･༽╯


# 0x5f3759df
для быстрого вычисления обратного квадратного корня


# GIT

NEW PRJ

git fetch origin master
git branch new_task origin/master
git checkout new_task

Первая команда загружает в ваш локальный репозиторий возможные изменения ветки master удалённого репозитория origin.
Вторая - создаёт локальную ветку new_task, указывающую на верхний коммит ветки origin/master.
Третья - делает ветку new_task текущей

REBASE

git fetch origin
git rebase origin/master
[...conflicts...solve...]
git rebase --continue OR git rebase --abort
