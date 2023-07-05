![Logo](https://camo.githubusercontent.com/076aacc894daf3d9065f7d5bd1d7e8a3d0511668576cd66afddd0ce4af524eaa/68747470733a2f2f692e696d6775722e636f6d2f32774764454a4e2e706e67)
# Project PKK

Tugas Akhir membuat web kelas


## Installation on First Time

- Clone this repository
```bash
git clone https://github.com/JeremyJFN71/project-pkk.git
```

- Go to directory
```bash
cd project-pkk
```

- Install dependency with npm
```bash
npm install
```

- Copy the content of `.env.example` file then create `.env` file and paste from before to `.env` file.

- Create Database with the same name as `PG_DB_NAME` from `.env` file.

- Run migration
```bash
node ace migration:fresh --seed
```

- Start server!
```bash
npm run dev
```

## Authors

- [@JeremyJFN71](https://www.github.com/JeremyJFN71)
- [@ridwanalfarezi](https://www.github.com/ridwanalfarezi)
- [@iyanSGN](https://www.github.com/iyanSGN)
