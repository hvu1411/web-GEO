# web-GEO — Top 6 điện thoại giá rẻ cho công nhân 2026

Trang tĩnh minh họa cách tối ưu nội dung cho các công cụ AI (GEO — Generative Engine Optimization).
Mục tiêu: cấu trúc rõ ràng, schema JSON-LD để AI dễ trích xuất, và trải nghiệm nhẹ cho người dùng di động.

## Nội dung dự án
- `index.html` — trang chính (HTML + JSON-LD: WebPage, Article, ItemList, FAQPage)
- `style.css` — CSS mobile-first, tối ưu tốc độ
- `script.js` — JS tối giản cho accessibility
- `robots.txt`, `sitemap.xml` — hỗ trợ crawler

## Triển khai (gợi ý)

1. Thay `https://example.com/web-GEO/` trong `index.html` và `sitemap.xml` bằng domain thật trước khi public.
2. Deploy tĩnh lên Vercel / Netlify / GitHub Pages.

Vercel (nhanh):
```
npm install -g vercel
vercel
vercel --prod
```

Netlify (CLI):
```
npm install -g netlify-cli
netlify deploy --dir=.
netlify deploy --prod --dir=.
```

GitHub Pages:
1. Push repo lên GitHub.
2. Settings → Pages → Chọn branch `main` và root `/`.

## Kiểm tra kỹ thuật (bắt buộc trước khi test AI)

- Dùng **Google Rich Results Test** để kiểm tra JSON-LD (WebPage/Article/FAQPage) — sửa nếu có lỗi.
- Dùng **validator.schema.org** để xác nhận `@graph` hợp lệ.
- Chạy **PageSpeed Insights** hoặc Lighthouse để đo Performance & Core Web Vitals.

## GEO Testing — kiểm tra khả năng được AI trích dẫn

1. Submit `sitemap.xml` vào Google Search Console & Bing Webmaster Tools.
2. Yêu cầu index (Request indexing) trong GSC để Google crawl nhanh hơn.
3. Sau khi index (có thể vài giờ → vài ngày), thử các prompt sau:

Perplexity:
```
Trích dẫn nội dung / và tóm tắt Top 6 điện thoại giá rẻ cho công nhân.
```

ChatGPT (Search-enabled) / Bing / Google AI Overview:
```
Tìm và trích dẫn bài viết "Top 6 điện thoại giá rẻ cho công nhân 2026" từ domain.
```

4. Đánh giá kết quả: AI trả lời chính xác + có trích dẫn domain = thành công.

## Gợi ý tối ưu bổ sung

- Đảm bảo `robots.txt` cho phép các AI crawler (GPTBot, PerplexityBot, ClaudeBot, bingbot).
- Thêm trang nguồn tham khảo và liên kết từ các trang có uy tín (backlink) để tăng tốc độ crawl.
- Nếu cần theo dõi, lưu log truy cập và lọc user-agent của GPTBot / PerplexityBot để xác nhận crawler đã ghé.

