"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).lucide) {
        (window as any).lucide.createIcons();
      }
    } catch (e) { console.error(e); }
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: `

    <header class="sticky top-0 z-40 bg-white/90 glass border-b border-slate-100 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
                <img src="https://i.postimg.cc/JhKg8VZ9/70554272-47DB-4D3A-A1AE-2782EFCAF00F.png" alt="Trần Huy Land" class="h-9 sm:h-11 w-auto object-contain select-none" />
                <div>
                    <div id="logo-header">
                        <h1 class="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">TRẦN HUY LAND</h1>
                    </div>
                    <p class="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Giỏ Hàng Thật • Pháp Lý Minh Bạch</p>
                </div>
            </div>

            <nav class="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
                <a href="#" class="hover:text-slate-900 transition-all">Trang Chủ</a>
                <a href="#listing-section" class="hover:text-slate-900 transition-all">Nhà Đất Đang Bán</a>
                <a href="#about-section" class="hover:text-slate-900 transition-all">Giới Thiệu</a>
                <a href="#blog-section" class="hover:text-slate-900 transition-all">Tin Tức Khảo Sát</a>
            </nav>

            <div class="flex items-center gap-2">
                <button onclick="moModalKyGui()" class="bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all active:scale-95 shadow-sm">
                    <i data-lucide="plus-circle" class="w-4 h-4 text-slate-900"></i> Ký Gửi Nhanh
                </button>
            </div>
        </div>
    </header>

    <section class="hero-bg text-white">
        <div class="max-w-7xl mx-auto px-4 py-20 sm:py-28">
            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-xs font-bold mb-6 tracking-wide uppercase">
                    <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span> KHO NHÀ ĐẤT CHÍNH CHỦ ĐÀ NẴNG
                </div>
                <h2 class="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
                    Nhà Thật • Giá Thật • Giao Dịch Minh Bạch
                </h2>
                <p class="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                    Chuyên phân phối nhà phố, đất nền, mặt tiền kinh doanh và nhà kiệt ô tô tại Hải Châu, Cẩm Lệ, Sơn Trà... Hình ảnh khảo sát thực tế, hỗ trợ đối chiếu sổ đỏ trực tiếp từ chủ nhà.
                </p>
                <div class="flex flex-wrap gap-4">
                    <a href="tel:0931555551" class="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3.5 rounded-2xl font-extrabold transition-all shadow-lg active:scale-95">
                        Liên Hệ Tư Vấn
                    </a>
                    <a href="https://zalo.me/0931555551" target="_blank" class="border border-white/20 hover:bg-white/10 px-6 py-3.5 rounded-2xl font-bold transition-all flex items-center gap-2">
                        Xem Giỏ Hàng Zalo
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="max-w-7xl mx-auto w-full px-4 -mt-10 relative z-10">
        <div class="bg-white p-5 sm:p-6 rounded-3xl border border-slate-100 shadow-xl space-y-4">
            <div class="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1 tracking-wider">Khu Vực</label>
                    <select id="filter-khuvuc" onchange="locTongHop()" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold focus:outline-none focus:border-amber-500 cursor-pointer text-slate-700">
                        <option value="all">Tất cả Quận Huyện</option>
                        <option value="Hải Châu">Quận Hải Châu</option>
                        <option value="Thanh Khê">Quận Thanh Khê</option>
                        <option value="Liên Chiểu">Quận Liên Chiểu</option>
                        <option value="Cẩm Lệ">Quận Cẩm Lệ</option>
                        <option value="Sơn Trà">Quận Sơn Trà</option>
                        <option value="Ngũ Hành Sơn">Quận Ngũ Hành Sơn</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1 tracking-wider">Loại Hình</label>
                    <select id="filter-loaihinh" onchange="locTongHop()" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold focus:outline-none focus:border-amber-500 cursor-pointer text-slate-700">
                        <option value="all">Tất cả Loại hình</option>
                        <option value="Nhà phố">Nhà phố / Kiệt</option>
                        <option value="Đất nền">Đất nền / Đất ở</option>
                        <option value="Căn hộ">Căn hộ / Chung cư</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1 tracking-wider">Khoảng Giá</label>
                    <select id="filter-gia" onchange="locTongHop()" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold focus:outline-none focus:border-amber-500 cursor-pointer text-slate-700">
                        <option value="all">Tất cả mức giá</option>
                        <option value="duoi3">Dưới 3 Tỷ</option>
                        <option value="3to5">Từ 3 - 5 Tỷ</option>
                        <option value="tren5">Trên 5 Tỷ</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase mb-1 ml-1 tracking-wider">Hướng Nhà</label>
                    <select id="filter-huong" onchange="locTongHop()" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold focus:outline-none focus:border-amber-500 cursor-pointer text-slate-700">
                        <option value="all">Tất cả các hướng</option>
                        <option value="Đông">Hướng Đông</option>
                        <option value="Tây">Hướng Tây</option>
                        <option value="Nam">Hướng Nam</option>
                        <option value="Bắc">Hướng Bắc</option>
                    </select>
                </div>
            </div>
            <div class="flex flex-wrap gap-2 pt-3 border-t border-slate-100 items-center">
                <span class="text-xs font-bold text-slate-400 uppercase mr-1 tracking-wider hidden sm:inline">Lọc nhanh:</span>
                <button onclick="locTheoTag(this, 'all')" class="tag-btn bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all">Tất Cả</button>
                <button onclick="locTheoTag(this, 'mattien')" class="tag-btn bg-white border border-slate-200 text-slate-600 hover:border-amber-500 hover:text-slate-900 text-xs font-bold px-4 py-2 rounded-xl transition-all">Mặt Tiền Kinh Doanh</button>
                <button onclick="locTheoTag(this, 'chinhchu')" class="tag-btn bg-white border border-slate-200 text-slate-600 hover:border-amber-500 hover:text-slate-900 text-xs font-bold px-4 py-2 rounded-xl transition-all">Hàng Chính Chủ</button>
            </div>
        </div>
    </section>

    <main id="listing-section" class="max-w-7xl mx-auto w-full px-4 mt-16 mb-20 flex-1">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
            <div>
                <p class="text-amber-500 uppercase tracking-widest text-xs font-bold mb-1.5">Giỏ hàng cập nhật liên tục</p>
                <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Nhà Đất Được Quan Tâm</h2>
            </div>
            <p class="text-sm text-slate-400 font-medium">Hình ảnh khảo sát thực tế • Không tin ảo • Cập nhật tự động</p>
        </div>

        <div id="vung-seo-static" class="sr-only">
            <h2>Danh sách nhà đất đang bán tại Hải Châu, Cẩm Lệ, Đà Nẵng</h2>
            <div id="du-lieu-crawl-bot">
                </div>
        </div>

        <div id="grid-bds" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"></div>
    </main>

    <section id="about-section" class="bg-white border-t border-b border-slate-100 py-20">
        <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div class="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 text-white shadow-xl flex flex-col justify-center">
                <p class="text-amber-400 uppercase tracking-widest text-xs font-bold mb-3">VÌ SAO CHỌN TRẦN HUY LAND</p>
                <h3 class="text-3xl font-extrabold leading-tight mb-6">Chuyên Nhà Đất Thực Tế Tại Đà Nẵng</h3>
                <div class="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <div>
                        <h4 class="text-white font-bold mb-1.5 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Hình Ảnh & Vị Trí Thật</h4>
                        <p class="text-slate-400 text-sm">Cam kết hạn chế tối đa tin ảo, hình minh họa sai lệch thực tế hoặc nhà đã giao dịch xong làm mất thời gian khách hàng.</p>
                    </div>
                    <div>
                        <h4 class="text-white font-bold mb-1.5 flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>Hỗ Trợ Pháp Lý Minh Bạch</h4>
                        <p class="text-slate-400 text-sm">Kiểm tra quy hoạch đô thị, hỗ trợ xem trực tiếp bản vẽ sổ hồng gốc và thương lượng giá cả trực tiếp với chủ tài sản.</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center bg-slate-50 border border-slate-100 p-8 sm:p-12 rounded-[2.5rem]">
                <p class="text-amber-500 uppercase tracking-widest text-xs font-bold mb-2">THỊ TRƯỜNG ĐÀ NẴNG</p>
                <h3 class="text-3xl font-extrabold text-slate-900 leading-tight mb-5">Phân Tích Địa Bàn Nổi Bật</h3>
                <div class="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 text-justify">
                    <p>Thị trường nhà đất Đà Nẵng hiện đang tập trung dòng tiền mạnh tại khu vực Hải Châu, Cẩm Lệ và Sơn Trà nhờ hạ tầng giao thông đồng bộ, mật độ cư dân sầm uất và tính khai thác mặt bằng kinh doanh dòng tiền vượt trội.</p>
                    <p>Trong khi phân khúc nhà mặt tiền trung tâm phù hợp dòng tiền lớn cho thuê, phân khúc nhà trong kiệt rộng ô tô đỗ cửa tại Cẩm Lệ luôn được các hộ gia đình trẻ săn đón nhiệt tình vì phù hợp nhu cầu định cư an toàn lâu dài.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="blog-section" class="max-w-7xl mx-auto w-full px-4 py-20">
        <div class="mb-10 text-center sm:text-left">
            <p class="text-amber-500 uppercase tracking-widest text-xs font-bold mb-2">GÓC CHIA SẺ KINH NGHIỆM</p>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Tin Tức & Kiến Thức Thị Trường</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4"><i data-lucide="building-2" class="w-5 h-5"></i></div>
                <h3 class="font-extrabold text-lg mb-3 text-slate-900 hover:text-amber-500 transition-colors">Có Nên Mua Nhà Hải Châu?</h3>
                <p class="text-slate-500 text-sm leading-relaxed text-justify">Phân tích chuyên sâu về tiềm năng tăng giá bền vững, mật độ tiện ích công cộng và nhu cầu sở hữu bất động sản lõi đô thị trung tâm Đà Nẵng.</p>
            </article>
            <article class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div class="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4"><i data-lucide="map" class="w-5 h-5"></i></div>
                <h3 class="font-extrabold text-lg mb-3 text-slate-900 hover:text-amber-500 transition-colors">Kinh Nghiệm Mua Đất Sơn Trà</h3>
                <p class="text-slate-500 text-sm leading-relaxed text-justify">Những lưu ý pháp lý quan trọng cốt lõi, kiểm tra tranh chấp ranh giới và khoảng cách an toàn khi chọn mua đất thổ cư gần biển Đà Nẵng.</p>
            </article>
            <article class="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4"><i data-lucide="car" class="w-5 h-5"></i></div>
                <h3 class="font-extrabold text-lg mb-3 text-slate-900 hover:text-amber-500 transition-colors">Nhà Kiệt Ô Tô Là Gì?</h3>
                <p class="text-slate-500 text-sm leading-relaxed text-justify">Định nghĩa lộ giới kiệt hẻm tissue chuẩn, giải thích ưu nhược điểm thực tế và cách thẩm định giá khi tìm mua phân khúc nhà kiệt ô tô ở thực.</p>
            </article>
        </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 pb-20">
        <div class="bg-gradient-to-r from-amber-500 to-yellow-400 rounded-[2.5rem] p-10 lg:p-14 text-slate-900 shadow-md">
            <div class="max-w-3xl">
                <p class="uppercase tracking-widest text-xs font-bold mb-3 tracking-wider text-slate-900/80">KÝ GỬI CHÍNH CHỦ</p>
                <h2 class="text-3xl lg:text-5xl font-extrabold leading-tight mb-5">Cần Bán Nhanh Nhà Đất Tại Đà Nẵng?</h2>
                <p class="text-base lg:text-lg leading-relaxed mb-8 font-medium text-slate-800">
                    Anh/Chị chủ nhà chỉ cần gửi thông tin sơ bộ qua hệ thống ký gửi trực tuyến hoặc liên hệ trực tiếp Zalo để được hỗ trợ kiểm tra pháp lý, khảo sát quay dựng hình ảnh bài bản và tiếp cận khách hàng thực tế nhanh nhất.
                </p>
                <div class="flex flex-wrap gap-3">
                    <button onclick="moModalKyGui()" class="bg-slate-900 hover:bg-slate-800 text-white px-7 py-4 rounded-2xl font-extrabold transition-all shadow-xl active:scale-95 text-sm">
                        Ký Gửi Trực Tuyến
                    </button>
                    <a href="tel:0931555551" class="border border-slate-900 hover:bg-slate-900/10 px-7 py-4 rounded-2xl font-extrabold transition-all text-sm flex items-center gap-2">
                        Hotline hỗ trợ: 0931 555 551
                    </a>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-slate-950 text-slate-400 text-xs mt-auto border-t border-slate-900">
        <div class="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <div class="flex items-center gap-2.5 mb-5">
                    <img src="https://i.postimg.cc/JhKg8VZ9/70554272-47DB-4D3A-A1AE-2782EFCAF00F.png" alt="Trần Huy Land" class="h-10 w-auto object-contain select-none" />
                    <div>
                        <h3 class="text-white font-extrabold text-base tracking-wide">TRẦN HUY LAND</h3>
                        <p class="text-[10px] uppercase tracking-widest text-slate-500">Giỏ Hàng Nhà Đất Thực Tế</p>
                    </div>
                </div>
                <p class="leading-relaxed text-slate-400">Chuyên phân phối, nhận ký gửi môi giới nhà phố, đất nền thổ cư, mặt tiền kinh doanh chính chủ tại địa bàn Đà Nẵng.</p>
            </div>
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">KHU VỰC KHẢO SÁT CHÍNH</h4>
                <ul class="space-y-3 text-slate-400 text-sm font-medium">
                    <li>Nhà đất Quận Hải Châu</li>
                    <li>Nhà đất Quận Cẩm Lệ</li>
                    <li>Nhà đất Quận Sơn Trà</li>
                    <li>Thị trường Bất Động Sản Đà Nẵng</li>
                </ul>
            </div>
            <div>
                <h4 class="text-white font-bold text-sm uppercase tracking-wider mb-5">THÔNG TIN LIÊN HỆ CHÍNH THỨC</h4>
                <ul class="space-y-3 text-slate-400 text-sm font-medium">
                    <li class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-slate-500"></i> Văn phòng: 26 Cẩm Bá Thước, Hải Châu, Đà Nẵng</li>
                    <li class="flex items-center gap-2"><i data-lucide="phone" class="w-4 h-4 text-slate-500"></i> Hotline tư vấn: 0931 555 551</li>
                    <li class="flex items-center gap-2"><i data-lucide="message-square" class="w-4 h-4 text-slate-500"></i> Kênh kết nối: zalo.me/0931555551</li>
                </ul>
            </div>
        </div>
        <div class="border-t border-white/5 text-center py-6 text-slate-600 font-medium max-w-7xl mx-auto px-4">
            © 2026 Trần Huy Land. Toàn bộ cấu trúc mã nguồn được tối ưu tự động hóa dữ liệu cấu trúc Google SEO. All rights reserved.
        </div>
    </footer>

    <div class="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 flex gap-3 z-30 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <button onclick="moModalKyGui()" class="flex-[2] bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold rounded-xl py-3 px-4 flex items-center justify-center gap-1.5 text-sm shadow-sm active:scale-95 transition-all">
            <i data-lucide="file-plus-2" class="w-4 h-4"></i> Ký Gửi Nhanh
        </button>
        <a href="tel:0931555551" class="flex-[1.5] bg-slate-900 text-white font-bold rounded-xl py-3 px-4 flex items-center justify-center gap-1.5 text-sm transition-transform active:scale-95 shadow-md">
            <i data-lucide="phone" class="w-3.5 h-3.5 text-amber-400 fill-amber-400"></i> Gọi Ngay
        </a>
        <a href="https://zalo.me/0931555551" target="_blank" class="flex-[1.5] bg-[#0068ff] text-white font-bold rounded-xl py-3 px-4 flex items-center justify-center text-sm transition-transform active:scale-95 shadow-md">Zalo</a>
    </div>

    <div class="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a href="https://zalo.me/0931555551" target="_blank" class="w-14 h-14 rounded-full bg-[#0068ff] text-white flex items-center justify-center shadow-2xl font-bold text-lg hover:scale-105 transition-transform" title="Liên hệ qua Zalo">
            Zalo
        </a>
        <a href="tel:0931555551" class="w-14 h-14 rounded-full bg-amber-500 text-slate-900 flex items-center justify-center shadow-2xl floating" title="Gọi thỏa thuận Hotline ngay">
            <i data-lucide="phone" class="w-5 h-5 text-slate-900 fill-slate-900/10"></i>
        </a>
    </div>

    <div id="modal-chi-tiet" class="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 hidden">
        <div id="khung-noi-dung-modal" class="bg-white w-full sm:max-w-xl rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl relative max-h-[92vh] sm:max-h-[88vh] flex flex-col">
            <button onclick="kichHoatDongModal()" class="absolute top-4 right-4 z-50 w-8 h-8 bg-slate-900/50 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-slate-900 transition-all shadow">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
            <div id="noi-dung-modal" class="overflow-y-auto flex-1 no-scrollbar"></div>
        </div>
    </div>

    <div id="modal-so-do" class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 hidden">
        <button onclick="dongModalSoDo()" class="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all">
            <i data-lucide="x" class="w-6 h-6"></i>
        </button>
        <div class="max-w-3xl w-full max-h-[85vh] flex items-center justify-center overflow-hidden rounded-xl">
            <img id="anh-so-do-popup" src="" alt="Bản vẽ sơ đồ sổ đỏ trích lục chi tiết" class="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-xl">
        </div>
    </div>

    <div id="modal-ky-gui" class="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 hidden">
        <div class="bg-white w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl p-6 relative">
            <button onclick="dongModalKyGui()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><i data-lucide="x" class="w-4 h-4"></i></button>
            <h3 class="font-extrabold text-slate-900 text-base mb-1 flex items-center gap-2"><i data-lucide="pen-tool" class="text-amber-500 w-4 h-4"></i> Ký Gửi Nhanh Trong 10s</h3>
            <p class="text-xs text-slate-400 mb-4">Thông tin đăng ký sẽ tự động soạn thảo để gửi trực tiếp sang ứng dụng Zalo của anh Huy.</p>
            <form onsubmit="xuLyGuiFormKyGui(event)" class="space-y-3 text-sm">
                <div><label class="block font-bold text-slate-600 mb-1">Tên & SĐT Liên Hệ *</label><input type="text" id="kg-ten" required placeholder="Ví dụ: Anh Nam - 0905..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500"></div>
                <div><label class="block font-bold text-slate-600 mb-1">Địa Chỉ Nhà Đất Ký Gửi *</label><input type="text" id="kg-diachi" required placeholder="Số nhà, tên đường, tên quận..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500"></div>
                <div><label class="block font-bold text-slate-600 mb-1">Giá Bán Mong Muốn</label><input type="text" id="kg-gia" placeholder="Ví dụ: 3.5 Tỷ (Để trống nếu muốn thương lượng)" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-500"></div>
                <button type="submit" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl py-3 text-sm mt-3 shadow-md transition-all active:scale-95">Xác Nhận Ký Gửi</button>
            </form>
        </div>
    </div>

    <script>
        const LINK_CSV_GOOGLE_SHEET = "https://docs.google.com/spreadsheets/d/1-LupBV6uNuUitz4vF6pFv6MupuVDMujafqhjQBNNPTA/export?format=csv&t=" + new Date().getTime();

        let danhSachBds = [];
        const ITEMS_PER_PAGE = 6; 
        let trangHienTai = 1;
        let duLieuLocHienTai = [];

        const GOC_SEO = {
            title: document.getElementById('seo-title').innerText,
            desc: document.getElementById('seo-description').getAttribute('content')
        };

        function chuyenDoiNgayThangChuan(ngayDangStr) {
            if (!ngayDangStr) return null;
            const chuoiSach = ngayDangStr.toString().replace(/[\\r\\n\\t]/g, "").trim();
            if (!chuoiSach) return null;

            const parts = chuoiSach.split(/[-/]/);
            if (parts.length === 3) {
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1; 
                const year = parseInt(parts[2], 10);
                
                if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
                    const d = new Date(year, month, day);
                    if (!isNaN(d.getTime())) return d;
                }
            }
            return null;
        }

        function tinhThoiGianCachDay(ngayDangStr) {
            const ngayDang = chuyenDoiNgayThangChuan(ngayDangStr);
            if (!ngayDang) return "Tin mới";
            
            const homNay = new Date();
            ngayDang.setHours(0,0,0,0);
            homNay.setHours(0,0,0,0);
            
            const hieuThoiGian = homNay.getTime() - ngayDang.getTime();
            const soNgay = Math.floor(hieuThoiGian / (1000 * 60 * 60 * 24));
            
            if (soNgay <= 0) return "Hôm nay";
            if (soNgay === 1) return "1 ngày trước";
            if (soNgay < 7) return \`\${soNgay} ngày trước\`;
            
            const soTuan = Math.floor(soNgay / 7);
            if (soTuan < 4) return \`\${soTuan} tuần trước\`;
            
            const soThang = Math.floor(soNgay / 30);
            if (soThang < 12) return \`\${soThang} tháng trước\`;
            
            return \`\${ngayDang.getDate()}/\${ngayDang.getMonth() + 1}/\${ngayDang.getFullYear()}\`;
        }

        function layMangHinhAnh(chuoiAnh) {
            if (!chuoiAnh) return [];
            return chuoiAnh.split(',').map(url => url.trim()).filter(url => url !== '');
        }

        function renderGiaoDien(data) {
            const grid = document.getElementById('grid-bds');
            duLieuLocHienTai = data;
            
            if(!grid) return;
            if(data.length === 0) {
                grid.innerHTML = \`<div class="col-span-full text-center py-16 text-slate-400 text-sm font-medium">Không tìm thấy sản phẩm nhà đất nào phù hợp với bộ lọc hiện tại.</div>\`;
                renderNutPhanTrang(0); return;
            }

            const batDau = (trangHienTai - 1) * ITEMS_PER_PAGE;
            const ketThuc = batDau + ITEMS_PER_PAGE;
            const dataTrangHienTai = data.slice(batDau, ketThuc);

            // TỐI ƯU SEO: Đổ text thô vào vùng ẩn liên tục khi render để Bot đọc được toàn bộ giỏ hàng
            const vungBotSeo = document.getElementById('du-lieu-crawl-bot');
            if (vungBotSeo) {
                vungBotSeo.innerHTML = data.map(item => \`
                    <article>
                        <h3>\${item.tieude || ''}</h3>
                        <p>\${item.moTa || ''}</p>
                        <span>Giá: \${item.gia || ''} - Diện tích: \${item.dienTich || ''} - Khu vực: \${item.khuVucFull || ''} - Ngày đăng: \${item.ngayDang || ''}</span>
                    </article>
                \`).join('');
            }

            grid.innerHTML = dataTrangHienTai.map(item => {
                const vanBanCachDay = tinhThoiGianCachDay(item.ngayDang);
                const danhSachAnh = layMangHinhAnh(item.anh);
                const anhDaiDien = danhSachAnh.length > 0 ? danhSachAnh[0] : 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80';

                return \`
                    <article onclick="kichHoatMoChiTietTheoId(\${item.id})" class="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer transform hover:-translate-y-1">
                        <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
                            <img src="\${anhDaiDien}" alt="\${item.tieude}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <span class="absolute top-3 left-3 \${item.tagColor || 'bg-slate-900'} text-white font-bold text-[10px] uppercase px-2.5 py-1 rounded-lg tracking-wider shadow-sm">\${item.tag || 'Bán Đất'}</span>
                            \${item.huong ? \`<span class="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 font-extrabold text-[10px] px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1"><i data-lucide="compass" class="w-3 h-3 text-amber-500"></i>\${item.huong}</span>\` : ''}
                            
                            <span class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
                                <i data-lucide="clock" class="w-3 h-3 text-amber-400"></i> \${vanBanCachDay}
                            </span>
                            
                            <span class="absolute bottom-3 right-3 bg-slate-900/90 backdrop-blur-sm text-white font-extrabold text-sm px-3 py-1 rounded-xl shadow-md">\${item.gia}</span>
                        </div>
                        <div class="p-5 flex-1 flex flex-col justify-between">
                            <div>
                                <div class="flex items-center gap-1 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">
                                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i>
                                    <span class="line-clamp-1">\${item.khuVucFull}</span>
                                </div>
                                <h3 class="font-bold text-slate-900 line-clamp-2 group-hover:text-amber-500 text-sm sm:text-base leading-snug transition-colors">\${item.tieude}</h3>
                            </div>
                            <div class="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-slate-500 text-sm font-medium">
                                <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-400">
                                    <span><i data-lucide="square" class="w-3.5 h-3.5 inline mr-0.5"></i> \${item.dienTich}</span>
                                    <span><i data-lucide="bed" class="w-3.5 h-3.5 inline mr-0.5"></i> \${item.phongNgu || 'Đất ở'}</span>
                                </div>
                                <span class="text-amber-500 font-bold flex items-center gap-0.5 text-xs uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">Chi tiết <i data-lucide="chevron-right" class="w-3 h-3"></i></span>
                            </div>
                        </div>
                    </article>
                \`;
            }).join('');

            renderNutPhanTrang(data.length);
            lucide.createIcons();
        }

        function renderNutPhanTrang(tongSoBai) {
            let vungNut = document.getElementById('vung-nut-phan-trang');
            if (!vungNut) {
                vungNut = document.createElement('div');
                vungNut.id = 'vung-nut-phan-trang';
                vungNut.className = 'col-span-full flex justify-center items-center gap-2 mt-8';
                document.getElementById('grid-bds').parentNode.insertBefore(vungNut, document.getElementById('grid-bds').nextSibling);
            }

            const tongSoTrang = Math.ceil(tongSoBai / ITEMS_PER_PAGE);
            if (tongSoTrang <= 1) { vungNut.innerHTML = ''; return; }

            let htmlNut = '';
            for (let i = 1; i <= tongSoTrang; i++) {
                const nutActive = i === trangHienTai ? 'bg-amber-500 text-slate-900 shadow-sm font-extrabold scale-105' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300';
                htmlNut += \`<button onclick="chuyenTrang(\${i})" class="\${nutActive} w-9 h-9 rounded-xl text-sm transition-all active:scale-95 font-bold">\${i}</button>\`;
            }
            vungNut.innerHTML = htmlNut;
        }

        function chuyenTrang(soTrang) {
            trangHienTai = soTrang;
            renderGiaoDien(duLieuLocHienTai);
            window.scrollTo({ top: document.getElementById('listing-section').offsetTop - 90, behavior: 'smooth' });
        }

        function locTongHop() {
            const kv = document.getElementById('filter-khuvuc').value; 
            const lh = document.getElementById('filter-loaihinh').value;
            const gia = document.getElementById('filter-gia').value;
            const huong = document.getElementById('filter-huong').value;
            
            let kq = danhSachBds;
            if (kv !== 'all') kq = kq.filter(i => i.khuVuc === kv);
            if (lh !== 'all') kq = kq.filter(i => i.loaiHinh === lh);
            
            if (gia !== 'all') {
                if (gia === 'duoi3') kq = kq.filter(i => i.soGia < 3.0);
                else if (gia === '3to5') kq = kq.filter(i => i.soGia >= 3.0 && i.soGia <= 5.0);
                else if (gia === 'tren5') kq = kq.filter(i => i.soGia > 5.0);
            }
            if (huong !== 'all') kq = kq.filter(i => i.huong && i.huong.toLowerCase().includes(huong.toLowerCase()));
            trangHienTai = 1; renderGiaoDien(kq);
        }

        // ĐÃ SỬA: Thay thế hoàn toàn thuộc tính window.event lỗi thời bằng tham số truyền đối tượng trực tiếp
        function locTheoTag(element, tag) {
            const buttons = document.querySelectorAll('.tag-btn'); 
            buttons.forEach(b => { 
                b.classList.remove('bg-slate-900', 'text-white', 'shadow-sm'); 
                b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200'); 
            });
            if(element) {
                element.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200'); 
                element.classList.add('bg-slate-900', 'text-white', 'shadow-sm');
            }
            let kq = danhSachBds;
            if (tag === 'mattien') kq = danhSachBds.filter(i => i.isMatTien === true || i.isMatTien === 'TRUE');
            else if (tag === 'chinhchu') kq = danhSachBds.filter(i => i.tag && i.tag.includes("Chính Chủ"));
            trangHienTai = 1; renderGiaoDien(kq);
        }

        function kichHoatMoChiTietTheoId(id) {
            moChiTiet(id);
            window.history.pushState({id: id}, "", \`?id=\${id}\`);
        }

        function chuyenAnhSlide(huong) {
            const vungTruot = document.getElementById('vung-truot-anh-bds');
            if (!vungTruot) return;
            const doRongKhung = vungTruot.clientWidth;
            if (huong === 'phai') {
                vungTruot.scrollBy({ left: doRongKhung, behavior: 'smooth' });
            } else {
                vungTruot.scrollBy({ left: -doRongKhung, behavior: 'smooth' });
            }
        }

        function moChiTiet(id) {
            const item = danhSachBds.find(p => p.id === id); if (!item) return;

            const tieuDeSeoMoi = \`\${item.tieude} | Trần Huy Land\`;
            const moTaSeoMoi = \`Giá bán: \${item.gia}. Diện tích: \${item.dienTich}. Vị trí: \${item.khuVucFull}. \${item.moTa.substring(0, 100)}...\`;
            
            document.getElementById('seo-title').textContent = tieuDeSeoMoi;
            document.getElementById('seo-description').setAttribute('content', moTaSeoMoi);
            document.getElementById('og-title').setAttribute('content', tieuDeSeoMoi);
            document.getElementById('og-description').setAttribute('content', moTaSeoMoi);

            document.getElementById('logo-header').innerHTML = \`<div class="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">TRẦN HUY LAND</div>\`;

            const vanBanCachDay = tinhThoiGianCachDay(item.ngayDang);
            const ngaySachDinhDang = item.ngayDang ? item.ngayDang.toString().replace(/[\\r\\n\\t]/g, "").trim().replace(/-/g, '/') : '';

            const danhSachAnh = layMangHinhAnh(item.anh);
            document.getElementById('og-image').setAttribute('content', danhSachAnh.length > 0 ? danhSachAnh[0] : '');

            let vungHienThiMediaHTML = '';
            let tongSoMục = danhSachAnh.length + (item.videoUrl ? 1 : 0);

            vungHienThiMediaHTML = \`
                <div class="w-full relative group/slide aspect-[16/10] bg-slate-100">
                    <div id="vung-truot-anh-bds" class="w-full h-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar">
                        \${item.videoUrl ? \`
                            <div class="w-full h-full flex-shrink-0 snap-start snap-always relative">
                                <iframe class="w-full h-full" src="\${item.videoUrl}" frameborder="0" allowfullscreen></iframe>
                            </div>
                        \` : ''}
                        \${danhSachAnh.map(url => \`
                            <div class="w-full h-full flex-shrink-0 snap-start snap-always">
                                <img src="\${url}" alt="\${item.tieude}" class="w-full h-full object-cover">
                            </div>
                        \`).join('')}
                    </div>
                    
                    \${tongSoMục > 1 ? \`
                        <button onclick="chuyenAnhSlide('trai')" class="absolute left-3 top-1/2 -translate-y-1/2 z-50 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all opacity-90 sm:opacity-50 sm:group-hover/slide:opacity-100 active:scale-90">
                            <i data-lucide="chevron-left" class="w-5 h-5"></i>
                        </button>
                        <button onclick="chuyenAnhSlide('phai')" class="absolute right-3 top-1/2 -translate-y-1/2 z-50 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-all opacity-90 sm:opacity-50 sm:group-hover/slide:opacity-100 active:scale-90">
                            <i data-lucide="chevron-right" class="w-5 h-5"></i>
                        </button>
                        
                        <div class="bg-slate-900/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md absolute top-4 left-4 z-10 select-none pointer-events-none flex items-center gap-1 shadow-sm uppercase tracking-wider">
                            <i data-lucide="layers" class="w-3 h-3 text-amber-400"></i> Giỏ hàng: \${item.videoUrl ? '1 Video & ' : ''}\${danhSachAnh.length} Ảnh
                        </div>
                    \` : ''}
                </div>
            \`;

            document.getElementById('noi-dung-modal').innerHTML = \`
                <div class="relative w-full">
                    \${vungHienThiMediaHTML}
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between">
                        <span class="bg-amber-100 text-amber-900 font-extrabold text-base px-3 py-1 rounded-xl shadow-sm">\${item.gia}</span>
                        <span class="text-xs text-slate-400 font-bold uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100"><i data-lucide="shield-check" class="w-4 h-4 inline text-emerald-500 mr-1"></i>\${item.phapLy || 'Sổ hồng sẵn sàng'}</span>
                    </div>
                    <h1 class="text-base sm:text-lg font-extrabold text-slate-900 mt-4 leading-snug">\${item.tieude}</h1>
                    
                    <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400 text-xs mt-2 border-b border-slate-100 pb-4 font-semibold">
                        <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-500"></i>\${item.khuVucFull}</span>
                        \${ngaySachDinhDang ? \`
                            <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>Đăng: \${ngaySachDinhDang}</span>
                            <span class="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded-md text-[10px] uppercase">\${vanBanCachDay}</span>
                        \` : ''}
                    </div>
                    
                    <div class="grid grid-cols-3 gap-2 my-5 p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 text-center font-semibold shadow-inner">
                        <div><div class="text-slate-400 text-[11px] font-bold uppercase mb-0.5 tracking-wider">Diện tích</div><strong class="text-slate-900 text-sm sm:text-base">\${item.dienTich}</strong></div>
                        <div><div class="text-slate-400 text-[11px] font-bold uppercase mb-0.5 tracking-wider">Cấu trúc</div><strong class="text-slate-900 text-sm sm:text-base">\${item.phongNgu || 'Đất ở'}</strong></div>
                        <div><div class="text-slate-400 text-[11px] font-bold uppercase mb-0.5 tracking-wider">Hướng</div><strong class="text-slate-900 text-sm sm:text-base">\${item.huong || 'Chưa rõ'}</strong></div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3 mb-5">
                        \${item.linkMap ? \`<a href="\${item.linkMap}" target="_blank" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold border border-emerald-200 rounded-xl py-2.5 px-3 text-center text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-sm"><i data-lucide="map" class="w-4 h-4"></i> Bản Đồ Vị Trí</a>\` : ''}
                        \${item.anhSoDo ? \`<button onclick="moModalSoDo('\${item.anhSoDo}')" class="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold border border-indigo-200 rounded-xl py-2.5 px-3 text-center text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-sm"><i data-lucide="file-text" class="w-4 h-4"></i> Sổ Đỏ Bản Vẽ</button>\` : ''}
                    </div>
                    <h4 class="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2">Mô tả thực tế nhà đất:</h4>
                    <p class="text-slate-700 text-sm sm:text-base leading-relaxed text-justify whitespace-pre-line mb-6">\${item.moTa}</p>
                    <div class="flex gap-3 mt-4 border-t border-slate-100 pt-4">
                        <a href="tel:0931555551" class="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-xl py-3 px-4 flex items-center justify-center gap-2 text-sm transition-all active:scale-95 shadow-md">
                            <i data-lucide="phone" class="w-4 h-4 text-amber-400 fill-amber-400"></i> Gọi Thỏa Thuận
                        </a>
                        <a href="https://zalo.me/0931555551" target="_blank" class="flex-1 bg-[#0068ff] hover:opacity-90 text-white font-extrabold rounded-xl py-3 px-4 flex items-center justify-center text-sm transition-all active:scale-95 shadow-md">Liên Hệ Zalo</a>
                    </div>
                </div>
            \`;
            document.getElementById('modal-chi-tiet').classList.remove('hidden'); document.body.style.overflow = 'hidden'; lucide.createIcons();
        }

        function moModalSoDo(urlAnh) { document.getElementById('anh-so-do-popup').src = urlAnh; document.getElementById('modal-so-do').classList.remove('hidden'); }
        function dongModalSoDo() { document.getElementById('modal-so-do').classList.add('hidden'); document.getElementById('anh-so-do-popup').src = ""; }
        
        function kichHoatDongModal() {
            window.history.pushState({}, "", window.location.pathname);
            dongModal();
        }

        function dongModal() { 
            const modal = document.getElementById('modal-chi-tiet');
            if (modal.classList.contains('hidden')) return;

            modal.classList.add('hidden'); 
            document.body.style.overflow = ''; 
            
            document.getElementById('seo-title').textContent = GOC_SEO.title;
            document.getElementById('seo-description').setAttribute('content', GOC_SEO.desc);
            
            const logoHeader = document.getElementById('logo-header');
            if (!logoHeader.querySelector('h1')) {
                logoHeader.innerHTML = \`<h1 class="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">TRẦN HUY LAND</h1>\`;
            }
        }
        
        function moModalKyGui() { document.getElementById('modal-ky-gui').classList.remove('hidden'); document.body.style.overflow = 'hidden'; }
        function dongModalKyGui() { document.getElementById('modal-ky-gui').classList.add('hidden'); document.body.style.overflow = ''; }

        function xuLyGuiFormKyGui(event) {
            event.preventDefault();
            const ten = document.getElementById('kg-ten').value; const diachi = document.getElementById('kg-diachi').value; const gia = document.getElementById('kg-gia').value || "Thương lượng";
            const tinNhan = \`Chào anh Huy, tôi muốn ký gửi nhà đất với thông tin:\\n- Liên hệ: \${ten}\\n- Địa chỉ: \${diachi}\\n- Giá mong muốn: \${gia}\`;
            navigator.clipboard.writeText(tinNhan).then(() => {
                alert("📋 Đã tự động sao chép thông tin ký gửi!\\nHệ thống đang mở Zalo anh Huy, bạn chỉ cần bấm chọn 'DÁN' (Paste) và gửi đi là xong ngay nhé.");
                window.open("https://zalo.me/0931555551", "_blank"); dongModalKyGui();
            }).catch(err => { window.open("https://zalo.me/0931555551", "_blank"); dongModalKyGui(); });
        }

        async function taiDuLieuTuSheet() {
            if(!LINK_CSV_GOOGLE_SHEET) return;
            try {
                const response = await fetch(LINK_CSV_GOOGLE_SHEET); const text = await response.text();
                const lines = text.split('\\n'); const headers = lines[0].split(',').map(h => h.trim());
                const jsonResult = [];
                for (let i = 1; i < lines.length; i++) {
                    if (!lines[i].trim()) continue;
                    const currentLine = []; let insideQuote = false; let entries = "";
                    for (let j = 0; j < lines[i].length; j++) {
                        let char = lines[i][j];
                        if (char === '"') insideQuote = !insideQuote;
                        else if (char === ',' && !insideQuote) { currentLine.push(entries.trim()); entries = ""; }
                        else entries += char;
                    }
                    currentLine.push(entries.trim());
                    if (currentLine.length >= headers.length) {
                        const obj = {};
                        headers.forEach((h, idx) => {
                            let val = currentLine[idx] ? currentLine[idx].replace(/[\\"\\']/g, "") : "";
                            if (h === 'id') obj[h] = parseInt(val) || i;
                            else if (h === 'soGia') obj[h] = parseFloat(val) || 0;
                            else obj[h] = val.replace(/[\\r\\n]/g, "").trim(); 
                        });
                        jsonResult.push(obj);
                    }
                }
                if(jsonResult.length > 0) danhSachBds = jsonResult;
                renderGiaoDien(danhSachBds);

                const urlParams = new URLSearchParams(window.location.search);
                const currentProductId = parseInt(urlParams.get('id'));
                if (currentProductId) { moChiTiet(currentProductId); }

            } catch (e) { console.error(e); }
        }
        window.onload = taiDuLieuTuSheet;

        window.addEventListener('popstate', function(event) {
            const urlParams = new URLSearchParams(window.location.search);
            const currentProductId = parseInt(urlParams.get('id'));
            if (currentProductId) { moChiTiet(currentProductId); } else { dongModal(); }
        });

        const khungModalChiTiet = document.getElementById('khung-noi-dung-modal');
        let batDauX = 0; let batDauY = 0;
        khungModalChiTiet.addEventListener('touchstart', function(e) {
            batDauX = e.changedTouches[0].screenX; batDauY = e.changedTouches[0].screenY;
        }, { passive: true });
        khungModalChiTiet.addEventListener('touchend', function(e) {
            if (e.target.closest('#vung-truot-anh-bds')) return;
            const ketThucX = e.changedTouches[0].screenX; const ketThucY = e.changedTouches[0].screenY;
            const khoangCachX = ketThucX - batDauX; const khoangCachY = Math.abs(ketThucY - batDauY);
            if (khoangCachX > 70 && khoangCachY < 40) { window.history.back(); }
        }, { passive: true });
    </script>
` }} />
  );
}