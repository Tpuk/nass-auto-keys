# Nass Auto Keys site

## Стартиране
```bash
npm install
npm run dev
```
Отвори: http://localhost:3000

## Галерия
За да качиш снимки в галерията:
1. Отвори папката `public/gallery`
2. Копирай снимките вътре
3. Кръсти ги:
   - `gallery-1.jpg`
   - `gallery-2.jpg`
   - `gallery-3.jpg`
   - до `gallery-8.jpg`
4. Рестартирай сайта с `npm run dev`

## Facebook
Добавена е Facebook страницата:
https://www.facebook.com/share/1AL6YXibfQ/

## Google Business
В `.env.example` има ред:
`NEXT_PUBLIC_GOOGLE_BUSINESS_URL=`

Смени го с реалния линк към твоя Google Business профил, когато го имаш. В момента е сложено търсене в Google за Nass Auto Keys Stara Zagora.

## Gmail форма
Не използвай основната Gmail парола. Трябва Gmail App Password.
Копирай `.env.example` като `.env.local` и попълни:
- `GMAIL_USER`
- `GMAIL_APP_PASSWORD`
- `MAIL_TO`
