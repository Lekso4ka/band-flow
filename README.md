# Git Flow для самых маленьких


- Создать ветку и переключиться на нее
    > git checkout -b name

- Проверить все ветки в локальной папке
    > git branch


### Каждый раз, когда кто-то сделал новую версию

- Вернуться в другую ветку
    > git checkout master

- Получить актуальную ветку master
    > git pull origin master

- Вернуться к себе в ветку
    > git checkout name

- Обновить свою ветку с учетом новых правок
    > git merge master

Если есть конфликты - они выделены красным
Их исправляем прямо в тех фалйах, которые помечены конфликтными (обращайте внимание на терминал - все файлы указаны в терминале)

> add + commit + push origin name

> **name** - название своей ветки