# 🎂 Happy Birthday

## Cấu trúc thư mục

```
birthday/
├── index.html          ← File chính, mở file này trên trình duyệt
├── css/
│   └── style.css       ← Toàn bộ giao diện & animation
├── js/
│   ├── stars.js        ← Hiệu ứng ngôi sao nền
│   └── main.js         ← Logic nút bấm & trái tim rơi
└── images/
    ├── photo1.jpg      ← Ảnh kỷ niệm 1
    ├── photo2.jpg      ← Ảnh kỷ niệm 2
    ├── photo3.jpg      ← Ảnh kỷ niệm 3
    ├── photo4.jpg      ← Ảnh kỷ niệm 4
    └── photo5.jpg      ← Ảnh kỷ niệm 5
```

## Cách thêm ảnh

1. Đặt ảnh của bạn vào thư mục `images/`
2. Đặt tên theo đúng: `photo1.jpg`, `photo2.jpg`, ..., `photo5.jpg`
3. Hoặc đổi tên file trong `index.html` cho phù hợp

## Cách tùy chỉnh

- **Lời chúc**: Chỉnh sửa đoạn văn trong `<div class="message">` ở `index.html`
- **Màu sắc**: Thay đổi gradient trong `css/style.css` tại dòng `background: linear-gradient(...)`
- **Số ảnh**: Thêm/bớt thẻ `<img>` trong `.film-strip` (nhớ duplicate phần dưới để loop mượt)
