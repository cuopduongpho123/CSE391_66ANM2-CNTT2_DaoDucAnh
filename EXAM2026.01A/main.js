let employees = [...employeesData];

document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("employeeTableBody");
    const modal = document.getElementById("modal");
    const btnOpenModal = document.getElementById("btnOpenModal");
    const btnCancel = document.getElementById("btnCancel");
    const btnCloseModal = document.getElementById("btnCloseModal");
    const form = document.getElementById("employeeForm");

    const hoTen = document.getElementById("hoTen");
    const email = document.getElementById("email");
    const soDienThoai = document.getElementById("soDienThoai");
    const date = document.getElementById("date");
    const location = document.getElementById("location");

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function renderTable(list = employees) {
        tableBody.innerHTML = "";

        if (list.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align:center;">Không tìm thấy dữ liệu</td>
                </tr>
            `;
            return;
        }

        list.forEach(function (emp) {
            const row = `
                <tr>
                    <td>${emp.hoTen}</td>
                    <td>${emp.email}</td>
                    <td>${emp.soDienThoai}</td>
                    <td>${emp.date || ""}</td>
                    <td>${emp.location || ""}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    }

    function openModal() {
        modal.classList.remove("hidden");
    }

    function closeModal() {
        modal.classList.add("hidden");
        form.reset();
        clearErrors();
    }

    function clearErrors() {
        document.getElementById("errorHoTen").innerText = "";
        document.getElementById("errorEmail").innerText = "";
        document.getElementById("errorSoDienThoai").innerText = "";
        document.getElementById("errorLocation").innerText = "";
        document.getElementById("err-date").innerText = "";
    }

    function validateForm() {
        clearErrors();
        let isValid = true;

        if (hoTen.value.trim() === "") {
            document.getElementById("errorHoTen").innerText = "Please enter the Conference";
            isValid = false;
        } else if (hoTen.value.trim().length > 60) {
            document.getElementById("errorHoTen").innerText = "Tối đa 60 ký tự";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim() === "") {
            document.getElementById("errorEmail").innerText = "Enter email";
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            document.getElementById("errorEmail").innerText = "Email invalidable";
            isValid = false;
        }

        if (soDienThoai.value.trim() === "") {
            document.getElementById("errorSoDienThoai").innerText = "Enter speaker";
            isValid = false;
        }

        if (location.value.trim() === "") {
            document.getElementById("errorLocation").innerText = "Enter location";
            isValid = false;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (date.value === "") {
            document.getElementById("err-date").innerText = "Enter ngày";
            isValid = false;
        } else {
            const dateValue = new Date(date.value);
            if (dateValue <= today) {
                document.getElementById("err-date").innerText = "Day must be in the furture";
                isValid = false;
            }
        }

        return isValid;
    }

    btnOpenModal.addEventListener("click", function () {
        openModal();
    });

    btnCloseModal.addEventListener("click", function () {
        closeModal();
    });

    btnCancel.addEventListener("click", function () {
        closeModal();
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (!validateForm()) return;

        const newEmployee = {
            hoTen: hoTen.value.trim(),
            email: email.value.trim(),
            soDienThoai: soDienThoai.value.trim(),
            date: date.value,
            location: location.value.trim()
        };

        employees.push(newEmployee);
        renderTable();
        closeModal();
    });

    function searchEmployees() {
        const keyword = searchInput.value.trim().toLowerCase();

        if (keyword === "") {
            renderTable();
            return;
        }

        const filtered = employees.filter(function (emp) {
            return (
                emp.hoTen.toLowerCase().includes(keyword) ||
                emp.email.toLowerCase().includes(keyword) ||
                emp.soDienThoai.toLowerCase().includes(keyword) ||
                emp.location.toLowerCase().includes(keyword) ||
                emp.date.toLowerCase().includes(keyword)
            );
        });

        renderTable(filtered);
    }

    searchBtn.addEventListener("click", function () {
        searchEmployees();
    });

    searchInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            searchEmployees();
        }
    });

    renderTable();
});