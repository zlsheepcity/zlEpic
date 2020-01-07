# json-server

https://github.com/typicode/json-server


# Install

```bash
npm install -g json-server
json-server --watch server.json
```


# DB Sample

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

http://localhost:3000/posts/1
=> { "id": 1, "title": "json-server", "author": "typicode" }


# Static file server

```bash
json-server server.json --static ./
```
