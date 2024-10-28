# Coaching Program Information Page

## How to add materi?

Ada dua hal yang perlu diperhatikan untuk menambahkan file:

1. update json pada [src/\_data](src/_data/) untuk menampilkan materi pada web
2. update file pada [public/materi](public/materi/) agar dapat didownload

Pada folder [public/materi](public/materi/), hanya ada boleh 3 main folder, yaitu `web`, `mobile`, dan `game`.
Lalu masing-masing sub-folder pada ketiga folder utama tersebut, ditentukan sesuai dengan data yang ditulis pada [src/\_data](src/_data/).

#### Contoh

Untuk menambahkan materi pada bidang Web, buka file [src/\_data/3-webCurriculum.json](src/_data/3-webCurriculum.json), lalu ikuti format yang ada, seperti:

```json
[
  {
    "title": "Pengenalan Javascript",
    "description": "Belajar dasar-dasar Javascript, tools yang digunakan, dan konsep-konsep dasar pemrograman.",
    "subFolder": "week1",
    "listFiles": ["Javascript.docx", "Javascript.pptx", "Javascript.txt"]
  }
  {
    "title": "React.js Lanjutan",
    "description": "Belajar React Hooks, React Router, dan state management.",
    "subFolder": "", // contoh jika belum ada materi
    "listFiles": []
  }
]
```

Untuk contoh diatas, berarti pada [public/materi](public/materi/), harus ada main folder `web` dan subfolder `week1`, jadi seperti ini: [public/materi/web/week1](public/materi/web/week1/), dan isi dari sub-folder tersebut harus sesuai dengan yang didaftarkan pada `listFiles` json diatas. Jika belum ada, maka kosongkan seperti contoh data kedua.

Note: Steps yang ditampilkan akan sesuai dengan format json yang dibuat (dari atas kebawah), begitu juga dengan posisi penamaan file pada property `listFiles`.

Note: Pastikan `subFolder` dan `listFiles` memiliki penamaan yang sama dengan folder dan file aslinya, karena ini case sensitive.

Setelah selesai, lakukan testing dengan melakukan download pada file, lalu PASTIKAN DENGAN MEMBUKA FILENYA, karena jika terjadi kesalahan pada nama file yang tidak cocok, browser akan tetap melakukan download, namun akan menjadi file kosongan (belum ada error handling untuk not exists file).

## Development Setup

1. Use [Bun](https://bun.sh/) as a runtime.

```bash
npm install -g bun
```

2. Run this command to start develop:

```bash
bun install # for the first time
```

```bash
bun run dev # for continous dev
```

3. Before push, make sure to run:

```bash
bun run lint
```

to check any eslint error, and run:

```bash
bun run build
bun run preview
```

to check for production web (THIS IS A MUST!).

4. PR to master branch from your created branch, and wait for a review and merge from product owner.
