
# Project PKK

Tugas Akhir membuat web kelas


## Installation on First Time

- Install dependency with npm
```bash
  npm install
```

- Create .env file and copy the content of .env.example file then paste it to .env.

- Create Database with the same name as `MYSQL_DB_NAME` from .env file.

- Run migration on first time (change `run` with `fresh` if you've run it before)
```bash
  node ace migration:run --seed
```

- Start server!
```bash
  npm run dev
```
## Authors

- [@JeremyJFN71](https://www.github.com/JeremyJFN71)
- [@ridwanalfarezi](https://www.github.com/ridwanalfarezi)
- [@iyanSGN](https://www.github.com/iyanSGN)
