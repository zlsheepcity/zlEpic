# Update description

1. copy your scss files into subfolders
2. update file `app.scss`
3. rebuild sass¹
4. use your css in markup

## ¹)

```bash
scss -C --sourcemap=none app.scss app.css
```
or

```bash
sass --no-source-map app.scss app.css
```
