Commands
-----------------------------------------------------------------------------


## php errors log

tail -n 100 -f ../php_errors.log


## user rights

ssh-add -L
ssh-add ~/.ssh/id_rsa_zl
sudo service ssh restart





--------------------------------------------------------------------------

# links

This is a web page — Just words
https://justinjackson.ca/words.html

Неправильные примеры и решения
http://goodui.org/


## Напоминаю правила похвалы и благодарности:

1) Благодарим и хвалим только за действия и работу. Не стоит оценивать самого человека или отдельные его качества.
2) Благодарность и похвала должны быть конкретными: за конкретные вещи, а не работу в целом.
3) Никаких шаблонов, только персональные послания.




--------------------------------------------------------------------------

```

<?php if ($insert_lead): ?>
<?php echo $insert_lead; ?>
<?php endif; ?>

<?php if ( is_active_sidebar( 'sg2_header_menu_bar' ) ) : ?>
<?php dynamic_sidebar( 'sg2_header_menu_bar' ); ?>
<?php endif; ?>

```



--------------------------------------------------------------------------

ʕ⊙ᴥ⊙ʔ

ʕ◉ᴥ◉ʔ

༼°▽°༽

(•◡•)

(•ε•)

ʕ◕‿◕ʔ

ԅ༼･〜･༽╯


GIT
--------------------------------------------------------------------------

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
