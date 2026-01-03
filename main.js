document.addEventListener("DOMContentLoaded", () => {

    // 1. XỬ LÝ MENU MOBILE (HAMBURGER)
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    // Toggle menu khi bấm icon
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    // Tự động đóng menu khi bấm vào link
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

    // 2. XỬ LÝ FORM LIÊN HỆ (VALIDATION)
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("success-msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Ngăn load lại trang

        // Lấy giá trị
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Reset thông báo lỗi
        document.querySelectorAll(".error-msg").forEach(span => span.textContent = "");
        successMsg.textContent = "";

        let isValid = true;

        // Kiểm tra validation
        if (name === "") {
            document.getElementById("error-name").textContent = "Vui lòng nhập họ tên";
            isValid = false;
        }

        if (email === "") {
            document.getElementById("error-email").textContent = "Vui lòng nhập email";
            isValid = false;
        } else if (!email.includes("@")) {
            document.getElementById("error-email").textContent = "Email không hợp lệ";
            isValid = false;
        }

        if (message === "") {
            document.getElementById("error-message").textContent = "Vui lòng nhập nội dung";
            isValid = false;
        }

        // Nếu hợp lệ thì thông báo thành công
        if (isValid) {
            successMsg.textContent = "Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm.";
            successMsg.style.color = "green";
            form.reset(); // Xóa trắng form
        }
    });
});